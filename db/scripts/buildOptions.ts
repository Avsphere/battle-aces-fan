import { BuildOptions } from "@deno/dnt";
export const buildOptions : BuildOptions = {
  "entryPoints": [
    "./mod.ts"
  ],
  "outDir": "./npm",
  "shims": {
    "deno": true
  },
  "compilerOptions": {
    "lib": [
      "DOM"
    ]
  },
  "package": {
    "name": "@battle-aces-fan/db",
    "version": "0.2.22",
    "description": "Yes. This is how I choose to spend my time.",
    "license": "MIT",
    "private": false,
    "repository": {
      "type": "git",
      "url": "git+https://github.com/avsphere/battle-aces-fan.git"
    },
    "dependencies": {
      "mongodb": "^6.10.0",
      "zod": "^3.23.8",
      "@battle-aces-fan/datacontracts": "0.2.16",
      "@battle-aces-fan/config-provider": "0.2.16"
    }
  }
};
