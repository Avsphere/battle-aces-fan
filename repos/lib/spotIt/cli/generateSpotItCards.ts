// generate_all_images.ts
import chalk from "chalk";
import { CreateSpotItCardsOptions, spotItCardGenerator } from "../lib/generateSpotItCards.ts";
import { CircleOptions } from "../lib/circleGeneration.ts";

const CIRCLE_OPTIONS: CreateSpotItCardsOptions = {
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
  circleRadius: 800,
  reuseImagesIfNotEnough: true,
};

const main = async () => {
  const args = Deno.args;
  if (args.length < 2) {
    console.error("Usage: deno run --allow-read --allow-write generate_all_images.ts <path_to_directory> <55|57>");
    Deno.exit(1);
  }

  const imageDir = args[0];
  console.log(chalk.green(`Reading images from: ${imageDir}`));
  const cardCountArg = args[1];
  if (cardCountArg !== "55" && cardCountArg !== "57") {
    console.error("Card count must be either 55 or 57");
    Deno.exit(1);
  }

  const cardCount = Number(cardCountArg) as 55 | 57;
  console.log(chalk.green(`Generating ${cardCount} cards`));
  const cardGenerationResult = await spotItCardGenerator.generateSpotItCards(imageDir, cardCount, CIRCLE_OPTIONS);
  console.log(chalk.green(`All card images generated in directory: ${cardGenerationResult.baseDirectoryPath}`));
};

await main();
