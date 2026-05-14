// Playground link mapping — maps row text patterns to playground IDs
const PLAYGROUND_MAP = [
  { match: "start interactive session", id: "start-session" },
  { match: "start with initial prompt", id: "start-session" },
  { match: "continue last session", id: "continue-session" },
  { match: "resume a named session", id: "continue-session" },
  { match: "select model", id: "model-selection" },
  { match: "run shell commands inline", id: "shell-commands" },
  { match: "mention files in prompt", id: "file-mention" },
  { match: "skip permission prompts", id: "permissions" },
  { match: "add mcp config", id: "mcp" },
  { match: "print mode", id: "print-mode" },
  { match: "pipe input", id: "print-mode" },
  { match: "set effort level on launch", id: "effort" },
  { match: "background agent on launch", id: "background" },
  { match: "max budget", id: "print-mode" },
  { match: "max turns", id: "print-mode" },
  { match: "json output format", id: "print-mode" },
  { match: "permission mode on launch", id: "permissions" },
  { match: "agent view", id: "background" },
  { match: "attach to bg session", id: "background" },
  { match: "autopilot", id: "autopilot" },
  // Session Management
  { match: "/clear", id: "clear-session" },
  { match: "/compact", id: "compact" },
  { match: "/resume", id: "continue-session" },
  { match: "/rename", id: "rename" },
  { match: "/context", id: "context" },
  { match: "/usage", id: "usage" },
  { match: "/exit", id: "start-session" },
  { match: "/share", id: "share" },
  { match: "/background", id: "background" },
  { match: "/export", id: "export" },
  { match: "/branch", id: "background" },
  { match: "/insights", id: "usage" },
  { match: "/recap", id: "usage" },
  // Code & Development
  { match: "/diff", id: "diff" },
  { match: "/plan", id: "plan" },
  { match: "/review", id: "review" },
  { match: "/rewind", id: "rewind-undo" },
  { match: "/copy", id: "copy" },
  { match: "/init", id: "init" },
  { match: "/pr", id: "pr" },
  { match: "/delegate", id: "delegate" },
  { match: "/fleet", id: "fleet" },
  { match: "/batch", id: "batch" },
  { match: "/simplify", id: "batch" },
  { match: "/security-review", id: "security-review" },
  { match: "/ultrareview", id: "ultrareview" },
  { match: "/ultraplan", id: "ultrareview" },
  { match: "/autofix-pr", id: "autofix-pr" },
  { match: "/goal", id: "goal" },
  { match: "/loop", id: "loop" },
  // Agent & Model
  { match: "/model", id: "model-selection" },
  { match: "/agent", id: "agent" },
  { match: "/skills", id: "skills" },
  { match: "/mcp", id: "mcp" },
  { match: "/plugin", id: "plugin" },
  { match: "/tasks", id: "tasks" },
  { match: "/lsp", id: "lsp" },
  { match: "/sidekicks", id: "fleet" },
  { match: "/effort", id: "effort" },
  { match: "/fast", id: "effort" },
  { match: "/claude-api", id: "print-mode" },
  // Permissions
  { match: "/add-dir", id: "add-dir" },
  { match: "/allow-all", id: "permissions" },
  { match: "/list-dirs", id: "add-dir" },
  { match: "/cwd", id: "add-dir" },
  { match: "/reset-allowed-tools", id: "permissions" },
  { match: "/permissions", id: "permissions" },
  { match: "/fewer-permission", id: "permissions" },
  { match: "/sandbox", id: "permissions" },
  // UI
  { match: "/theme", id: "theme" },
  { match: "/instructions", id: "init" },
  { match: "/statusline", id: "statusline" },
  { match: "/streamer-mode", id: "theme" },
  { match: "/config", id: "theme" },
  { match: "/color", id: "theme" },
  { match: "/focus", id: "theme" },
  { match: "/tui", id: "theme" },
  { match: "/scroll-speed", id: "theme" },
  { match: "/keybindings", id: "theme" },
  // Quick Questions
  { match: "side question", id: "ask-btw" },
  { match: "/research", id: "research" },
  { match: "/debug", id: "debug-doctor" },
  { match: "/doctor", id: "debug-doctor" },
  // Help & Meta
  { match: "/help", id: "help" },
  { match: "/feedback", id: "feedback" },
  { match: "/hooks", id: "init" },
  { match: "/ide", id: "ide" },
  { match: "/terminal-setup", id: "terminal-setup" },
  { match: "/login", id: "login-logout" },
  { match: "/logout", id: "login-logout" },
  { match: "/changelog", id: "help" },
  { match: "/update", id: "help" },
  { match: "/version", id: "help" },
  { match: "/every", id: "every-schedule" },
  { match: "/autopilot", id: "autopilot" },
  { match: "/remote", id: "delegate" },
  { match: "/memory", id: "init" },
  { match: "/schedule", id: "loop" },
  { match: "/remote-control", id: "delegate" },
  { match: "/voice", id: "voice" },
  { match: "/chrome", id: "debug-doctor" },
  { match: "/install-github-app", id: "init" },
  { match: "/teleport", id: "background" },
  { match: "/team-onboarding", id: "init" },
  { match: "/powerup", id: "help" },
  { match: "/privacy-settings", id: "permissions" },
  { match: "/extra-usage", id: "usage" },
  { match: "/release-notes", id: "help" },
  { match: "/desktop", id: "background" },
  { match: "/stickers", id: "help" },
  { match: "/radio", id: "help" },
  { match: "/env", id: "help" },
  { match: "/keep-alive", id: "help" },
  { match: "/user", id: "help" },
  { match: "/new", id: "clear-session" },
  { match: "/restart", id: "start-session" },
  { match: "/search", id: "help" },
  { match: "/chronicle", id: "usage" },
];

function findPlaygroundId(rowText) {
  const lower = rowText.toLowerCase();
  for (const entry of PLAYGROUND_MAP) {
    if (lower.includes(entry.match)) return entry.id;
  }
  return null;
}

// Filter, search, and playground link logic
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("search");

  // Add "Play" column header to every table
  document.querySelectorAll("table thead tr").forEach((headerRow) => {
    const th = document.createElement("th");
    th.textContent = "Play";
    th.style.textAlign = "center";
    headerRow.appendChild(th);
  });

  // Add "Play" cell to every data row
  document.querySelectorAll("tbody tr[data-cat]").forEach((row) => {
    const td = document.createElement("td");
    td.style.textAlign = "center";
    const rowText = row.textContent;
    const pgId = findPlaygroundId(rowText);
    if (pgId) {
      const link = document.createElement("a");
      link.href = `playground.html?cmd=${pgId}`;
      link.className = "play-link";
      link.textContent = "▶ Try";
      link.title = "Open interactive playground";
      td.appendChild(link);
    } else {
      td.innerHTML = '<span class="play-na">—</span>';
    }
    row.appendChild(td);
  });

  const rows = document.querySelectorAll("tbody tr[data-cat]");
  let activeFilter = "all";

  function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    rows.forEach((row) => {
      const cat = row.dataset.cat;
      const text = row.textContent.toLowerCase();
      const matchesFilter = activeFilter === "all" || cat === activeFilter;
      const matchesSearch = !query || text.includes(query);
      row.classList.toggle("hidden", !(matchesFilter && matchesSearch));
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener("input", applyFilters);
});
