import { build, emptyDir, BuildOptions } from "@deno/dnt";
import { buildOptions } from "./buildOptions.ts";

await emptyDir("./npm");
await build(buildOptions);