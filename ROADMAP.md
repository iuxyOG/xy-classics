# Roadmap

XY Classics ships in numbered phases. Each phase ends with a tagged release
that's installable on Windows and Linux. No fixed dates — a phase ships when
its acceptance criteria are met.

---

## ✅ Phase 0 — Kickoff & Scaffold _(May 2026)_

Foundations. The app boots, the toolchain is reproducible, CI is green.

- [x] Tauri 2 + React 19 + TypeScript strict scaffold
- [x] Tailwind v4 + shadcn-ready tokens (Hollow Vault palette)
- [x] Seven Tauri plugins registered (shell, fs, sql, store, dialog, os, process)
- [x] Hello screen with Cinzel logo, Cormorant tagline, Cruz Pátea sigil
- [x] ESLint flat config + Prettier + Husky + Commitlint
- [x] CI workflow (lint, test, build matrix Win + Linux)
- [x] Release workflow (publishes installers on `v*.*.*` tags)
- [x] Base documentation (README, architecture, design system, devlog)

**Acceptance:** clone → `npm install` → `npm run tauri dev` opens the hello screen.
CI passes on both platforms. Tag `v0.0.1`.

---

## ⬜ Phase 1 — Metadata Sources

Wire external metadata APIs so the catalog can identify and enrich game entries.

- [ ] [ScreenScraper](https://www.screenscraper.fr/) integration (primary source)
- [ ] [Hasheous](https://hasheous.org/) hash-lookup integration (fallback)
- [ ] [IGDB](https://www.igdb.com/api) integration (richer metadata)
- [ ] [TheGamesDB](https://thegamesdb.net/) integration (community fallback)
- [ ] Source-priority resolver (preference order, conflict handling)
- [ ] Local cache layer (SQLx) for offline-capable browsing

**Acceptance:** given a ROM file, the app returns title, region, platform, year,
cover art, and a brief description from at least one source. Tag `v0.1.0`.

---

## ⬜ Phase 2 — Library Scanner & Emulator Detection

Walk the user's ROM folders and detect installed emulators.

- [ ] Filesystem scanner (walkdir + xxh3 hashing for dedup)
- [ ] Per-platform ROM extension registry
- [ ] Emulator auto-detection (sysinfo + known install paths)
- [ ] Library view with cover grid + filtering

**Acceptance:** point the app at a folder, get a populated catalog with
emulator-launchable entries. Tag `v0.2.0`.

---

## ⬜ Phase 3 — Save Vault

Portable save snapshots without touching the emulators' on-disk save layout.

- [ ] INI-driven save-path discovery (no symlinks)
- [ ] `tar.zst` snapshot format
- [ ] xxh3 dedup across snapshots
- [ ] USB profile manifest (carry your saves between machines)
- [ ] Restore flow with conflict resolution

**Acceptance:** snapshot saves on machine A, plug a USB stick, restore on
machine B with the same emulator profile. Tag `v0.3.0`.

---

## ⬜ Phase 4 — Controller Spatial Navigation

Couch-friendly UX with gamepad input.

- [ ] [`gilrs`](https://gitlab.com/gilrs-project/gilrs) gamepad reader (Rust side)
- [ ] Bridge to `@noriginmedia/norigin-spatial-navigation` (React side)
- [ ] Configurable button mapping
- [ ] Big Picture-style "10-foot UI" mode

**Acceptance:** entire app navigable with a controller, no keyboard or mouse needed.
Tag `v0.4.0`.

---

## ⬜ Phase 5 — TBD

Later goals (in no particular order):

- Multi-user profiles
- Cloud sync for snapshots (opt-in)
- Achievement/playtime tracking (RetroAchievements opt-in)
- Theme packs
- Localization (start with PT-BR, EN)

---

_Roadmap last updated: 2026-05-03._
