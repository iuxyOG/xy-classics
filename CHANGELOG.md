# Changelog

All notable changes to XY Classics are documented here. Format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

_Nothing here yet — see [ROADMAP.md](ROADMAP.md) for what's coming._

---

## [0.0.1] - 2026-05-03

### Phase 0 — Kickoff & Scaffold

First tagged release. The application boots and shows a hello screen; the
launcher logic is built in upcoming phases.

### Added

- Tauri 2 + React 19 + TypeScript (strict) project scaffold.
- Tailwind CSS v4 with the Hollow Vault palette and five-font stack
  (Cinzel, Cormorant Garamond, Inter Tight, JetBrains Mono, UnifrakturMaguntia).
- Seven Tauri plugins registered and capabilities granted: `shell`, `fs`, `sql`,
  `store`, `dialog`, `os`, `process`.
- Cargo dependency baseline for upcoming phases: SQLx 0.8 (sqlite + rustls),
  sysinfo, notify, walkdir, xxhash-rust (xxh3), zstd, tar, uuid v7, thiserror,
  anyhow, tracing.
- Hello screen with Cinzel logo, Cormorant tagline (EN/PT toggle on hover),
  status row, footer, Cruz Pátea sigil, animated embers, Fraktur K reveal.
- ESLint v9 flat config + Prettier with `prettier-plugin-tailwindcss`.
- Husky pre-commit (lint-staged) and commit-msg (commitlint conventional) hooks.
- CI workflow: lint + test + build matrix (Ubuntu 22.04 + Windows).
- Release workflow: publishes installers (`.AppImage`, `.deb`, `.exe`/NSIS) on
  `v*.*.*` tags via `tauri-apps/tauri-action`.
- Base documentation: README, ROADMAP, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY,
  LEGAL, architecture, savevault design, design system, devlog 001.

### Pre-release snapshot

- `v0.0.0-scaffold` — captured immediately after the hello screen booted, before
  CI/lint/release/docs were added. Useful for archaeology.

[Unreleased]: https://github.com/iuxyOG/xy-classics/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/iuxyOG/xy-classics/releases/tag/v0.0.1
