import { BuildOptions } from "@deno/dnt";

export const buildOptions : BuildOptions = {
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
      name: "@battle-aces-fan/app-context",
      version: "0.2.0",
      description: "Yes. This is how I choose to spend my time.",
      license: "MIT",
      private: false,
      repository: {
        type: "git",
        url: "git+https://github.com/avsphere/battle-aces-fan.git",
      },
      dependencies : {
        "@battle-aces-fan/db" : "^0.1.0",
        "zod" : "^3.23.8",
      }
    },
    postBuild() {
      // steps to run after building and before running the tests
      // Deno.copyFileSync("LICENSE", "npm/LICENSE");
      // Deno.copyFileSync("README.md", "npm/README.md");
    },
  }
  