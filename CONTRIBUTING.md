# Contributing

Thanks for contributing to `@nubisco/bim`.

## Local Setup

```bash
git clone https://github.com/nubisco/bim.git
cd bim
pnpm install
```

## Development Commands

```bash
pnpm test
pnpm run types:check
pnpm run lint
pnpm run format:check
pnpm run build
pnpm run quality:check  # all of the above
```

Notes:

- Minimum supported Node.js version is `22`
- The IfcOpenShell check runs when `IFC_PYTHON` points at a Python with `ifcopenshell`
  and `pytest`: `python -m pip install ifcopenshell==0.9.0.post1 pytest`

## What this package is

A building model shared by more than one product (OpenBridge's House page, Keystone).
Keep it pure TypeScript with no Node, DOM or WebAssembly in `src`, and keep it free of any
one product: an application's own things (devices, accounts) stay opaque references here.
The plan's shape and the IFC mapping are contracts. A change to either is a breaking or
feature change for every product, so say what it changes and add tests, and for IFC make
sure IfcOpenShell still validates every export.

## Contributor License Agreement (CLA)

To keep Nubisco projects sustainable and legally consistent, all contributions are made
under the Individual CLA:

- See `docs/CLA-INDIVIDUAL.md`
- You retain ownership of your work
- You grant Nubisco rights to use, distribute, and relicense contributions, including for commercial distributions

By opening a pull request, you must explicitly confirm you agree to the CLA in the pull
request template.

## Branch and PR Expectations

- Create focused branches (one concern per PR)
- Keep pull requests small and reviewable
- Use Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `chore:`, `ci:`)
- Run `pnpm run quality:check` before opening a PR
- Confirm CLA agreement in the PR checklist

## Third-party code

Anything copied or adapted from another project needs its licence and copyright line in
`THIRD_PARTY_NOTICES.md` in the same pull request. Do not merge code whose licence is
not compatible with MIT.

## Coding Style

- TypeScript strict mode
- 2-space indentation, LF line endings, no semicolons, single quotes
- Lengths are whole millimetres, and every new field is optional or has a default
- Keep the public surface small: exports are a contract for every product

## Issue Routing

- Use **Bug report** for regressions and reproducible defects
- Use **Feature request** for what the model or IFC should cover
- Include a minimal reproduction in all bug reports
