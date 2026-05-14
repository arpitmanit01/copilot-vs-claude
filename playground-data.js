window.PLAYGROUND_DATA = [
  {
    "id": "start-session",
    "title": "Start Interactive Session",
    "tool": "both",
    "copilot": "copilot",
    "claude": "claude",
    "category": "CLI Invocation",
    "description": "Launch an interactive AI coding session in your terminal. The agent loads your project context, reads instruction files, and is ready to answer questions or make code changes.",
    "what_to_expect": "A REPL-like prompt appears in your terminal. You can type natural language queries, and the agent responds with explanations, code suggestions, or file edits. The session persists until you exit.",
    "setup": "# No special setup needed — just navigate to any project folder\nmkdir my-demo-project && cd my-demo-project\ngit init\necho \"console.log('hello');\" > index.js",
    "commands_copilot": [
      {
        "cmd": "copilot",
        "desc": "Launches Copilot CLI in the current directory. On first run, it asks you to trust the folder."
      },
      {
        "cmd": "copilot --banner",
        "desc": "Launches with the animated splash banner shown."
      }
    ],
    "commands_claude": [
      {
        "cmd": "claude",
        "desc": "Launches Claude Code in the current directory."
      },
      {
        "cmd": "claude \"explain this project\"",
        "desc": "Starts a session with an initial prompt — Claude immediately begins analyzing."
      }
    ],
    "try_this": [
      "Type: `Explain the structure of this project`",
      "Type: `Add a README.md with usage instructions`",
      "Type: `What does index.js do?`"
    ],
    "tips": "Both tools auto-detect your git repo, read instruction files (like CLAUDE.md), and load any configured MCP servers on startup.",
    "setup_goal": "We are creating a tiny project folder with a single JS file so you can launch a session and immediately ask the agent about real code — not an empty directory."
  },
  {
    "id": "continue-session",
    "title": "Continue / Resume a Session",
    "tool": "both",
    "copilot": "copilot --continue",
    "claude": "claude -c",
    "category": "CLI Invocation",
    "description": "Pick up where you left off. Both tools persist session history so you can resume previous conversations without losing context.",
    "what_to_expect": "Your previous conversation reloads, including all file edits and context. You can continue asking questions or making changes as if you never left.",
    "setup": "# First, start a session and do some work:\nmkdir resume-demo && cd resume-demo && git init\necho \"function add(a,b){ return a+b; }\" > math.js\n\n# Start a session (Copilot or Claude), ask it to add tests, then exit\n# Now try resuming:",
    "commands_copilot": [
      {
        "cmd": "copilot --continue",
        "desc": "Resume the most recent session in this directory."
      },
      {
        "cmd": "copilot --resume <session-id>",
        "desc": "Resume a specific session by ID. Use /resume inside a session to browse."
      }
    ],
    "commands_claude": [
      {
        "cmd": "claude -c",
        "desc": "Continue the most recent conversation in the current directory."
      },
      {
        "cmd": "claude -r \"auth-refactor\" \"finish the PR\"",
        "desc": "Resume a named session and immediately send a follow-up prompt."
      }
    ],
    "try_this": [
      "Start a session → ask to create a file → exit → resume → ask about the file you just created",
      "Use `/resume` inside a session to see a list of all past sessions",
      "Name sessions with `/rename my-feature` so you can find them later"
    ],
    "tips": "Copilot uses `/resume` to browse sessions. Claude uses `/resume` too (alias: `/continue`). Both support resuming by session ID.",
    "setup_goal": "We create a small project and simulate a prior session. After exiting, you resume and verify the agent remembers the previous conversation context."
  },
  {
    "id": "model-selection",
    "title": "Select AI Model",
    "tool": "both",
    "copilot": "/model",
    "claude": "/model",
    "category": "Agent & Model",
    "description": "Switch the underlying AI model during or before a session. Different models have different strengths — faster responses, deeper reasoning, or lower cost.",
    "what_to_expect": "A picker appears showing available models. After selecting one, all subsequent responses use the new model. The switch is instant.",
    "setup": "# No special setup — just start a session\ncopilot\n# or\nclaude",
    "commands_copilot": [
      {
        "cmd": "/model",
        "desc": "Opens a model picker. Choose from Claude Sonnet, GPT-5, etc."
      },
      {
        "cmd": "copilot --model gpt-5",
        "desc": "Launch directly with a specific model."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/model",
        "desc": "Opens a model picker. Use arrow keys to also adjust effort level."
      },
      {
        "cmd": "claude --model claude-sonnet-4-6",
        "desc": "Launch with a specific model from the terminal."
      },
      {
        "cmd": "/effort high",
        "desc": "Adjust how much effort the model puts into responses (low → max)."
      }
    ],
    "try_this": [
      "Run `/model`, pick a fast model, ask a simple question",
      "Switch to a reasoning model, ask a complex architecture question — compare quality",
      "In Claude Code, try `/effort low` for quick answers and `/effort high` for thorough ones"
    ],
    "tips": "Copilot defaults to Claude Sonnet 4.5. Claude Code also defaults to Sonnet. Both support Opus for premium reasoning tasks.",
    "setup_goal": "No project setup needed — just start a session. You will switch between models mid-conversation to see how response style and depth differ."
  },
  {
    "id": "clear-session",
    "title": "Clear / New Session",
    "tool": "both",
    "copilot": "/clear",
    "claude": "/clear",
    "category": "Session Management",
    "description": "Wipe the current conversation and start fresh. The previous session is preserved and can be resumed later. Use this when context gets cluttered or you're switching tasks.",
    "what_to_expect": "The screen clears, context resets to zero tokens, and you get a fresh prompt. Your old session is still accessible via `/resume`.",
    "setup": "# Start a session and have a conversation first\ncopilot\n# or\nclaude\n# Chat for a while, then clear:",
    "commands_copilot": [
      {
        "cmd": "/clear",
        "desc": "Abandon current session and start fresh."
      },
      {
        "cmd": "/new",
        "desc": "Alias for /clear — starts a new conversation."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/clear",
        "desc": "Start a new conversation. Old one stays in /resume."
      },
      {
        "cmd": "/clear my-feature",
        "desc": "Clear and label the old session as 'my-feature' for easy resume."
      },
      {
        "cmd": "/new",
        "desc": "Alias for /clear."
      }
    ],
    "try_this": [
      "Have a long conversation → run `/clear` → run `/resume` to see the old session listed",
      "Use `/compact` instead if you want to stay in the same session but free up context space"
    ],
    "tips": "Don't confuse /clear with /compact. /clear creates a brand new session. /compact summarizes the current one to free up space while keeping context.",
    "setup_goal": "We start a session, have a conversation to build up context, then clear it. The goal is to see that the old session is preserved in /resume while you get a fresh start."
  },
  {
    "id": "compact",
    "title": "Compact / Summarize Context",
    "tool": "both",
    "copilot": "/compact",
    "claude": "/compact",
    "category": "Session Management",
    "description": "When your conversation grows long and approaches the context window limit, compact summarizes the history to free up space while preserving key information.",
    "what_to_expect": "The tool summarizes your conversation into a condensed form. You stay in the same session but with significantly reduced token usage. Some minor details may be lost.",
    "setup": "# Start a session and have a long conversation\nmkdir compact-demo && cd compact-demo && git init\necho 'const app = require(\"express\")();' > server.js\n\n# Start a session, ask several questions to build up context\n# Then compact:",
    "commands_copilot": [
      {
        "cmd": "/compact",
        "desc": "Summarize conversation history to reduce context usage."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/compact",
        "desc": "Free up context by summarizing conversation."
      },
      {
        "cmd": "/compact focus on the auth implementation",
        "desc": "Compact with focus instructions — keeps auth-related context prioritized."
      }
    ],
    "try_this": [
      "Run `/context` to see current token usage → run `/compact` → run `/context` again to see the reduction",
      "In Claude Code, try `/compact focus on the database schema` to prioritize specific context"
    ],
    "tips": "Both tools auto-compact when you approach ~95% of the context window. Manual compaction is useful when you know you're about to switch focus areas.",
    "setup_goal": "We create a small Express project and build up conversation history. Then we compact to free context space, verifying the summary retains key information while reducing token usage."
  },
  {
    "id": "context",
    "title": "View Context Usage",
    "tool": "both",
    "copilot": "/context",
    "claude": "/context",
    "category": "Session Management",
    "description": "See how much of your context window is being used. Helps you decide when to compact or start a new session.",
    "what_to_expect": "A visualization showing token usage — how much space your conversation, files, and system prompt consume. Claude Code shows a colored grid; Copilot shows a usage breakdown.",
    "setup": "# Start a session and ask a few questions first\ncopilot\n# or\nclaude",
    "commands_copilot": [
      {
        "cmd": "/context",
        "desc": "Show context window token usage and visualization."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/context",
        "desc": "Visualize context as a colored grid with optimization suggestions."
      },
      {
        "cmd": "/context all",
        "desc": "Expand the per-item breakdown for detailed analysis."
      }
    ],
    "try_this": [
      "Run `/context` at the start of a session vs after 10+ exchanges — see how it grows",
      "After seeing high usage, try `/compact` and then `/context` again"
    ],
    "tips": "If context is above 80%, consider compacting or starting fresh. Large files mentioned with @ consume significant tokens.",
    "setup_goal": "Start a session and ask a few questions. Then run /context to see a visual breakdown of how your context window is being consumed — conversation vs files vs system prompt."
  },
  {
    "id": "usage",
    "title": "View Usage / Cost Stats",
    "tool": "both",
    "copilot": "/usage",
    "claude": "/usage",
    "category": "Session Management",
    "description": "Check how many premium requests, API calls, or dollars you've spent in the current session and overall.",
    "what_to_expect": "A stats panel showing session duration, premium requests used, token counts per model, and (in Claude Code) dollar cost.",
    "setup": "# Just start a session and work for a bit\ncopilot\n# or\nclaude",
    "commands_copilot": [
      {
        "cmd": "/usage",
        "desc": "Display session usage metrics: premium requests, duration, tokens, lines edited."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/usage",
        "desc": "Show session cost, plan usage limits, and activity stats."
      },
      {
        "cmd": "/cost",
        "desc": "Alias for /usage."
      },
      {
        "cmd": "/stats",
        "desc": "Alias for /usage — opens on the Stats tab."
      }
    ],
    "try_this": [
      "Run `/usage` after completing a task to see how many requests it took",
      "Compare usage between a simple and complex task to understand cost patterns"
    ],
    "tips": "Each prompt in Copilot CLI reduces your monthly premium request quota by one. Claude Code tracks actual API dollar cost when using API keys.",
    "setup_goal": "Work for a bit in a session. Then check /usage to see exactly how many requests you have used, how long the session has been running, and (in Claude Code) how much it cost."
  },
  {
    "id": "diff",
    "title": "Review Code Changes",
    "tool": "both",
    "copilot": "/diff",
    "claude": "/diff",
    "category": "Code & Development",
    "description": "See what files the agent has modified during the session. Essential for reviewing changes before committing.",
    "what_to_expect": "A diff view showing all uncommitted changes. Claude Code shows an interactive viewer with per-turn navigation; Copilot shows the current directory diff.",
    "setup": "# Create a project with some files\nmkdir diff-demo && cd diff-demo && git init\ncat > app.js << 'EOF'\nfunction greet(name) {\n  console.log('Hello ' + name);\n}\ngreet('World');\nEOF\ngit add -A && git commit -m \"initial\"\n\n# Start a session and ask to refactor:\n# \"Refactor app.js to use template literals and add error handling\"",
    "commands_copilot": [
      {
        "cmd": "/diff",
        "desc": "Review all changes made in the current directory."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/diff",
        "desc": "Open interactive diff viewer. Use ←/→ for git diff vs per-turn diffs, ↑/↓ to browse files."
      }
    ],
    "try_this": [
      "Ask the agent to refactor a file → run `/diff` to see exactly what changed",
      "Use `/rewind` or `/undo` if you don't like the changes",
      "In Claude Code, navigate between turns to see changes step by step"
    ],
    "tips": "Always review diffs before committing. Both tools let you undo changes with /rewind or /undo if something looks wrong.",
    "setup_goal": "We create a JS file, commit it, then ask the agent to refactor it. After the edit, /diff shows exactly what changed — line by line — so you can review before committing."
  },
  {
    "id": "plan",
    "title": "Plan Mode",
    "tool": "both",
    "copilot": "/plan",
    "claude": "/plan",
    "category": "Code & Development",
    "description": "Collaborate on an implementation plan before any code is written. The agent proposes steps, you review and refine, then execute when ready.",
    "what_to_expect": "The agent switches to plan mode — it will analyze the task and produce a structured implementation plan without making any code changes. You review and approve before execution.",
    "setup": "# Create a starter project\nmkdir plan-demo && cd plan-demo && git init\nnpm init -y\nnpm install express\ncat > server.js << 'EOF'\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);\nEOF\ngit add -A && git commit -m \"initial\"",
    "commands_copilot": [
      {
        "cmd": "/plan",
        "desc": "Create an implementation plan before coding."
      },
      {
        "cmd": "Shift+Tab",
        "desc": "Cycle into/out of plan mode during a session."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/plan add user authentication with JWT",
        "desc": "Enter plan mode with a task description."
      },
      {
        "cmd": "Shift+Tab",
        "desc": "Cycle between normal → plan → auto modes."
      },
      {
        "cmd": "claude --permission-mode plan",
        "desc": "Start the session directly in plan mode."
      }
    ],
    "try_this": [
      "Type `/plan add a REST API for user CRUD operations` — review the proposed steps",
      "Press Shift+Tab to toggle plan mode on/off",
      "After approving the plan, switch back to normal mode and say 'execute the plan'"
    ],
    "tips": "Plan mode is great for complex tasks. It prevents the agent from making changes you haven't reviewed. Use it for architectural decisions.",
    "setup_goal": "We set up a basic Express server. You will enter plan mode and ask the agent to plan a new feature. The agent proposes steps without touching code — you review and approve before execution."
  },
  {
    "id": "review",
    "title": "Code Review",
    "tool": "both",
    "copilot": "/review",
    "claude": "/review",
    "category": "Code & Development",
    "description": "Run an AI-powered code review on your changes. The agent analyzes diffs for bugs, security issues, logic errors, and best practices.",
    "what_to_expect": "The agent reads your git diff and produces a structured review with findings categorized by severity. It focuses on genuine issues, not style nits.",
    "setup": "# Create a project with intentional issues\nmkdir review-demo && cd review-demo && git init\ncat > auth.js << 'EOF'\nconst users = {};\n\nfunction login(username, password) {\n  const query = `SELECT * FROM users WHERE name='${username}' AND pass='${password}'`;\n  // TODO: actually query the database\n  if (password === 'admin') return { token: 'hardcoded-token-123' };\n  return null;\n}\n\nfunction getUser(token) {\n  return users[token]; // no validation\n}\n\nmodule.exports = { login, getUser };\nEOF\ngit add -A && git commit -m \"initial\"\n\n# Make some changes, then review:",
    "commands_copilot": [
      {
        "cmd": "/review",
        "desc": "Run code review agent to analyze changes in the current branch."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/review",
        "desc": "Review a PR locally in the current session."
      },
      {
        "cmd": "/security-review",
        "desc": "Focused review specifically for security vulnerabilities."
      },
      {
        "cmd": "/ultrareview",
        "desc": "Deep multi-agent review in a cloud sandbox (uses premium credits)."
      }
    ],
    "try_this": [
      "Create auth.js above → ask the agent to review it → see it catch the SQL injection and hardcoded token",
      "In Claude Code, try `/security-review` on the same code for a security-focused analysis"
    ],
    "tips": "Copilot has a dedicated code-review sub-agent. Claude Code offers three tiers: /review (local), /security-review (focused), and /ultrareview (cloud-powered deep analysis).",
    "setup_goal": "We create a file with intentional security bugs (SQL injection, hardcoded secrets). You will run a code review and see how the agent catches real vulnerabilities."
  },
  {
    "id": "rewind-undo",
    "title": "Rewind / Undo Changes",
    "tool": "both",
    "copilot": "/rewind",
    "claude": "/rewind",
    "category": "Code & Development",
    "description": "Undo the agent's last action and revert file changes. Essential safety net when the agent makes a change you don't want.",
    "what_to_expect": "The last turn of conversation is removed and any file changes from that turn are reverted. Your code goes back to the state before the last agent action.",
    "setup": "# Create a file to experiment with\nmkdir undo-demo && cd undo-demo && git init\ncat > utils.js << 'EOF'\nfunction formatDate(d) {\n  return d.toISOString().split('T')[0];\n}\nmodule.exports = { formatDate };\nEOF\ngit add -A && git commit -m \"initial\"\n\n# Start a session, ask to refactor, then undo:",
    "commands_copilot": [
      {
        "cmd": "/rewind",
        "desc": "Rewind the last turn and revert file changes."
      },
      {
        "cmd": "/undo",
        "desc": "Alias for /rewind."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/rewind",
        "desc": "Rewind conversation and/or code to a previous point. Shows a picker for which turn to rewind to."
      },
      {
        "cmd": "/undo",
        "desc": "Alias for /rewind."
      }
    ],
    "try_this": [
      "Ask the agent to refactor utils.js → run `/undo` → check that the file is back to original",
      "In Claude Code, `/rewind` shows a turn picker so you can rewind multiple steps back"
    ],
    "tips": "This is your safety net. If the agent makes an unwanted change, /undo immediately. For bigger rollbacks in Claude Code, /rewind lets you pick how far back to go.",
    "setup_goal": "We create a utility file, ask the agent to refactor it, then undo the change. The goal is to verify the file reverts to its original state — your safety net for unwanted edits."
  },
  {
    "id": "init",
    "title": "Initialize Project Instructions",
    "tool": "both",
    "copilot": "/init",
    "claude": "/init",
    "category": "Code & Development",
    "description": "Create an instruction file that teaches the agent about your project's conventions, architecture, and preferences. This is read on every session start.",
    "what_to_expect": "The agent analyzes your codebase and generates a CLAUDE.md (or copilot-instructions.md) file with project-specific instructions. Future sessions automatically load these instructions.",
    "setup": "# Create a project with some structure\nmkdir init-demo && cd init-demo && git init\nmkdir -p src tests\ncat > src/index.ts << 'EOF'\nimport express from 'express';\nconst app = express();\napp.listen(3000);\nEOF\ncat > package.json << 'EOF'\n{\"name\":\"demo\",\"scripts\":{\"test\":\"jest\",\"build\":\"tsc\"}}\nEOF\ngit add -A && git commit -m \"initial\"",
    "commands_copilot": [
      {
        "cmd": "/init",
        "desc": "Initialize Copilot instructions for this repository. Creates .github/copilot-instructions.md."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/init",
        "desc": "Initialize project with a CLAUDE.md guide. Analyzes your codebase structure."
      }
    ],
    "try_this": [
      "Run `/init` in an existing project → review the generated instructions file",
      "Edit the instructions to add your team's conventions (e.g., 'Always use TypeScript strict mode')",
      "Start a new session and notice the agent already knows your project conventions"
    ],
    "tips": "Copilot reads: CLAUDE.md, GEMINI.md, AGENTS.md, .github/copilot-instructions.md. Claude reads: CLAUDE.md, .claude/settings.json. Both read .github/instructions/**/*.instructions.md.",
    "setup_goal": "We set up a small TypeScript project with a src/ and tests/ directory. Running /init generates a project instruction file that teaches the agent about your conventions."
  },
  {
    "id": "copy",
    "title": "Copy Response to Clipboard",
    "tool": "both",
    "copilot": "/copy",
    "claude": "/copy",
    "category": "Code & Development",
    "description": "Copy the agent's last response (or a specific code block from it) to your clipboard for use elsewhere.",
    "what_to_expect": "The last response text is copied to your clipboard. Claude Code shows an interactive picker when code blocks are present.",
    "setup": "# Start a session and ask for code\n# Example: \"Write a Python function to merge two sorted lists\"",
    "commands_copilot": [
      {
        "cmd": "/copy",
        "desc": "Copy the last response to the clipboard."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/copy",
        "desc": "Copy last response. Shows a picker for individual code blocks."
      },
      {
        "cmd": "/copy 2",
        "desc": "Copy the second-to-last response."
      }
    ],
    "try_this": [
      "Ask for a code snippet → run `/copy` → paste it into your editor",
      "In Claude Code, when multiple code blocks are in the response, pick just the one you need"
    ],
    "tips": "In Claude Code, press 'w' in the picker to write the selection to a file instead of the clipboard — useful over SSH.",
    "setup_goal": "Ask the agent to generate a code snippet. Then use /copy to grab it to your clipboard. In Claude Code, you can pick individual code blocks from the response."
  },
  {
    "id": "add-dir",
    "title": "Add Working Directory",
    "tool": "both",
    "copilot": "/add-dir",
    "claude": "/add-dir",
    "category": "Permissions & Directories",
    "description": "Grant the agent access to files in an additional directory outside the current working directory. Useful for monorepos or multi-project setups.",
    "what_to_expect": "The agent can now read and edit files in the added directory. The directory appears in the agent's file access list.",
    "setup": "# Create two separate project directories\nmkdir -p project-a project-b\necho \"export const API_URL = 'http://localhost:3000';\" > project-a/config.js\necho \"import { API_URL } from '../project-a/config';\" > project-b/client.js\ncd project-a",
    "commands_copilot": [
      {
        "cmd": "/add-dir ../project-b",
        "desc": "Add project-b to the allowed directory list."
      },
      {
        "cmd": "/list-dirs",
        "desc": "Show all currently allowed directories."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/add-dir ../project-b",
        "desc": "Add project-b as a working directory for this session."
      },
      {
        "cmd": "claude --add-dir ../project-b",
        "desc": "Add directory on launch from the terminal."
      }
    ],
    "try_this": [
      "Start in project-a → ask about project-b code → see it fail → `/add-dir ../project-b` → ask again",
      "In a monorepo, add shared packages directories for cross-package refactoring"
    ],
    "tips": "Added directories grant file access only — most .claude/ or .copilot/ configuration in those directories is not auto-discovered.",
    "setup_goal": "We create two separate project directories. Starting a session in one, we add the other via /add-dir so the agent can read and edit files across both."
  },
  {
    "id": "mcp",
    "title": "Manage MCP Servers",
    "tool": "both",
    "copilot": "/mcp",
    "claude": "/mcp",
    "category": "Agent & Model",
    "description": "Model Context Protocol (MCP) servers extend the agent's capabilities with external tools — databases, APIs, browser automation, and more. Both tools support adding custom MCP servers.",
    "what_to_expect": "A configuration interface where you can add, remove, or check the status of MCP server connections. The GitHub MCP server comes pre-configured in Copilot.",
    "setup": "# Example: Adding a filesystem MCP server\n# First, install an MCP server (example with npx):\nnpm install -g @modelcontextprotocol/server-filesystem\n\n# Then configure it in your session:",
    "commands_copilot": [
      {
        "cmd": "/mcp",
        "desc": "Open MCP server management. Copilot ships with GitHub MCP pre-configured."
      },
      {
        "cmd": "/mcp add",
        "desc": "Add a new MCP server. Fill in name, command, args, then Ctrl+S to save."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/mcp",
        "desc": "Manage MCP server connections and OAuth authentication."
      },
      {
        "cmd": "claude mcp add myserver -- npx @example/mcp-server",
        "desc": "Add an MCP server from the terminal."
      },
      {
        "cmd": "claude --mcp-config ./mcp.json",
        "desc": "Load MCP servers from a JSON config file on launch."
      }
    ],
    "try_this": [
      "Run `/mcp` to see what servers are already configured",
      "Add a GitHub MCP server (pre-configured in Copilot) and try: 'List my open PRs'",
      "Create a mcp-config.json and launch with it for reproducible setups"
    ],
    "tips": "MCP is the standard protocol for extending AI agents. Both tools support stdio-based and SSE-based MCP servers. Config is stored in ~/.copilot/mcp-config.json (Copilot) or project .mcp.json (Claude).",
    "setup_goal": "We walk through checking existing MCP servers and adding a new one. MCP extends the agent with external tools like databases, browsers, and APIs."
  },
  {
    "id": "agent",
    "title": "Browse / Select Agents",
    "tool": "both",
    "copilot": "/agent",
    "claude": "/agents",
    "category": "Agent & Model",
    "description": "View and select from available custom agents. Agents are specialized versions of the AI with specific expertise, tools, and instructions.",
    "what_to_expect": "A list of available agents — both built-in (explore, task, code-review, etc.) and any custom agents you've defined in .github/agents/ or ~/.copilot/agents/.",
    "setup": "# Create a custom agent\nmkdir -p .github/agents\ncat > .github/agents/refactor.md << 'EOF'\n---\ndescription: Specialized refactoring agent\ntools: [\"Read\", \"Edit\", \"Bash\"]\n---\nYou are a refactoring specialist. Focus on:\n- Reducing code duplication\n- Improving naming conventions\n- Simplifying complex logic\nEOF",
    "commands_copilot": [
      {
        "cmd": "/agent",
        "desc": "Browse and select from available agents."
      },
      {
        "cmd": "copilot --agent refactor",
        "desc": "Launch with a specific custom agent."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/agents",
        "desc": "Manage agent configurations."
      },
      {
        "cmd": "claude --agent refactor",
        "desc": "Launch with a specific agent."
      }
    ],
    "try_this": [
      "Create the refactor agent above → run `/agent` → select it → ask it to improve a file",
      "Try: 'Use the refactor agent to clean up auth.js' — the agent auto-infers which agent to use",
      "Define agents at user level in ~/.copilot/agents/ for agents available across all projects"
    ],
    "tips": "Both tools support user-level, repo-level, and org-level agent definitions. Agent files are Markdown with YAML frontmatter for configuration.",
    "setup_goal": "We create a custom agent Markdown file in .github/agents/. Then we browse available agents and select our custom one to handle a specific task."
  },
  {
    "id": "skills",
    "title": "Manage Skills",
    "tool": "both",
    "copilot": "/skills",
    "claude": "/skills",
    "category": "Agent & Model",
    "description": "Skills are reusable capabilities that enhance the agent — like templates, scripts, or domain knowledge that activate contextually.",
    "what_to_expect": "A list of available skills with their descriptions and token costs. You can enable/disable skills or see which ones are active.",
    "setup": "# Skills are typically bundled or installed via plugins\n# Start a session to see what's available:",
    "commands_copilot": [
      {
        "cmd": "/skills",
        "desc": "Manage skills for enhanced capabilities. View, enable, or disable skills."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/skills",
        "desc": "List available skills. Press 't' to sort by token count, Space to hide/show."
      }
    ],
    "try_this": [
      "Run `/skills` to see all available skills",
      "In Claude Code, some built-in skills: /batch, /simplify, /debug, /loop, /fewer-permission-prompts",
      "Try invoking a skill directly: `/batch migrate all files from CommonJS to ESM`"
    ],
    "tips": "Claude Code has several bundled skills (batch, simplify, debug, loop). Both tools support custom skills defined in .github/skills/ or via plugins.",
    "setup_goal": "Start a session and list all available skills. Skills are contextual capabilities (like /batch or /simplify) that activate when relevant."
  },
  {
    "id": "plugin",
    "title": "Manage Plugins",
    "tool": "both",
    "copilot": "/plugin",
    "claude": "/plugin",
    "category": "Agent & Model",
    "description": "Install and manage plugins that extend the agent with new commands, skills, themes, and MCP servers.",
    "what_to_expect": "A plugin management interface where you can install, remove, and list plugins. Plugins can add slash commands, skills, and tools.",
    "setup": "# Example: Installing a plugin in Claude Code:\nclaude plugin install code-review@claude-plugins-official",
    "commands_copilot": [
      {
        "cmd": "/plugin",
        "desc": "Manage plugins and plugin marketplaces."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/plugin",
        "desc": "Manage Claude Code plugins."
      },
      {
        "cmd": "claude plugin install <name>@<marketplace>",
        "desc": "Install a plugin from the terminal."
      },
      {
        "cmd": "/reload-plugins",
        "desc": "Reload all active plugins without restarting."
      }
    ],
    "try_this": [
      "Run `/plugin` to see installed plugins",
      "In Claude Code, install a community plugin and see new slash commands appear"
    ],
    "tips": "Plugins can bundle themes, slash commands, skills, MCP servers, and hooks. Both tools support plugin marketplaces.",
    "setup_goal": "Explore the plugin system. Plugins bundle themes, slash commands, skills, and MCP servers into installable packages."
  },
  {
    "id": "tasks",
    "title": "View Background Tasks",
    "tool": "both",
    "copilot": "/tasks",
    "claude": "/tasks",
    "category": "Agent & Model",
    "description": "View and manage running background tasks — sub-agents, shell commands, and other async operations the agent has spawned.",
    "what_to_expect": "A list of running and completed tasks with their status, output, and controls to stop or interact with them.",
    "setup": "# Start a session and ask the agent to do something that spawns sub-tasks\n# Example: \"Run the test suite and lint the code at the same time\"",
    "commands_copilot": [
      {
        "cmd": "/tasks",
        "desc": "View and manage tasks (subagents and shell commands)."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/tasks",
        "desc": "List and manage background tasks."
      },
      {
        "cmd": "/bashes",
        "desc": "Alias for /tasks — lists background shell processes."
      }
    ],
    "try_this": [
      "Ask the agent to run tests → check `/tasks` to see the running command",
      "In Claude Code, use `/background` to send the current session to the background, then `/tasks` to monitor"
    ],
    "tips": "Both tools automatically delegate to sub-agents for complex tasks. Use /tasks to monitor what's happening behind the scenes.",
    "setup_goal": "Ask the agent to do something that spawns sub-tasks (like running tests and linting in parallel). Then use /tasks to see what is running behind the scenes."
  },
  {
    "id": "theme",
    "title": "Change Theme",
    "tool": "both",
    "copilot": "/theme",
    "claude": "/theme",
    "category": "UI & Customization",
    "description": "Switch between light, dark, or custom color themes for the terminal UI.",
    "what_to_expect": "A theme picker with color previews. The change applies immediately and persists across sessions.",
    "setup": "# Just start a session:\ncopilot\n# or\nclaude",
    "commands_copilot": [
      {
        "cmd": "/theme",
        "desc": "View or set color mode."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/theme",
        "desc": "Change theme. Options: auto, light, dark, colorblind-accessible, ANSI, and custom themes."
      }
    ],
    "try_this": [
      "Run `/theme` and try different options",
      "In Claude Code, custom themes can be added to ~/.claude/themes/",
      "Select 'auto' to match your terminal's light/dark setting"
    ],
    "tips": "Claude Code includes daltonized (colorblind-accessible) themes and ANSI themes that use your terminal's palette. Copilot keeps it simpler with light/dark modes.",
    "setup_goal": "Switch between different color themes. Claude Code offers accessibility themes and custom themes; Copilot keeps it simpler with light/dark."
  },
  {
    "id": "help",
    "title": "Show Help",
    "tool": "both",
    "copilot": "/help",
    "claude": "/help",
    "category": "Help & Feedback",
    "description": "Display all available slash commands and keyboard shortcuts.",
    "what_to_expect": "A categorized list of every available command with brief descriptions.",
    "setup": "# Just start a session:\ncopilot\n# or\nclaude",
    "commands_copilot": [
      {
        "cmd": "/help",
        "desc": "Show help for interactive commands."
      },
      {
        "cmd": "copilot help",
        "desc": "Show help from the terminal (outside a session)."
      },
      {
        "cmd": "copilot help config",
        "desc": "Show configuration settings help."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/help",
        "desc": "Show help and available commands."
      },
      {
        "cmd": "claude --help",
        "desc": "Show CLI flags from the terminal."
      }
    ],
    "try_this": [
      "Run `/help` to see all available commands at a glance",
      "Type `?` at the prompt (Copilot) for quick help"
    ],
    "tips": "Both tools show help with /help. Copilot also responds to '?' at the prompt.",
    "setup_goal": "Run /help to see the full list of commands, keyboard shortcuts, and available features. This is your quick reference inside the session."
  },
  {
    "id": "feedback",
    "title": "Submit Feedback",
    "tool": "both",
    "copilot": "/feedback",
    "claude": "/feedback",
    "category": "Help & Feedback",
    "description": "Submit feedback, report bugs, or suggest features directly from the CLI.",
    "what_to_expect": "A feedback form or survey opens. You can describe issues, suggest improvements, or report bugs.",
    "setup": "# Just start a session and run the command",
    "commands_copilot": [
      {
        "cmd": "/feedback",
        "desc": "Submit a confidential feedback survey, bug report, or feature request."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/feedback",
        "desc": "Submit feedback about Claude Code."
      },
      {
        "cmd": "/bug",
        "desc": "Alias for /feedback — focused on bug reporting."
      }
    ],
    "try_this": [
      "Run `/feedback` after encountering an issue — your session context helps the team debug"
    ],
    "tips": "Feedback is sent directly to the development team. Include specific reproduction steps for bugs.",
    "setup_goal": "Submit feedback or a bug report directly from the CLI. Your session context helps the development team understand and reproduce issues."
  },
  {
    "id": "login-logout",
    "title": "Authentication",
    "tool": "both",
    "copilot": "/login",
    "claude": "/login",
    "category": "Help & Feedback",
    "description": "Log in or out of your account. Required for first-time use and for switching accounts.",
    "what_to_expect": "A browser window opens (or a device code is shown) for OAuth authentication. After login, your session is authenticated and you can start using the tool.",
    "setup": "# Run the tool for the first time\ncopilot\n# or\nclaude",
    "commands_copilot": [
      {
        "cmd": "/login",
        "desc": "Log in to GitHub. Opens browser for OAuth."
      },
      {
        "cmd": "/logout",
        "desc": "Log out of OAuth session."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/login",
        "desc": "Sign in to Anthropic account."
      },
      {
        "cmd": "/logout",
        "desc": "Sign out from Anthropic account."
      },
      {
        "cmd": "claude auth login --console",
        "desc": "Sign in via Anthropic Console (API key billing)."
      },
      {
        "cmd": "claude auth login --sso",
        "desc": "Force SSO authentication."
      },
      {
        "cmd": "claude auth status",
        "desc": "Check authentication status (JSON output)."
      }
    ],
    "try_this": [
      "Run `claude auth status --text` to see your login status in human-readable form",
      "In Copilot, set GH_TOKEN or GITHUB_TOKEN environment variable for PAT-based auth"
    ],
    "tips": "Copilot uses GitHub OAuth + PAT. Claude Code uses Anthropic OAuth + API keys. Both support environment variable-based auth for CI/scripting.",
    "setup_goal": "Walk through the authentication flow. Copilot uses GitHub OAuth; Claude Code uses Anthropic OAuth. Both support environment variable auth for CI."
  },
  {
    "id": "ide",
    "title": "IDE Integration",
    "tool": "both",
    "copilot": "/ide",
    "claude": "/ide",
    "category": "Help & Feedback",
    "description": "Connect the CLI to an IDE (VS Code, JetBrains, etc.) for a richer editing experience with inline diffs and file navigation.",
    "what_to_expect": "The agent connects to a running IDE instance. File edits may open in the IDE, and you get richer diff views.",
    "setup": "# Have VS Code or another supported IDE running\n# Open a project in the IDE, then start a CLI session in the same directory",
    "commands_copilot": [
      {
        "cmd": "/ide",
        "desc": "Connect to an IDE workspace."
      },
      {
        "cmd": "copilot --ide",
        "desc": "Auto-connect to IDE on startup if one is available."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/ide",
        "desc": "Manage IDE integrations and show status."
      },
      {
        "cmd": "claude --ide",
        "desc": "Auto-connect to IDE on startup."
      }
    ],
    "try_this": [
      "Open VS Code in a project folder → start a CLI session in the same folder → run `/ide`",
      "Ask the agent to edit a file — it should open the diff in your IDE"
    ],
    "tips": "IDE integration provides inline diffs, better file navigation, and sometimes live preview of changes.",
    "setup_goal": "Open a project in VS Code, then start a CLI session in the same directory. Connect via /ide to get inline diffs and richer file navigation."
  },
  {
    "id": "terminal-setup",
    "title": "Terminal Setup",
    "tool": "both",
    "copilot": "/terminal-setup",
    "claude": "/terminal-setup",
    "category": "Help & Feedback",
    "description": "Configure terminal keybindings for multiline input (Shift+Enter) and other shortcuts that may not work out of the box in some terminals.",
    "what_to_expect": "A configuration wizard that sets up your terminal (VS Code, Cursor, Alacritty, etc.) to properly handle multiline input and special key combinations.",
    "setup": "# Run this if Shift+Enter doesn't work for multiline input in your terminal",
    "commands_copilot": [
      {
        "cmd": "/terminal-setup",
        "desc": "Configure terminal for multiline input support (Shift+Enter)."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/terminal-setup",
        "desc": "Configure terminal keybindings for Shift+Enter and other shortcuts."
      }
    ],
    "try_this": [
      "If Shift+Enter doesn't insert a newline, run `/terminal-setup` to fix it",
      "This is especially useful in VS Code integrated terminal and Alacritty"
    ],
    "tips": "This command is only visible in terminals that need configuration. If Shift+Enter already works, you may not see it.",
    "setup_goal": "Configure your terminal so Shift+Enter inserts a newline (multiline input). This is especially needed in VS Code and Alacritty terminals."
  },
  {
    "id": "rename",
    "title": "Rename Session",
    "tool": "both",
    "copilot": "/rename",
    "claude": "/rename",
    "category": "Session Management",
    "description": "Give the current session a human-readable name for easy identification when resuming later.",
    "what_to_expect": "The session gets a name that appears in the session list when you use `/resume`. Without arguments, both tools auto-generate a name from the conversation.",
    "setup": "# Start a session and do some work, then name it",
    "commands_copilot": [
      {
        "cmd": "/rename auth-feature",
        "desc": "Name the current session 'auth-feature'."
      },
      {
        "cmd": "/rename",
        "desc": "Auto-generate a name from conversation history."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/rename auth-feature",
        "desc": "Name session and show it on the prompt bar."
      },
      {
        "cmd": "/rename",
        "desc": "Auto-generate a name from conversation history."
      }
    ],
    "try_this": [
      "Name your session → exit → use `/resume` to find it by name",
      "In Claude Code, the name also appears on the prompt bar for quick reference"
    ],
    "tips": "Named sessions are much easier to find later. Use descriptive names like 'auth-refactor' or 'fix-memory-leak'.",
    "setup_goal": "Give your session a meaningful name so you can find it later in /resume. Much easier than scrolling through auto-generated session IDs."
  },
  {
    "id": "shell-commands",
    "title": "Run Shell Commands (!)",
    "tool": "both",
    "copilot": "!command",
    "claude": "!command",
    "category": "CLI Invocation",
    "description": "Execute shell commands directly from the agent prompt without making an API call. Prefix any command with `!` to run it in your shell.",
    "what_to_expect": "The command runs in your system shell and output is displayed inline. No AI tokens are consumed.",
    "setup": "# Just start a session — no special setup needed",
    "commands_copilot": [
      {
        "cmd": "!git status",
        "desc": "Run git status without using a premium request."
      },
      {
        "cmd": "!npm test",
        "desc": "Run your test suite directly."
      },
      {
        "cmd": "!ls -la src/",
        "desc": "List files in a directory."
      }
    ],
    "commands_claude": [
      {
        "cmd": "!git log --oneline -5",
        "desc": "Show recent git commits."
      },
      {
        "cmd": "!cat package.json",
        "desc": "View a file without consuming tokens."
      },
      {
        "cmd": "!docker ps",
        "desc": "Check running containers."
      }
    ],
    "try_this": [
      "Run `!git diff` to see changes before asking the agent about them",
      "Run `!npm test` to check if tests pass after an agent edit",
      "Use `!` for quick checks that don't need AI reasoning"
    ],
    "tips": "The ! prefix runs commands directly in your shell — no AI involved. Great for quick checks between agent interactions. Saves premium requests.",
    "setup_goal": "Run shell commands directly from the agent prompt with ! prefix. No API calls, no token usage — just your regular shell."
  },
  {
    "id": "file-mention",
    "title": "Mention Files (@)",
    "tool": "both",
    "copilot": "@file",
    "claude": "@file",
    "category": "CLI Invocation",
    "description": "Include a file's contents in your prompt by prefixing its path with `@`. The file content becomes part of the context for that prompt.",
    "what_to_expect": "The file content is included in your message. As you type, both tools show autocomplete suggestions for matching file paths. The agent can see and reason about the file.",
    "setup": "# Create some files to reference\nmkdir mention-demo && cd mention-demo && git init\ncat > config.yml << 'EOF'\nserver:\n  port: 3000\n  host: localhost\ndatabase:\n  url: postgres://localhost/mydb\nEOF\ncat > app.js << 'EOF'\nconst config = require('./config');\nconsole.log(config);\nEOF",
    "commands_copilot": [
      {
        "cmd": "@config.yml explain this config",
        "desc": "Include config.yml contents in the prompt."
      },
      {
        "cmd": "@src/app.js fix the bug on line 42",
        "desc": "Reference a specific file for the agent to focus on."
      }
    ],
    "commands_claude": [
      {
        "cmd": "@config.yml explain this config",
        "desc": "Include config.yml contents in the prompt."
      },
      {
        "cmd": "@src/ what's in this directory?",
        "desc": "Reference a directory to list its contents."
      }
    ],
    "try_this": [
      "Type `@` and start typing a filename — use arrow keys to select from autocomplete",
      "Reference multiple files: `@config.yml @app.js are these consistent?`",
      "Use @ to focus the agent on specific files when the project is large"
    ],
    "tips": "@ mentions add file contents directly to your prompt context. Use them to focus the agent on specific files instead of letting it search the whole project.",
    "setup_goal": "Include specific files in your prompt with @ prefix. The agent sees the file contents as context, letting you ask targeted questions."
  },
  {
    "id": "delegate",
    "title": "Delegate to Cloud Agent",
    "tool": "copilot",
    "copilot": "/delegate",
    "claude": "—",
    "category": "Code & Development",
    "description": "Hand off your current session to GitHub's cloud-based Copilot coding agent. It continues working asynchronously and opens a Pull Request when done.",
    "what_to_expect": "Your session context is sent to GitHub. The cloud agent picks up where you left off, works on the task, and creates a PR. You can monitor progress on github.com.",
    "setup": "# Must be in a GitHub repo with push access\nmkdir delegate-demo && cd delegate-demo && git init\ngh repo create delegate-demo --private --source=. --push\necho \"TODO: implement\" > feature.js\ngit add -A && git commit -m \"initial\" && git push",
    "commands_copilot": [
      {
        "cmd": "/delegate",
        "desc": "Send this session to GitHub. Copilot creates a PR asynchronously."
      }
    ],
    "commands_claude": [],
    "try_this": [
      "Plan a feature with `/plan` → review the plan → `/delegate` to let the cloud agent implement it",
      "Monitor the PR on github.com — you'll see commits from Copilot"
    ],
    "tips": "Great for tasks that take a while — delegate and come back to a ready PR. The cloud agent has access to your repo and can run CI.",
    "setup_goal": "Plan a feature locally, then hand it off to the cloud Copilot coding agent. It continues working asynchronously and creates a PR when done."
  },
  {
    "id": "fleet",
    "title": "Fleet Mode (Parallel Agents)",
    "tool": "copilot",
    "copilot": "/fleet",
    "claude": "—",
    "category": "Agent & Model",
    "description": "Enable fleet mode to run multiple sub-agents in parallel for faster task completion. The main agent orchestrates while sub-agents work independently.",
    "what_to_expect": "Sub-agents spawn as parallel workers. Each handles a piece of the task independently. Results are aggregated by the main agent.",
    "setup": "# Start a session in a project with multiple independent tasks\ncopilot",
    "commands_copilot": [
      {
        "cmd": "/fleet",
        "desc": "Enable fleet mode for parallel subagent execution."
      }
    ],
    "commands_claude": [],
    "try_this": [
      "Enable `/fleet` → ask to 'add tests for all 5 modules' — agents work in parallel",
      "Use `/tasks` to monitor the parallel agents"
    ],
    "tips": "Fleet mode is most useful when a task can be decomposed into independent sub-tasks. Each sub-agent runs in its own context.",
    "setup_goal": "Enable parallel sub-agents that each handle a piece of a larger task independently. Great for tasks that decompose into independent work units."
  },
  {
    "id": "pr",
    "title": "PR Operations",
    "tool": "copilot",
    "copilot": "/pr",
    "claude": "—",
    "category": "Code & Development",
    "description": "Interact with pull requests for the current branch — view status, checks, comments, and merge.",
    "what_to_expect": "Information about the current branch's PR: CI status, review comments, merge readiness. You can ask follow-up questions or take actions.",
    "setup": "# Must have an open PR on the current branch\n# Create one: gh pr create --title 'My feature' --body 'Description'",
    "commands_copilot": [
      {
        "cmd": "/pr",
        "desc": "Operate on pull requests for the current branch."
      }
    ],
    "commands_claude": [],
    "try_this": [
      "Open a PR → run `/pr` → ask 'what review comments need addressing?'",
      "Use `/pr` + the GitHub MCP server to merge PRs from the CLI"
    ],
    "tips": "Copilot ships with the GitHub MCP server, making PR operations seamless. You can also use # to reference issues and PRs in prompts.",
    "setup_goal": "Interact with the current branch pull request — view CI status, review comments, and take actions like merging, all from the CLI."
  },
  {
    "id": "research",
    "title": "Deep Research",
    "tool": "copilot",
    "copilot": "/research",
    "claude": "—",
    "category": "Quick Questions & Research",
    "description": "Run a deep research investigation using GitHub search and web sources. Produces a detailed report with citations.",
    "what_to_expect": "The research agent searches GitHub repos, documentation, and the web. It produces a comprehensive report with inline citations and source links.",
    "setup": "# Just start a session — no special setup\ncopilot",
    "commands_copilot": [
      {
        "cmd": "/research",
        "desc": "Run deep research investigation. Produces a report with citations."
      }
    ],
    "commands_claude": [],
    "try_this": [
      "Try: `/research what are the best practices for rate limiting in Node.js?`",
      "Try: `/research how does GitHub Actions caching work internally?`"
    ],
    "tips": "Research reports include citations so you can verify claims. Great for architectural decisions where you need evidence-based recommendations.",
    "setup_goal": "Run a deep research investigation that searches GitHub, documentation, and the web. Produces a comprehensive report with inline citations."
  },
  {
    "id": "every-schedule",
    "title": "Schedule Recurring Prompts",
    "tool": "copilot",
    "copilot": "/every",
    "claude": "—",
    "category": "Help & Meta",
    "description": "Schedule a prompt to run repeatedly at an interval during the session. Useful for monitoring, periodic checks, or continuous integration.",
    "what_to_expect": "The prompt runs on the specified schedule. Output appears in your session timeline. Stops when you end the session.",
    "setup": "# Start a session in a project with tests\ncopilot",
    "commands_copilot": [
      {
        "cmd": "/every 5m run tests",
        "desc": "Run tests every 5 minutes."
      },
      {
        "cmd": "/every 2m check build status",
        "desc": "Check build status every 2 minutes."
      }
    ],
    "commands_claude": [],
    "try_this": [
      "Start `/every 5m run the test suite` → make code changes → watch tests auto-run",
      "Use for CI-like feedback loops during development"
    ],
    "tips": "Copilot's /every is session-scoped. Claude Code has /loop and /schedule for similar functionality but with cloud-based scheduling.",
    "setup_goal": "Schedule a prompt to run every N minutes during your session — like a CI loop. Watch tests auto-run while you make changes."
  },
  {
    "id": "autopilot",
    "title": "Autopilot Mode",
    "tool": "copilot",
    "copilot": "/autopilot",
    "claude": "—",
    "category": "Help & Meta",
    "description": "Toggle autopilot mode — the agent keeps working until a task is complete without waiting for approval at each step.",
    "what_to_expect": "The agent becomes more autonomous. It makes decisions, runs commands, and edits files without pausing for approval. Great for well-defined tasks.",
    "setup": "# Enable experimental mode first (autopilot is experimental)\ncopilot --experimental",
    "commands_copilot": [
      {
        "cmd": "/autopilot",
        "desc": "Toggle autopilot mode on/off."
      },
      {
        "cmd": "Shift+Tab",
        "desc": "Cycle through modes: normal → plan → autopilot."
      }
    ],
    "commands_claude": [],
    "try_this": [
      "Enable autopilot → ask 'add comprehensive tests for the auth module' → watch it work",
      "Use Shift+Tab to quickly toggle between plan and autopilot modes"
    ],
    "tips": "Use autopilot for well-defined tasks where you trust the agent to make decisions. For exploratory work, stick with normal mode.",
    "setup_goal": "Toggle autopilot so the agent keeps working without pausing for approval at each step. Best for well-defined tasks you trust the agent to handle."
  },
  {
    "id": "share",
    "title": "Share Session",
    "tool": "copilot",
    "copilot": "/share",
    "claude": "—",
    "category": "Session Management",
    "description": "Export your session as a shareable format — markdown file, HTML file, or GitHub gist. Great for team knowledge sharing.",
    "what_to_expect": "A file is created or a gist is published containing your conversation history, code changes, and agent reasoning.",
    "setup": "# Have a meaningful conversation first, then share it",
    "commands_copilot": [
      {
        "cmd": "/share",
        "desc": "Share session to markdown file, HTML file, or GitHub gist."
      }
    ],
    "commands_claude": [],
    "try_this": [
      "Complete a debugging session → `/share` → choose 'GitHub Gist' → send the link to your team",
      "Use markdown export for documentation purposes"
    ],
    "tips": "Sharing sessions is great for code review, pair programming async, or documenting how a problem was solved.",
    "setup_goal": "Export your conversation as markdown, HTML, or a GitHub gist. Great for sharing debugging sessions or documenting how a problem was solved."
  },
  {
    "id": "lsp",
    "title": "LSP Server Management",
    "tool": "copilot",
    "copilot": "/lsp",
    "claude": "—",
    "category": "Agent & Model",
    "description": "Configure Language Server Protocol servers for enhanced code intelligence — go-to-definition, hover info, diagnostics, and more.",
    "what_to_expect": "A status view of configured LSP servers. You can see which servers are running, their file associations, and connection status.",
    "setup": "# Install a language server first\nnpm install -g typescript-language-server\n\n# Configure in ~/.copilot/lsp-config.json:\n# {\n#   \"lspServers\": {\n#     \"typescript\": {\n#       \"command\": \"typescript-language-server\",\n#       \"args\": [\"--stdio\"],\n#       \"fileExtensions\": { \".ts\": \"typescript\", \".tsx\": \"typescript\" }\n#     }\n#   }\n# }",
    "commands_copilot": [
      {
        "cmd": "/lsp",
        "desc": "View configured LSP servers and their status."
      }
    ],
    "commands_claude": [],
    "try_this": [
      "Configure TypeScript LSP → start a session → see the agent use go-to-definition for smarter code navigation",
      "LSP gives the agent real compiler diagnostics instead of guessing"
    ],
    "tips": "LSP servers are configured in ~/.copilot/lsp-config.json (user-level) or .github/lsp.json (repo-level). The agent uses LSP for code intelligence tools like go-to-definition and diagnostics.",
    "setup_goal": "Configure Language Server Protocol servers for real compiler diagnostics and go-to-definition. The agent gets smarter code intelligence instead of guessing."
  },
  {
    "id": "batch",
    "title": "Batch Parallel Refactoring",
    "tool": "claude",
    "copilot": "—",
    "claude": "/batch",
    "category": "Code & Development",
    "description": "Orchestrate large-scale changes across a codebase in parallel. The agent decomposes work into independent units and spawns one sub-agent per unit in separate git worktrees.",
    "what_to_expect": "The agent researches your codebase, creates a plan with 5-30 work units, and spawns parallel sub-agents. Each sub-agent implements its unit, runs tests, and opens a PR.",
    "setup": "# Need a git repo with multiple files to refactor\nmkdir batch-demo && cd batch-demo && git init\nfor i in 1 2 3 4 5; do\n  cat > \"module$i.js\" << EOF\nconst http = require('http');\nvar data = [];\nfunction process$i(callback) {\n  http.get('http://api.example.com', function(res) {\n    callback(null, res);\n  });\n}\nmodule.exports = { process$i };\nEOF\ndone\ngit add -A && git commit -m \"initial\"",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/batch migrate all modules from CommonJS to ESM",
        "desc": "Decompose and parallelize the migration across all modules."
      },
      {
        "cmd": "/batch convert all callbacks to async/await",
        "desc": "Each module gets its own sub-agent and PR."
      },
      {
        "cmd": "/batch add TypeScript types to all .js files",
        "desc": "Large-scale type annotation across the codebase."
      }
    ],
    "try_this": [
      "Create 5 modules above → run `/batch convert all require() to import`",
      "Watch as it creates a plan, spawns agents, and opens PRs for each module",
      "Each agent works in its own git worktree — no conflicts"
    ],
    "tips": "Batch requires a git repository. Each unit gets its own worktree and PR. Great for large migrations, adding types, or standardizing patterns across many files.",
    "setup_goal": "We create 5 similar modules. The /batch command decomposes a migration into independent units, spawns parallel sub-agents in separate git worktrees, and opens a PR per unit."
  },
  {
    "id": "goal",
    "title": "Set Autonomous Goal",
    "tool": "claude",
    "copilot": "—",
    "claude": "/goal",
    "category": "Code & Development",
    "description": "Set a goal condition and Claude keeps working autonomously across multiple turns until the condition is met. Like autopilot but with a specific success criteria.",
    "what_to_expect": "Claude works continuously, making changes, running tests, and iterating until the goal condition is satisfied. It reports progress and stops when done.",
    "setup": "# Create a project with failing tests\nmkdir goal-demo && cd goal-demo && git init\nnpm init -y && npm install jest\ncat > sum.js << 'EOF'\nfunction sum(a, b) {\n  return a - b; // BUG: should be a + b\n}\nmodule.exports = sum;\nEOF\ncat > sum.test.js << 'EOF'\nconst sum = require('./sum');\ntest('adds 1 + 2 to equal 3', () => { expect(sum(1, 2)).toBe(3); });\ntest('adds -1 + 1 to equal 0', () => { expect(sum(-1, 1)).toBe(0); });\nEOF\ngit add -A && git commit -m \"initial\"",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/goal all tests pass",
        "desc": "Claude keeps working until 'npm test' passes."
      },
      {
        "cmd": "/goal the build compiles with zero errors",
        "desc": "Claude fixes errors until clean build."
      },
      {
        "cmd": "/goal clear",
        "desc": "Remove the active goal."
      }
    ],
    "try_this": [
      "Create the buggy project above → `/goal all tests pass` → watch Claude find and fix the bug",
      "Set a goal like 'code coverage is above 80%' for more complex objectives"
    ],
    "tips": "Goals are great for well-defined success criteria. Claude will iterate, test, and fix until the condition is met. Use /goal clear to stop early.",
    "setup_goal": "We create a project with a deliberately buggy function and failing tests. Setting /goal all tests pass makes Claude work autonomously until the tests go green."
  },
  {
    "id": "background",
    "title": "Background Agent",
    "tool": "claude",
    "copilot": "—",
    "claude": "/background",
    "category": "Session Management",
    "description": "Detach the current session to run as a background agent, freeing your terminal. The agent keeps working and you can check back later.",
    "what_to_expect": "The session moves to the background. Your terminal is freed for other work. Use `claude agents` to monitor and `claude attach <id>` to reconnect.",
    "setup": "# Start a session and begin a long-running task\nclaude",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/background",
        "desc": "Detach current session to background."
      },
      {
        "cmd": "/bg fix all the TODO comments in the codebase",
        "desc": "Send a final instruction before detaching."
      },
      {
        "cmd": "claude --bg \"investigate the flaky test\"",
        "desc": "Launch directly as a background agent."
      },
      {
        "cmd": "claude agents",
        "desc": "Monitor all background sessions."
      },
      {
        "cmd": "claude attach <id>",
        "desc": "Reconnect to a background session."
      }
    ],
    "try_this": [
      "Start a long task → `/bg` → do other work → `claude agents` → `claude attach <id>` to check results",
      "Launch multiple background agents: `claude --bg 'add tests'` and `claude --bg 'update docs'`"
    ],
    "tips": "Background agents are great for long-running tasks. You can run multiple in parallel and check back when they're done.",
    "setup_goal": "Start a long task, then detach it to the background. Your terminal is freed while the agent keeps working. Check back later with claude agents."
  },
  {
    "id": "ultrareview",
    "title": "Ultra Review (Cloud)",
    "tool": "claude",
    "copilot": "—",
    "claude": "/ultrareview",
    "category": "Code & Development",
    "description": "Run a deep, multi-agent code review in a cloud sandbox. Multiple specialized review agents analyze your code in parallel for a thorough review.",
    "what_to_expect": "Your code is sent to a cloud sandbox where multiple review agents run in parallel. Results are aggregated into a comprehensive review covering security, performance, correctness, and design.",
    "setup": "# Have a PR or uncommitted changes ready\n# Example: create changes on a branch\ngit checkout -b feature-auth\n# ... make code changes ...\ngit add -A && git commit -m \"add auth\"",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/ultrareview",
        "desc": "Review the current branch's changes in a cloud sandbox."
      },
      {
        "cmd": "/ultrareview 1234",
        "desc": "Review a specific PR by number."
      },
      {
        "cmd": "claude ultrareview 1234 --json",
        "desc": "Run non-interactively with JSON output."
      }
    ],
    "try_this": [
      "Make some code changes → `/ultrareview` → get a thorough multi-agent review",
      "Compare results with `/review` (local, faster) vs `/ultrareview` (cloud, deeper)"
    ],
    "tips": "Ultrareview uses premium credits. Pro and Max plans get 3 free runs. It's the most thorough review option — use for critical changes.",
    "setup_goal": "Submit your changes for a deep, multi-agent review running in a cloud sandbox. Multiple specialized agents analyze your code in parallel."
  },
  {
    "id": "effort",
    "title": "Adjust Effort Level",
    "tool": "claude",
    "copilot": "—",
    "claude": "/effort",
    "category": "Agent & Model",
    "description": "Control how much effort the model puts into each response. Lower effort = faster, cheaper responses. Higher effort = more thorough reasoning.",
    "what_to_expect": "An interactive slider appears. Move left/right to set effort level. The change takes effect immediately on the next response.",
    "setup": "# Just start a Claude Code session\nclaude",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/effort low",
        "desc": "Fast, concise responses. Good for simple questions."
      },
      {
        "cmd": "/effort high",
        "desc": "Thorough reasoning. Good for complex tasks."
      },
      {
        "cmd": "/effort max",
        "desc": "Maximum effort. Session-only, doesn't persist."
      },
      {
        "cmd": "/effort auto",
        "desc": "Reset to model default."
      },
      {
        "cmd": "claude --effort high",
        "desc": "Set effort level on launch."
      }
    ],
    "try_this": [
      "Set `/effort low` → ask a simple question → set `/effort high` → ask the same question → compare depth",
      "Use `/effort max` for critical architectural decisions"
    ],
    "tips": "Effort level affects token usage and response quality. Use 'low' for quick lookups and 'high'/'max' for complex reasoning tasks.",
    "setup_goal": "Switch effort level mid-session to compare. /effort low gives fast concise answers; /effort high gives thorough reasoning. See the quality difference on the same question."
  },
  {
    "id": "voice",
    "title": "Voice Dictation",
    "tool": "claude",
    "copilot": "—",
    "claude": "/voice",
    "category": "UI & Customization",
    "description": "Toggle voice input — speak your prompts instead of typing. Supports hold-to-talk and tap-to-toggle modes.",
    "what_to_expect": "Your microphone activates and you can speak prompts. Speech is transcribed and sent as a text prompt to Claude.",
    "setup": "# Requires a Claude.ai account and a working microphone\nclaude",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/voice",
        "desc": "Toggle voice dictation on/off."
      },
      {
        "cmd": "/voice hold",
        "desc": "Hold-to-talk mode — speak while holding a key."
      },
      {
        "cmd": "/voice tap",
        "desc": "Tap-to-toggle mode — tap to start/stop recording."
      },
      {
        "cmd": "/voice off",
        "desc": "Disable voice dictation."
      }
    ],
    "try_this": [
      "Run `/voice tap` → tap to start → say 'explain the authentication flow' → tap to stop",
      "Great for hands-free coding while reading documentation on another screen"
    ],
    "tips": "Voice input is great for describing complex requirements or dictating long explanations. Requires a Claude.ai subscription.",
    "setup_goal": "Enable voice dictation so you can speak your prompts. Supports hold-to-talk and tap-to-toggle modes for hands-free coding."
  },
  {
    "id": "security-review",
    "title": "Security Review",
    "tool": "claude",
    "copilot": "—",
    "claude": "/security-review",
    "category": "Code & Development",
    "description": "Analyze pending changes on the current branch specifically for security vulnerabilities — injection, auth issues, data exposure, and more.",
    "what_to_expect": "The agent reviews your git diff with a security-focused lens. It identifies risks like SQL injection, XSS, hardcoded secrets, auth bypasses, and data exposure.",
    "setup": "# Create code with security issues\nmkdir security-demo && cd security-demo && git init\ncat > api.js << 'EOF'\nconst express = require('express');\nconst app = express();\n\napp.get('/user', (req, res) => {\n  const query = `SELECT * FROM users WHERE id = ${req.query.id}`;\n  const apiKey = 'sk-secret-key-12345';\n  res.json({ query, key: apiKey });\n});\n\napp.listen(3000);\nEOF\ngit add -A && git commit -m \"initial\"",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/security-review",
        "desc": "Analyze pending changes for security vulnerabilities."
      }
    ],
    "try_this": [
      "Create the vulnerable api.js above → `/security-review` → see it catch SQL injection and hardcoded secrets",
      "Run before merging any PR that touches auth, database, or API code"
    ],
    "tips": "Security review focuses specifically on vulnerabilities. Use /review for general code quality and /security-review for security-critical changes.",
    "setup_goal": "We create a file with SQL injection and hardcoded secrets. /security-review does a focused security audit that catches vulnerabilities a general review might miss."
  },
  {
    "id": "autofix-pr",
    "title": "Auto-fix PR",
    "tool": "claude",
    "copilot": "—",
    "claude": "/autofix-pr",
    "category": "Code & Development",
    "description": "Spawn a cloud session that watches your PR and automatically pushes fixes when CI fails or reviewers leave comments.",
    "what_to_expect": "A background session monitors your PR. When CI fails, it analyzes the failure, writes a fix, and pushes. When reviewers comment, it addresses the feedback automatically.",
    "setup": "# Must have an open PR and the gh CLI installed\ngit checkout -b my-feature\n# ... make changes ...\ngit push -u origin my-feature\ngh pr create --title 'My feature' --body 'Description'",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/autofix-pr",
        "desc": "Watch current branch's PR and auto-fix CI failures and review comments."
      },
      {
        "cmd": "/autofix-pr only fix lint and type errors",
        "desc": "Customize what the agent should fix."
      }
    ],
    "try_this": [
      "Open a PR with a failing lint check → `/autofix-pr` → watch it push a fix commit",
      "Leave a review comment on your own PR and see the agent address it"
    ],
    "tips": "Requires the gh CLI and access to Claude Code on the web. The session runs in the cloud and pushes directly to your branch.",
    "setup_goal": "Open a PR, then set up /autofix-pr to watch it. When CI fails or reviewers comment, the agent auto-pushes fixes without you lifting a finger."
  },
  {
    "id": "loop",
    "title": "Loop / Scheduled Prompts",
    "tool": "claude",
    "copilot": "—",
    "claude": "/loop",
    "category": "Help & Meta",
    "description": "Run a prompt repeatedly on an interval. Useful for continuous monitoring, automated maintenance, or periodic checks during development.",
    "what_to_expect": "The prompt executes at the specified interval. Results appear in your session. Runs until you stop it or end the session.",
    "setup": "# Start a Claude Code session in a project\nclaude",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/loop 5m check if the deploy finished",
        "desc": "Check deployment status every 5 minutes."
      },
      {
        "cmd": "/loop 10m run tests and report failures",
        "desc": "Continuous testing during development."
      },
      {
        "cmd": "/loop",
        "desc": "Run autonomous maintenance check (or prompt from .claude/loop.md)."
      }
    ],
    "try_this": [
      "Set up `/loop 5m run npm test` while making code changes",
      "Create a .claude/loop.md with a maintenance prompt for project-specific checks"
    ],
    "tips": "Similar to Copilot's /every but with more options. Omit the interval and Claude self-paces. Define a .claude/loop.md for project-specific automated checks.",
    "setup_goal": "Set up a repeating prompt that runs every N minutes — for example, running tests continuously while you develop. Like Copilot /every but with more options."
  },
  {
    "id": "export",
    "title": "Export Conversation",
    "tool": "claude",
    "copilot": "—",
    "claude": "/export",
    "category": "Session Management",
    "description": "Export the current conversation as plain text. Save to a file or copy to clipboard for documentation or sharing.",
    "what_to_expect": "A dialog to choose: copy to clipboard or save to a file. The export includes the full conversation history as plain text.",
    "setup": "# Have a meaningful conversation first, then export",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/export",
        "desc": "Export conversation. Choose clipboard or file."
      },
      {
        "cmd": "/export conversation.txt",
        "desc": "Write directly to a file."
      }
    ],
    "try_this": [
      "Complete a debugging session → `/export debug-session.txt` → share with your team",
      "Use exports for documentation or post-mortems"
    ],
    "tips": "Copilot's equivalent is /share which supports markdown, HTML, and GitHub gists. Claude's /export is plain text focused.",
    "setup_goal": "Export your conversation as plain text — to clipboard or a file. Useful for documentation, post-mortems, or sharing with teammates who do not use the tool."
  },
  {
    "id": "print-mode",
    "title": "Print Mode (Scripting)",
    "tool": "claude",
    "copilot": "—",
    "claude": "claude -p",
    "category": "CLI Invocation",
    "description": "Run Claude Code non-interactively — send a prompt, get a response, and exit. Essential for scripting, CI pipelines, and automation.",
    "what_to_expect": "Claude processes the prompt and prints the response to stdout. No interactive session is started. Perfect for piping and scripting.",
    "setup": "# No special setup — use from any terminal\n# Can also pipe input:",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "claude -p \"explain this function\"",
        "desc": "One-shot query, output to stdout, then exit."
      },
      {
        "cmd": "cat error.log | claude -p \"what went wrong?\"",
        "desc": "Pipe file contents as input."
      },
      {
        "cmd": "claude -p --output-format json \"list all functions\"",
        "desc": "Get structured JSON output for parsing."
      },
      {
        "cmd": "claude -p --max-turns 3 \"fix the bug\"",
        "desc": "Limit how many turns the agent can take."
      },
      {
        "cmd": "claude -p --max-budget-usd 2 \"refactor auth\"",
        "desc": "Cap spending on this invocation."
      }
    ],
    "try_this": [
      "Run: `claude -p \"generate a .gitignore for a Node.js project\" > .gitignore`",
      "Pipe: `git diff | claude -p \"summarize these changes for a commit message\"`",
      "Script: `for f in src/*.js; do claude -p \"add JSDoc to $f\"; done`"
    ],
    "tips": "Print mode is what makes Claude Code scriptable. Combine with --output-format json for CI pipelines. Use --max-budget-usd to control costs in automation.",
    "setup_goal": "Run Claude Code non-interactively for scripting. Pipe file contents in, get AI analysis out. Chain with other commands for powerful automation."
  },
  {
    "id": "permissions",
    "title": "Manage Permissions",
    "tool": "claude",
    "copilot": "—",
    "claude": "/permissions",
    "category": "Permissions & Directories",
    "description": "Interactively manage allow, ask, and deny rules for tool permissions. Fine-grained control over what the agent can do without asking.",
    "what_to_expect": "An interactive dialog showing all permission rules by scope. You can add or remove rules, manage directories, and review auto-mode denials.",
    "setup": "# Start a Claude Code session\nclaude",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/permissions",
        "desc": "Open interactive permission manager."
      },
      {
        "cmd": "/allowed-tools",
        "desc": "Alias for /permissions."
      },
      {
        "cmd": "/fewer-permission-prompts",
        "desc": "Auto-scan transcripts and add safe tools to allowlist."
      }
    ],
    "try_this": [
      "Run `/permissions` to see current rules → add `Bash(git *)` to always-allow",
      "Run `/fewer-permission-prompts` to let Claude analyze your usage and suggest safe allowlists"
    ],
    "tips": "Copilot uses /allow-all, /reset-allowed-tools for coarser control. Claude Code's /permissions gives fine-grained rule management.",
    "setup_goal": "Fine-tune what the agent can do without asking. Add safe commands to the allowlist, set deny rules for dangerous ones, and review auto-mode denials."
  },
  {
    "id": "debug-doctor",
    "title": "Debug & Diagnose",
    "tool": "claude",
    "copilot": "—",
    "claude": "/debug",
    "category": "Quick Questions & Research",
    "description": "Enable debug logging and diagnose issues. /doctor runs a health check on your Claude Code installation.",
    "what_to_expect": "/debug enables detailed logging for the session. /doctor runs diagnostics and shows results with status icons. Press 'f' in /doctor to auto-fix issues.",
    "setup": "# Start a Claude Code session\nclaude",
    "commands_copilot": [],
    "commands_claude": [
      {
        "cmd": "/debug",
        "desc": "Enable debug logging for this session."
      },
      {
        "cmd": "/debug connection issues with MCP",
        "desc": "Enable logging and describe the issue for focused analysis."
      },
      {
        "cmd": "/doctor",
        "desc": "Run diagnostics on your installation. Press 'f' to auto-fix."
      },
      {
        "cmd": "claude --debug",
        "desc": "Launch with debug mode enabled from the start."
      }
    ],
    "try_this": [
      "Run `/doctor` to check your installation health",
      "If something's broken, press 'f' in the doctor output to auto-fix",
      "Run `/debug` when MCP servers aren't connecting, then check the log for errors"
    ],
    "tips": "Claude's /debug and /doctor have no direct Copilot equivalent. In Copilot, use `copilot help` and check environment variables for troubleshooting.",
    "setup_goal": "Run diagnostics to check your installation health. /doctor shows status with icons and lets you auto-fix issues. /debug enables detailed logging for troubleshooting."
  },
  {
    "id": "statusline",
    "title": "Configure Status Line",
    "tool": "both",
    "copilot": "/statusline",
    "claude": "/statusline",
    "category": "UI & Customization",
    "description": "Customize the status bar at the bottom of the terminal UI. Show git branch, model name, token usage, or other information.",
    "what_to_expect": "A configuration interface for the status line. You can choose what information to display at the bottom of your terminal.",
    "setup": "# Just start a session",
    "commands_copilot": [
      {
        "cmd": "/statusline",
        "desc": "Configure status line items."
      },
      {
        "cmd": "/footer",
        "desc": "Alias for /statusline."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/statusline",
        "desc": "Configure status line. Describe what you want, or auto-configure from shell prompt."
      }
    ],
    "try_this": [
      "Run `/statusline` to customize what appears in the status bar",
      "In Claude Code, describe what you want: 'show git branch and model name'"
    ],
    "tips": "A well-configured status line keeps important info visible at all times — current model, branch, token usage.",
    "setup_goal": "Customize the status bar at the bottom of your terminal. Show git branch, model name, token usage — whatever information you want always visible."
  },
  {
    "id": "ask-btw",
    "title": "Side Questions",
    "tool": "both",
    "copilot": "/ask",
    "claude": "/btw",
    "category": "Quick Questions & Research",
    "description": "Ask a quick question without polluting the main conversation context. The answer doesn't get added to the chat history, keeping your context clean.",
    "what_to_expect": "The agent answers your question, but the exchange is not added to the conversation history. Your main context stays focused on the current task.",
    "setup": "# Start a session and be in the middle of a task",
    "commands_copilot": [
      {
        "cmd": "/ask what is the syntax for a TypeScript generic?",
        "desc": "Quick question without adding to history."
      }
    ],
    "commands_claude": [
      {
        "cmd": "/btw how does Promise.all handle rejections?",
        "desc": "Side question without adding to context."
      }
    ],
    "try_this": [
      "While working on a feature, use /ask or /btw to look up syntax without cluttering your context",
      "Great for 'how do I...' questions in the middle of a complex task"
    ],
    "tips": "Different command names (/ask vs /btw) but identical purpose. Use these to keep your main context focused on the current task.",
    "setup_goal": "Ask a quick question mid-task without polluting your main conversation. The answer does not get added to history, keeping your context focused on the current work."
  }
];