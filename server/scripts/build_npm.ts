import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
    undici: true
  },
  compilerOptions: {
    lib: ["DOM"],
  },
  package: {
    // package.json properties
    name: "@battles-aces-fan/server",
    version: Deno.args[0],
    description: "Yes. This is how I choose to spend my time.",
    license: "MIT",
    private: false,
    repository: {
      type: "git",
      url: "git+https://github.com/avsphere/battle-aces-fan.git",
    },
    dependencies: {
      "@hono/zod-validator": "^0.4.1",
      "hono": "^4.6.10",
      "zod": "^3.23.8",
      "@types/node-fetch" : "^2.5.7",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    // Deno.copyFileSync("LICENSE", "npm/LICENSE");
    // Deno.copyFileSync("README.md", "npm/README.md");
  },
});