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
    "name": "@battle-aces-fan/user-clients",
    "version": "0.2.34",
    "description": "Yes. This is how I choose to spend my time.",
    "license": "MIT",
    "private": false,
    "repository": {
      "type": "git",
      "url": "git+https://github.com/avsphere/battle-aces-fan.git"
    },
    "dependencies": {
      "hono": "^4.6.10",
      "@hono/zod-validator": "^0.4.1",
      "zod": "^3.23.8",
      "@battle-aces-fan/server": "0.2.32"
    }
  }
};
