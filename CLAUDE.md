# @nubisco/bim

A building as a model: the plan (version 2) and the editor's version 1, validation, plan
geometry, edit history, and the IFC4 writer and reader. Shared by OpenBridge's House page
and Keystone, so a change here reaches both.

Read the workspace standards first: `../CLAUDE.md` and `../AGENTS.md`.

- `src` is pure TypeScript: no Node, no DOM, no WebAssembly. It runs in a browser and on a
  server alike.
- Keep it product-agnostic. A device on the plan is an opaque `ref`, and what it is in IFC
  is the caller's to say. Nothing here may name a product's own things.
- The design and its decisions are in `docs/design.md`. Record a decision there when Jose
  makes one, with its date.
- Every IFC export in the tests is validated with IfcOpenShell when `IFC_PYTHON` is set.
  CI sets it. Run it locally before changing the mapping.
- `pnpm run quality:check` must pass. Releases are semantic-release from conventional
  commits, published by CI with npm trusted publishing. Never publish by hand, except the
  one-off first version described in `.github/MAINTAINER-SETUP.md`.
