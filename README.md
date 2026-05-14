# XY Classics

> **Where games never die.**
> _Onde jogos nunca morrem._

A cross-platform desktop launcher for retro game collections. Catalog your library,
launch through your emulators, keep your saves portable.

[![CI](https://github.com/iuxyOG/xy-classics/actions/workflows/ci.yml/badge.svg)](https://github.com/iuxyOG/xy-classics/actions/workflows/ci.yml)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.0.1-orange.svg)](CHANGELOG.md)

---

## Status

**Phase 0 — Kickoff (May 2026).** Scaffold, tooling, and CI/CD pipeline.
The application currently shows a hello screen; the launcher itself is built in
upcoming phases. See [ROADMAP.md](ROADMAP.md) for the plan.

## Stack

- [Tauri 2](https://v2.tauri.app/) — Rust backend, native webview frontend
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) (strict)
- [Vite 6](https://vite.dev) + [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) + [Base UI](https://base-ui.com) primitives
- [SQLx](https://github.com/launchbadge/sqlx) (SQLite) for the local catalog
- [Framer Motion](https://www.framer.com/motion/) for transitions

## Develop

Requires Node 20+, Rust 1.95+, and the platform Tauri prerequisites
(see [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/)).

```bash
git clone https://github.com/iuxyOG/xy-classics.git
cd xy-classics
npm install
npm run tauri dev
```

Useful scripts:

| Script              | Purpose                                    |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Vite dev server (frontend only, port 1420) |
| `npm run tauri dev` | Full Tauri app (webview + Rust backend)    |
| `npm run build`     | Type-check + production frontend bundle    |
| `npm run typecheck` | TypeScript validation                      |
| `npm run lint`      | ESLint                                     |
| `npm run format`    | Prettier auto-fix                          |
| `npm test`          | Vitest                                     |

Rust-side checks live in `src-tauri/`:

```bash
cd src-tauri && cargo check
cd src-tauri && cargo test
```

## Documentation

- [Roadmap](ROADMAP.md) — phase plan
- [Changelog](CHANGELOG.md) — release notes
- [Architecture](docs/architecture.md) — high-level design
- [Save vault](docs/savevault.md) — save-snapshot system (Phase 3)
- [Design system](docs/design-system.md) — Hollow Vault visual language
- [Devlog](docs/devlog/) — narrated decision log
- [Contributing](CONTRIBUTING.md) — how to send PRs
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security](SECURITY.md) — how to report vulnerabilities
- [Legal notice](LEGAL.md) — ROMs/BIOS disclaimer

## License

[GPL-3.0-only](LICENSE) — © 2026 [iuxyOG](https://github.com/iuxyOG).
