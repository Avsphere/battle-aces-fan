import chalk from "chalk";
import { circleGeneration, CircleOptions } from "../lib/circleGeneration.ts";
import { InputImage } from "../lib/types.ts";


const CIRCLE_OPTIONS: CircleOptions = {
    imagePlacementConfig: {
        distanceBetweenEach: { min: 70, max: 100 },
        maxImageSize: 400,
        minImageSize: 200,
        useRandomImageOrientation: true,
        randomOrientationScalar : .2
    },
    pullOuterImagesToEdgesScalar: 0.4,
    shouldPullOuterImagesToEdges: true,
    shouldDrawCircleLine: true,
};

const circle = { radius: 800 };
const IMAGES_SLICE_SIZE = 8

const main = async () => {
    const args = Deno.args;
    if (args.length < 1) {
        console.error("Usage: deno run --allow-read --allow-write script.ts <path_to_json>");
        Deno.exit(1);
    }

    const jsonFilePath = args[0];
    const data = await Deno.readTextFile(jsonFilePath);
    const images: InputImage[] = JSON.parse(data);

    const imagesWithId = images.map((image) => {
        if (!image.id) {
            const pathParts = image.pathToImage.split("/");
            const filename = pathParts[pathParts.length - 1];
            image.id = filename;
        }
        return image;
    });

    const tempDir = await Deno.makeTempDir({ prefix: "spotit_dir_" });
    console.log(chalk.green(`Base directory: ${tempDir}`));

    await Promise.all(Array.from({ length: 10 }, async (_, i) => {
        const imagesSlice = imagesWithId.slice(0, IMAGES_SLICE_SIZE);
        console.log(chalk.green(`Generating circle with ${imagesSlice.length} images using options:`), CIRCLE_OPTIONS);
        const buffer = await circleGeneration.createSpotItCircle(circle, imagesSlice, CIRCLE_OPTIONS);

        const filePath = `${tempDir}/spotit_${i}.png`;
        await Deno.writeFile(filePath, new Uint8Array(buffer));
        console.log(`Saved to: ${filePath}`);
    }));
};

await main();
