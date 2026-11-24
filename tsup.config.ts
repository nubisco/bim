import { defineConfig } from 'tsup'

// Every module is its own entry, so `@nubisco/bim/v2` or `@nubisco/bim/ifc`
// brings in only what it needs, and `@nubisco/bim` re-exports them all.
export default defineConfig({
  entry: [
    'src/index.ts',
    'src/v2.ts',
    'src/v1.ts',
    'src/convert.ts',
    'src/validate.ts',
    'src/cells.ts',
    'src/edges.ts',
    'src/history.ts',
    'src/ifc.ts',
    'src/ifc-read.ts',
  ],
  format: ['esm'],
  dts: true,
  platform: 'neutral',
  target: 'es2022',
  clean: true,
  sourcemap: false,
  splitting: true,
})
