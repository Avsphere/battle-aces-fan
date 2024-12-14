import { circleGeneration, CircleOptions } from "./circleGeneration.ts";
import { Card, createCards } from "./createCards.ts";
import { InputImage } from "./types.ts";

export type CreateSpotItCardsOptions = CircleOptions & { circleRadius: number, reuseImagesIfNotEnough: boolean };

export const spotItCardGenerator = {
  generateSpotItCards: async (
    imageDir: string,
    cardCount: 55 | 57,
    circleOptions: CreateSpotItCardsOptions,
  ) => {
    const entries: string[] = [];
    for await (const dirEntry of Deno.readDir(imageDir)) {
      if (!dirEntry.isDirectory && dirEntry.name.match(/\.(png|jpg|jpeg|gif)$/i)) {
        entries.push(dirEntry.name);
      }
    }

    if (circleOptions.reuseImagesIfNotEnough && entries.length < 57) {
      const needed = 57 - entries.length;
      for (let i = 0; i < needed; i++) {
        const randomImage = entries[Math.floor(Math.random() * entries.length)];
        entries.push(randomImage);
      }
    }

    if (entries.length < 57) {
      throw new Error(`Need at least 57 images, got ${entries.length}`);
    } else if (entries.length > 57) {
      entries.splice(57);
    }

    const images: InputImage[] = entries.map((name) => ({
      pathToImage: `${imageDir}/${name}`,
      id: name,
    }));
    const imageIds = images.map((i) => i.id);
    const cards = createCards(imageIds, cardCount);

    const outputDir = await Deno.makeTempDir({ prefix: "spotit_cards_" });
    const imageMap: Record<string, string> = {};
    for (const img of images) {
      imageMap[img.id] = img.pathToImage;
    }

    const concurrency = 15;
    const chunks: Card[][] = [];
    for (let i = 0; i < cards.length; i += concurrency) {
      chunks.push(cards.slice(i, i + concurrency));
    }

    for (const chunk of chunks) {
      await Promise.all(
        chunk.map(async (card) => {
          const cardImages = card.imageIds.map((id) => ({
            pathToImage: imageMap[id],
            id,
          }));
          const buffer = await circleGeneration.createSpotItCircle(
            { radius: circleOptions.circleRadius },
            cardImages,
            circleOptions
          );
          const cardFilePath = `${outputDir}/card_${card.index}.png`;
          await Deno.writeFile(cardFilePath, new Uint8Array(buffer));
        })
      );
    }

    const cardGenerationResult = {
      baseDirectoryPath: outputDir,
      cards,
      inputImages: images,
      circleOptions,
    };
    await Deno.writeTextFile(
      `${outputDir}/cardGenerationResult.json`,
      JSON.stringify(cardGenerationResult, null, 2)
    );
    return cardGenerationResult;
  },

  reroll: async (baseDirectoryPath: string, cardIndex: number) => {
    const data = JSON.parse(
      await Deno.readTextFile(`${baseDirectoryPath}/cardGenerationResult.json`)
    );
    const { cards, inputImages, circleOptions } = data as {
      cards: Card[];
      inputImages: InputImage[];
      circleOptions: CreateSpotItCardsOptions;
    };

    const imageMap: Record<string, string> = {};
    for (const img of inputImages) {
      imageMap[img.id] = img.pathToImage;
    }

    const card = cards.find((c) => c.index === cardIndex);
    if (!card) throw new Error(`Card ${cardIndex} not found`);

    const cardImages = card.imageIds.map((id) => ({
      pathToImage: imageMap[id],
      id,
    }));
    const buffer = await circleGeneration.createSpotItCircle(
      { radius: circleOptions.circleRadius },
      cardImages,
      circleOptions
    );
    const cardFilePath = `${baseDirectoryPath}/card_${card.index}.png`;
    await Deno.writeFile(cardFilePath, new Uint8Array(buffer));
  },
};
