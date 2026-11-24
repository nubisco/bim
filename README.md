# @nubisco/bim

A building as a model, in pure TypeScript: storeys, walls, spaces, doors and windows,
measured in whole millimetres, with validation, plan geometry, an edit history, and an
IFC4 writer and reader. No WebAssembly, no Node and no DOM, so the same code runs in a
browser and on a server.

It began as the House plan of [OpenBridge](https://github.com/nubisco/openbridge), and is
the building model of Keystone, Nubisco's renovation project manager.

```sh
pnpm add @nubisco/bim
```

## What is in it

| Module                  | What it does                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| `@nubisco/bim/v2`       | The plan: `Plan`, `Storey`, `Wall`, `Space`, `Opening` (door, window, gap), `Radiator`, `Furniture`    |
| `@nubisco/bim/validate` | `validatePlan`: checks a plan from the outside world and returns a clean copy, or throws `PlanError`   |
| `@nubisco/bim/ifc`      | `toIfc`: the plan as an IFC4 STEP file, with stable GlobalIds                                          |
| `@nubisco/bim/ifc-read` | `fromIfc`: an IFC file read into a plan, with notes on what was left out, and `adoptIds`               |
| `@nubisco/bim/v1`       | Version 1: the plan as a grid of half metre cells and rectangles, which a simple editor draws          |
| `@nubisco/bim/convert`  | `fromV1` and `toV1`, carrying what version 1 cannot say (wall thickness, angled walls, any room shape) |
| `@nubisco/bim/cells`    | Plane geometry on any measurements: point in polygon, areas, outlines of rectangles                    |
| `@nubisco/bim/edges`    | Straight edges at any angle in whole millimetres: which lie on one line, and the walls rooms make      |
| `@nubisco/bim/history`  | `History`: undo and redo over whole snapshots                                                          |

`@nubisco/bim` re-exports the plan, validation, IFC and history by name, and version 1,
`cells` and `edges` as namespaces.

## The plan

Every length is a whole number of millimetres. x grows to the right and y grows down the
plan as drawn, with (0, 0) at the plot's top left corner. Walls are elements of their own,
a straight centre line with a thickness. Spaces are polygons. Doors and windows are hosted
by a wall, at a distance along it.

```ts
import { validatePlan, type Plan } from '@nubisco/bim'
import { toIfc } from '@nubisco/bim/ifc'
import { fromIfc } from '@nubisco/bim/ifc-read'

const plan: Plan = validatePlan(JSON.parse(json))
const ifc = toIfc(plan, { name: 'Home' })

const { plan: read, notes } = fromIfc(ifcText)
```

A placement is a device on the plan. Its `ref` is opaque here: the application that uses
the model decides what it names. `toIfc` exports only the devices its caller describes.

## IFC

The export maps storeys, spaces, walls (with a material layer for their thickness), slabs,
doors and windows (filling openings that void their wall), shading devices, radiators and
furniture. Detail IFC has no place for goes in the property sets `House_Site`,
`House_Opening`, `House_Covering` and `House_Device`, so an export read back is the same
building. Every export in the tests is validated with IfcOpenShell.

The import reads what the common tools write: walls by their Axis or body, spaces by their
footprint (moved from the inside faces of the walls onto their centre lines), doors and
windows through their openings, in millimetres, metres or feet. What it cannot read it
leaves out and says so in `notes`.

The full mapping, and the decisions behind it, are in [docs/design.md](docs/design.md).

## Development

```sh
pnpm install
pnpm run quality:check
```

The IfcOpenShell check runs when `IFC_PYTHON` points at a Python with `ifcopenshell` and
`pytest` (CI installs them). `test/fixtures/make-foreign-ifc.py` regenerates the file the
import is tested against. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).
