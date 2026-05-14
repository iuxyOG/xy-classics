# Contributing to XY Classics

Thanks for your interest in helping out. XY Classics is a solo-led project, but
patches, bug reports, and design feedback are welcome.

## Quick start

```bash
git clone https://github.com/iuxyOG/xy-classics.git
cd xy-classics
npm install
npm run tauri dev
```

You'll need:

- **Node** 20 or newer
- **Rust** 1.95 or newer (`rustup default stable`)
- The Tauri OS prerequisites for your platform — see
  [v2.tauri.app/start/prerequisites/](https://v2.tauri.app/start/prerequisites/).

## Branches

- `main` is always green. CI must pass on every push.
- Work in feature branches off `main`. Naming is loose — `feat/library-scanner`,
  `fix/font-fallback`, `docs/savevault-revision`, etc.

## Commits

This repo uses [Conventional Commits](https://www.conventionalcommits.org/) and
enforces them via Husky + commitlint. The hook runs automatically when you
`git commit`.

Examples:

```
feat(library): add ROM hash dedup
fix(ui): correct ember animation timing
docs(architecture): clarify plugin selection
chore(deps): bump tauri-plugin-fs to 2.6
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`,
`build`, `ci`, `chore`, `revert`.

## Before pushing

The pre-commit hook runs `lint-staged` (ESLint + Prettier) on changed files.
You can also run the full suite locally:

```bash
npm run typecheck
npm run lint
npm run format:check
npm test
( cd src-tauri && cargo check && cargo test )
```

## Pull requests

- One topic per PR. Keep diffs reviewable.
- Update `CHANGELOG.md` under `[Unreleased]` if your change is user-visible.
- If your PR closes an issue, reference it in the body (`Closes #123`).
- CI must pass on Ubuntu 22.04 and Windows latest before merge.

## Reporting bugs

Open an issue with:

- What you did, what you expected, what happened.
- Your OS + Node + Rust versions.
- Logs from the terminal where `npm run tauri dev` was running.

Security issues — see [SECURITY.md](SECURITY.md).

## Code style

- TypeScript strict — no `any` unless you can justify it.
- Functional React — no class components.
- Prefer composition over inheritance, on both the React and Rust sides.
- Prettier formats; don't argue with it.
- No comments that just restate what the code does. Comment _why_, not _what_.

## License

By contributing, you agree your contributions are licensed under
[GPL-3.0-only](LICENSE), the same as the project.
