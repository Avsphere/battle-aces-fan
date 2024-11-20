import type { BuildOptions } from "@deno/dnt";
export const buildOptions: BuildOptions = {
  "entryPoints": [
    "./mod.ts",
  ],
  "outDir": "./npm",
  "shims": {
    "deno": true,
  },
  "compilerOptions": {
    "lib": [
      "DOM",
    ],
  },
  "package": {
    "name": "@battle-aces-fan/app-context",
    "version": "0.2.42",
    "description": "Yes. This is how I choose to spend my time.",
    "license": "MIT",
    "private": false,
    "repository": {
      "type": "git",
      "url": "git+https://github.com/avsphere/battle-aces-fan.git",
    },
    "dependencies": {
      "@battle-aces-fan/db": "0.2.42",
      "zod": "^3.23.8",
    },
  },
};
