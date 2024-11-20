import { build, emptyDir } from "@deno/dnt";
import { buildOptions } from "./buildOptions.ts";

await emptyDir("./npm");
buildOptions.postBuild = async () => {
    // run npm cache clean --force in the npm directory
    const clearCache = new Deno.Command("npm", {
        args: ["cache", "clean", "--force"],
        cwd: "./npm",
        stdout: "inherit",
        stderr: "inherit",
    });

    const denoBuildResult = await clearCache.output();
    if (denoBuildResult.code !== 0) {
        throw new Error(
            `Failed to clean npm cache: ${
                new TextDecoder().decode(
                    denoBuildResult.stderr,
                )
            }`,
        );
    }

}
await build(buildOptions);