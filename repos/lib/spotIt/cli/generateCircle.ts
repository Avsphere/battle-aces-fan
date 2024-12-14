import { circleGeneration } from "../lib/circleGeneration.ts";

interface InputImage {
  pathToImage: string;
  id: string;
}

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
  })


  const circle = { radius: 600 };
  const buffer = await circleGeneration.createSpotItCircle(circle, imagesWithId, {
    imagePlacementConfig: {
        distanceBetweenEach : { min: 60, max: 100 },
        maxImageSize: 450,
        minImageSize: 180,
        useRandomImageOrientation: true,
    },
    pullOuterImagesToEdgesScalar : .5,
    shouldPullOuterImagesToEdges : true,
    shouldDrawCircleLine: true
  });

  const tmpFile = await Deno.makeTempFile({ prefix: "spotit_", suffix: ".png" });
  await Deno.writeFile(tmpFile, new Uint8Array(buffer));
  console.log(`Circle image generated at: ${tmpFile}`);
};

await main();
