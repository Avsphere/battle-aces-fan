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
  mappings: {
    "@battle-aces-fan/server": {
      name: "@battle-aces-fan/server",
      version: "0.1.0", // Replace with the correct version
    },
  },
  package: {
    // package.json properties
    name: "@battles-aces-fan/user-clients",
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