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
      "DOM",
      "ESNext"
    ]
  },
  "package": {
    "name": "@battle-aces-fan/config-provider",
    "version": "0.2.36",
    "description": "Yes. This is how I choose to spend my time.",
    "license": "MIT",
    "private": false,
    "repository": {
      "type": "git",
      "url": "git+https://github.com/avsphere/battle-aces-fan.git"
    },
    "dependencies": {
      "zod": "^3.23.8"
    }
  }
};
