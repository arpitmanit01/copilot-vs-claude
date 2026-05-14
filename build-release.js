/**
 * build-release.js
 *
 * Bundles the entire static site into a single self-contained HTML file.
 * The output file (dist/copilot-vs-claude.html) can be opened directly
 * in any browser — no server, no extra files.
 *
 * Usage:  node build-release.js
 * Output: dist/copilot-vs-claude.html
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8");
}

// ── Read source files ──────────────────────────────────────────────
const indexHtml = read("index.html");
const styleCss = read("style.css");
const scriptJs = read("script.js");
const playgroundHtml = read("playground.html");
const playgroundCss = read("playground.css");
const playgroundDataJs = read("playground-data.js");

// ── Read package version (if exists) or fall back to git tag ───────
let version = "1.0.0";
try {
  const pkg = JSON.parse(read("package.json"));
  version = pkg.version || version;
} catch {
  // no package.json — that's fine
}

// ── Build the main page (index) with inlined assets ────────────────
let mainPage = indexHtml;

// Replace the external stylesheet link with inline <style>
mainPage = mainPage.replace(
  /<link rel="stylesheet" href="style\.css"\s*\/?>/,
  `<style>\n${styleCss}\n</style>`
);

// Replace the external script tag with inline <script>
mainPage = mainPage.replace(
  /<script src="script\.js"><\/script>/,
  `<script>\n${scriptJs}\n</script>`
);

// ── Build the playground page with inlined assets ──────────────────
let pgPage = playgroundHtml;

pgPage = pgPage.replace(
  /<link rel="stylesheet" href="style\.css"\s*\/?>/,
  `<style>\n${styleCss}\n</style>`
);
pgPage = pgPage.replace(
  /<link rel="stylesheet" href="playground\.css"\s*\/?>/,
  `<style>\n${playgroundCss}\n</style>`
);
pgPage = pgPage.replace(
  /<script src="playground-data\.js"><\/script>/,
  `<script>\n${playgroundDataJs}\n</script>`
);

// ── Combine into a single HTML file ────────────────────────────────
// We embed the playground as a data URI inside a hidden template,
// and use JS to switch between the two views.

const combinedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Copilot CLI vs Claude Code — Command Reference v${version}</title>
  <style>
${styleCss}
${playgroundCss}
  #app-main, #app-playground { display: none; }
  #app-main.active, #app-playground.active { display: block; }
  </style>
</head>
<body>

  <!-- ===== MAIN PAGE ===== -->
  <div id="app-main" class="active">
${extractBody(mainPage)}
  </div>

  <!-- ===== PLAYGROUND PAGE ===== -->
  <div id="app-playground">
${extractBody(pgPage)}
  </div>

  <!-- ===== INLINED DATA ===== -->
  <script>
${playgroundDataJs}
  </script>

  <!-- ===== MAIN PAGE LOGIC ===== -->
  <script>
${scriptJs}
  </script>

  <!-- ===== NAVIGATION ROUTER ===== -->
  <script>
(function() {
  // Single-page router: intercept playground links
  function route() {
    const hash = window.location.hash;
    const mainDiv = document.getElementById('app-main');
    const pgDiv   = document.getElementById('app-playground');

    if (hash && hash.startsWith('#playground?')) {
      mainDiv.classList.remove('active');
      pgDiv.classList.add('active');
      // Parse cmd from hash
      const params = new URLSearchParams(hash.substring('#playground?'.length));
      loadPlaygroundFromHash(params.get('cmd'));
      window.scrollTo(0, 0);
    } else {
      pgDiv.classList.remove('active');
      mainDiv.classList.add('active');
      window.scrollTo(0, 0);
    }
  }

  // Rewrite playground links to use hash navigation
  function rewriteLinks() {
    document.querySelectorAll('a[href*="playground.html"]').forEach(function(a) {
      const url = new URL(a.href, window.location.href);
      const cmd = url.searchParams.get('cmd');
      if (cmd) {
        a.href = '#playground?cmd=' + cmd;
      }
    });
    // Rewrite "Back to Command Reference" links
    document.querySelectorAll('.back-link').forEach(function(a) {
      a.href = '#';
    });
  }

  // Load playground content from hash
  function loadPlaygroundFromHash(id) {
    if (!id || !window.PLAYGROUND_DATA) return;
    const data = window.PLAYGROUND_DATA;
    const item = data.find(function(d) { return d.id === id; });
    if (!item) return;

    var pgTitle = document.getElementById('pg-title');
    var pgCat   = document.getElementById('pg-category');
    var content = document.getElementById('playground-content');
    var nav     = document.getElementById('pg-nav');

    if (pgTitle) pgTitle.textContent = item.title;
    if (pgCat) pgCat.innerHTML =
      '<span class=\"badge ' + (item.tool === 'both' ? 'common' : item.tool) + '\">' +
      (item.tool === 'both' ? 'Common' : item.tool === 'copilot' ? 'Copilot Only' : 'Claude Only') +
      '</span> &nbsp;' + item.category;

    if (content) content.innerHTML = renderPlayground(item);
    document.title = item.title + ' — Playground';

    // Navigation
    var idx = data.indexOf(item);
    if (nav) nav.classList.remove('hidden');
    var prevBtn = document.getElementById('pg-prev');
    var nextBtn = document.getElementById('pg-next');
    if (prevBtn) {
      if (idx > 0) {
        prevBtn.href = '#playground?cmd=' + data[idx - 1].id;
        prevBtn.textContent = '← ' + data[idx - 1].title;
        prevBtn.classList.remove('disabled');
      } else { prevBtn.classList.add('disabled'); }
    }
    if (nextBtn) {
      if (idx < data.length - 1) {
        nextBtn.href = '#playground?cmd=' + data[idx + 1].id;
        nextBtn.textContent = data[idx + 1].title + ' →';
        nextBtn.classList.remove('disabled');
      } else { nextBtn.classList.add('disabled'); }
    }

    // Copy handlers
    if (content) {
      content.querySelectorAll('.copy-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var code = btn.closest('.cmd-block').querySelector('code').textContent;
          copyToClipboard(code, btn);
        });
      });
      content.querySelectorAll('.copy-setup-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var code = btn.closest('.setup-block').querySelector('code').textContent;
          copyToClipboard(code, btn);
        });
      });
    }
  }

  // Playground render helpers (duplicated from playground.html inline script)
  var TOAST_DURATION = 1800;
  function copyToClipboard(text, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        flashCopied(btn);
      }).catch(function() { fallbackCopy(text, btn); });
    } else { fallbackCopy(text, btn); }
  }
  function fallbackCopy(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    flashCopied(btn);
  }
  function flashCopied(btn) {
    var orig = btn.textContent;
    btn.textContent = '✓ Copied!'; btn.classList.add('copied');
    setTimeout(function() { btn.textContent = orig; btn.classList.remove('copied'); }, TOAST_DURATION);
  }

  function renderPlayground(item) {
    var html = '';
    html += '<section class=\"pg-section\"><h2>What is this?</h2><p>' + item.description + '</p></section>';
    html += '<section class=\"pg-section\"><h2>What to Expect</h2><div class=\"expect-box\"><p>' + item.what_to_expect + '</p></div></section>';
    html += '<section class=\"pg-section\"><h2>🛠️ Quick Setup</h2>';
    if (item.setup_goal) html += '<div class=\"setup-goal\"><p><strong>Goal:</strong> ' + item.setup_goal + '</p></div>';
    html += '<p class=\"hint\">Copy-paste this block to create a demo environment and try it out:</p>';
    html += '<div class=\"setup-block\"><div class=\"setup-header\"><span>Terminal</span><button class=\"copy-setup-btn\">Copy All</button></div><pre><code>' + escapeHtml(item.setup) + '</code></pre></div></section>';
    if (item.commands_copilot && item.commands_copilot.length > 0) {
      html += '<section class=\"pg-section\"><h2><span class=\"tool-label copilot-label\">Copilot CLI</span> Commands</h2><div class=\"cmd-list\">' + item.commands_copilot.map(renderCmd).join('') + '</div></section>';
    }
    if (item.commands_claude && item.commands_claude.length > 0) {
      html += '<section class=\"pg-section\"><h2><span class=\"tool-label claude-label\">Claude Code</span> Commands</h2><div class=\"cmd-list\">' + item.commands_claude.map(renderCmd).join('') + '</div></section>';
    }
    if (item.try_this && item.try_this.length > 0) {
      html += '<section class=\"pg-section\"><h2>🧪 Try This</h2><ol class=\"try-list\">' + item.try_this.map(function(t) { return '<li>' + t + '</li>'; }).join('') + '</ol></section>';
    }
    if (item.tips) {
      html += '<section class=\"pg-section\"><h2>💡 Pro Tips</h2><div class=\"tips-box\"><p>' + item.tips + '</p></div></section>';
    }
    return html;
  }
  function renderCmd(c) {
    return '<div class=\"cmd-block\"><div class=\"cmd-row\"><code>' + escapeHtml(c.cmd) + '</code><button class=\"copy-btn\">Copy</button></div><p class=\"cmd-desc\">' + c.desc + '</p></div>';
  }
  function escapeHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // Boot
  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', function() {
    rewriteLinks();
    route();
  });
})();
  </script>
</body>
</html>`;

// ── Write output ───────────────────────────────────────────────────
if (!fs.existsSync(DIST)) fs.mkdirSync(DIST);
const outPath = path.join(DIST, "copilot-vs-claude.html");
fs.writeFileSync(outPath, combinedHtml, "utf8");

const sizeKB = (fs.statSync(outPath).size / 1024).toFixed(1);
console.log(`✅ Built: dist/copilot-vs-claude.html (${sizeKB} KB)`);
console.log("   Open this single file in any browser — no server needed.");

// ── Helper ─────────────────────────────────────────────────────────
function extractBody(html) {
  // Extract content between <body> and </body>
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!match) return html;
  // Strip <script> tags (we handle them separately)
  return match[1]
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<header>/, '<header>') // keep as-is
    .trim();
}
