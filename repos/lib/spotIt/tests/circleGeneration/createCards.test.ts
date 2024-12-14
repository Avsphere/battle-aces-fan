import { assertEquals } from "../../../../tests/testDeps.ts";
import { createCards } from "../../lib/createCards.ts";
import { assertThrows } from '@std/assert'

Deno.test("createCards with 57 images and cardCount=57 should return 57 cards", () => {
  const images = Array.from({ length: 57 }, (_, i) => `img${i}`);
  const cards = createCards(images, 57);
  assertEquals(cards.length, 57);
});

Deno.test("createCards with 57 images and cardCount=55 should return 55 cards", () => {
  const images = Array.from({ length: 57 }, (_, i) => `img${i}`);
  const cards = createCards(images, 55);
  assertEquals(cards.length, 55);
});

Deno.test("createCards with incorrect number of images should throw", () => {
  const images = Array.from({ length: 56 }, (_, i) => `img${i}`);
  assertThrows(() => createCards(images, 57));
});

Deno.test("All returned cards should have exactly 8 symbols", () => {
  const images = Array.from({ length: 57 }, (_, i) => `img${i}`);
  const cards = createCards(images, 57);
  for (const card of cards) {
    assertEquals(card.imageIds.length, 8);
  }
});

Deno.test("Check for unique overlap property: each pair of cards should share exactly one symbol", () => {
  const images = Array.from({ length: 57 }, (_, i) => `img${i}`);
  const cards = createCards(images, 57);

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      const intersection = cards[i].imageIds.filter(id => cards[j].imageIds.includes(id));
      assertEquals(intersection.length, 1);
    }
  }
});
