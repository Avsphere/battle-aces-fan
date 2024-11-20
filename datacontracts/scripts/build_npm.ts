import { build, emptyDir } from "@deno/dnt";
import { buildOptions } from "./buildOptions.ts";

await emptyDir("./npm");
await build(buildOptions);
