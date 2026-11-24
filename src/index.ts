/**
 * `@nubisco/bim`: a building as a model. Each module is also its own entry
 * point (`@nubisco/bim/v2`, `@nubisco/bim/ifc`, ...), which is the way to
 * import when only part of it is needed.
 *
 * The plan (version 2), its validation, the IFC writer and reader and the
 * edit history are exported by name. Version 1 (the editor's grid of cells),
 * the conversion between the two and the plane geometry helpers are
 * namespaces, since their names would otherwise clash.
 */
export * from './v2.js'
export * from './validate.js'
export * from './ifc.js'
export * from './ifc-read.js'
export * from './history.js'
export { fromV1, toV1, type Migration } from './convert.js'
export * as v1 from './v1.js'
export * as cells from './cells.js'
export * as edges from './edges.js'
