import { BuildOptions } from "@deno/dnt";
export const buildOptions : BuildOptions = {
  "entryPoints": [
    "./mod.ts"
  ],
  "outDir": "./npm",
  "shims": {
    "deno": true,
    "undici": true
  },
  "compilerOptions": {
    "lib": [
      "DOM"
    ]
  },
  "package": {
    "name": "@battle-aces-fan/server",
    "version": "0.2.32",
    "description": "Yes. This is how I choose to spend my time.",
    "license": "MIT",
    "private": false,
    "repository": {
      "type": "git",
      "url": "git+https://github.com/avsphere/battle-aces-fan.git"
    },
    "dependencies": {
      "hono": "^4.6.10",
      "zod": "^3.23.8",
      "@battle-aces-fan/app-context": "0.2.32",
      "@battle-aces-fan/repos": "0.2.32",
      "@types/node-fetch": "^2.5.7",
      "@hono/zod-validator": "^0.4.1"
    }
  }
};
