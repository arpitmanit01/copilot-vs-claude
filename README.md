# Copilot CLI vs Claude Code — Command Reference

A static website comparing GitHub Copilot CLI and Claude Code commands, modes, and features side-by-side. Built for developers migrating between tools or using both.

## Features

- **70+ commands compared** across CLI invocation, slash commands, keyboard shortcuts
- **Interactive filtering** — filter by Common, Copilot-only, or Claude-only
- **Search** — find any command instantly
- **51 Playground pages** — copy-paste-ready setups with explanations for every command
- **Concepts & Modes** — deep comparison of permission modes, effort control, session lifecycle, CI/scripting

## Quick Start

Just open `index.html` in your browser — no build step or server needed.

```
git clone <this-repo>
cd test_copilot_2026_05_14
open index.html    # macOS
start index.html   # Windows
```

## Single-File Release

For sharing or GitHub Releases, build a self-contained HTML file:

```bash
npm run build
# Output: dist/copilot-vs-claude.html (single file, ~160 KB)
```

The output bundles all CSS, JS, data, and both pages into **one HTML file**. No server needed — open it directly in any browser.

### Creating a GitHub Release

```bash
# Tag is already set (e.g., v1.0.0)
gh release create v1.0.0 dist/copilot-vs-claude.html \
  --title "v1.0.0 — First Stable Release" \
  --notes "Full comparison site in a single file. Open in any browser."
```

## Project Structure

```
├── index.html             # Main comparison page
├── style.css              # Shared dark theme styles
├── script.js              # Filter, search, and Play column logic
├── playground.html        # Dynamic playground template
├── playground.css         # Playground-specific styles
├── playground-data.js     # Inline JS data for playground (51 entries)
├── playground-data.json   # Raw JSON data (same content)
├── build-release.js       # Build script — bundles into single HTML
├── package.json           # npm scripts and version
├── .gitignore
└── README.md
```

## Data Sources

- [GitHub Copilot CLI Docs](https://docs.github.com/copilot/concepts/agents/about-copilot-cli)
- [Claude Code CLI Reference](https://code.claude.com/docs/en/cli-reference)
- Data current as of May 2026

## License

MIT
