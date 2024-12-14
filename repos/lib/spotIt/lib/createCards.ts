type Card = { index: number; imageIds: string[] };

export function createCards(imageIds: string[], cardCount: 55 | 57): Card[] {
  const n = 7;
  const totalSymbols = n * n + n + 1; // 57
  if (imageIds.length !== totalSymbols) {
    throw new Error(`Expected ${totalSymbols} images, got ${imageIds.length}`);
  }

  const pairIndex = (a: number, b: number) => a * n + b;

  const cards: Card[] = [];
  let cardIndex = 0;

  // Normal cards
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      const pairs = Array.from({ length: n }, (_, x) => pairIndex(x, (a * x + b) % n));
      const singleton = 49 + a;
      const symbolIndices = [...pairs, singleton].map(i => imageIds[i]);
      cards.push({ index: cardIndex++, imageIds: symbolIndices });
    }
  }

  // Special cards
  for (let c = 0; c < n; c++) {
    const pairs = Array.from({ length: n }, (_, x) => pairIndex(c, x));
    const infinite = 56;
    const symbolIndices = [...pairs, infinite].map(i => imageIds[i]);
    cards.push({ index: cardIndex++, imageIds: symbolIndices });
  }

  // Super special card
  {
    const singletons = Array.from({ length: n }, (_, i) => 49 + i);
    const infinite = 56;
    const symbolIndices = [...singletons, infinite].map(i => imageIds[i]);
    cards.push({ index: cardIndex++, imageIds: symbolIndices });
  }

  // If cardCount is 55, slice first 55 cards; otherwise return all 57
  return cards.slice(0, cardCount);
}
