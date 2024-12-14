import chalk from "chalk";
import { spotItCardGenerator } from "../lib/generateSpotItCards.ts";

const main = async () => {
  const args = Deno.args;
  if (args.length < 2) {
    console.error("Usage: deno run --allow-read --allow-write reroll_cards.ts <baseDirectoryPath> <cardIndex1> [<cardIndex2> ...]");
    Deno.exit(1);
  }

  const baseDirectoryPath = args[0];
  const cardIndices = args.slice(1).map(Number).filter(n => !isNaN(n));

  if (cardIndices.length === 0) {
    console.error("No valid card indices provided");
    Deno.exit(1);
  }

  await Promise.all(cardIndices.map(async (cardIndex) => {
    console.log(chalk.yellow(`Rerolling card index: ${cardIndex}`));
    await spotItCardGenerator.reroll(baseDirectoryPath, cardIndex);
  }))


  console.log(chalk.green("Reroll complete."));
};

await main();
