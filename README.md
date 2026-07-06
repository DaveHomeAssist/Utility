# Utility

A personal grab-bag repo for standalone scripts, prototypes, and single-file tools that don't warrant their own project. No shared build pipeline or deployment target — each file is self-contained (open the `.html` files directly in a browser).

## What's here

| Path | What it is |
|---|---|
| `chat-renaming-system.jsx` | React design-doc component for **ChatRenamer** — a spec/prototype for an AI-driven system that auto-titles chat threads. |
| `v2-rename-tool.html` | "Thread Namer" — a standalone browser tool (Prompt Lab) that calls OpenAI or Gemini to generate short thread titles, with per-project system prompts (Prompt Lab, Garden OS, Graph Explorer, Phosphene, Trailkeeper, MetaGrid, AV/Home Automation, etc.) and local API key storage. |
| `openai-local-tools.js` | Shared JS helper (`LocalOpenAIPrototype`) wrapping OpenAI and Gemini chat-completion calls; used by `v2-rename-tool.html`. |
| `codedash.html` | "Code Dashboard" — a generated, single-file HTML dashboard summarizing repo/project activity across the estate. |
| `codedash-mar24.html` | Snapshot of the Code Dashboard from March 24, 2026. |
| `codedash-mar24/` | Nested folder tracked as a git submodule reference with no `.gitmodules` entry, so it doesn't resolve/checkout — a known leftover from the March 24 dashboard snapshot. |
| `daily-ops-apr06.html` | "Monday Operating Board" — a generated single-file daily planner/ops board (time-blocked schedule across active projects) for April 6, 2026. |
| `assets/icons/favicon/favicon.svg` | Shared favicon used by the HTML tools/dashboards in this repo. |
| `CLAUDE.md` | Agent-facing notes: project overview, stack, and session log for this repo. |
