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
    "name": "@battle-aces-fan/repos",
    "version": "0.2.16",
    "description": "Yes. This is how I choose to spend my time.",
    "license": "MIT",
    "private": false,
    "repository": {
      "type": "git",
      "url": "git+https://github.com/avsphere/battle-aces-fan.git"
    },
    "dependencies": {
      "zod": "^3.23.8",
      "@battle-aces-fan/app-context": "0.2.16"
    }
  }
};
