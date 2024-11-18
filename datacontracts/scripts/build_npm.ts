import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  compilerOptions: {
    lib: ["DOM"],
  },
  package: {
    // package.json properties
    name: "@battles-aces-fan/datacontracts",
    version: Deno.args[0],
    description: "Yes. This is how I choose to spend my time.",
    license: "MIT",
    private: false,
    repository: {
      type: "git",
      url: "git+https://github.com/avsphere/battle-aces-fan.git",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    // Deno.copyFileSync("LICENSE", "npm/LICENSE");
    // Deno.copyFileSync("README.md", "npm/README.md");
  },
});