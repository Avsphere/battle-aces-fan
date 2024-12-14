import assert from "node:assert";
import { circleGeneration } from "../../lib/circleGeneration.ts";
import { getTestSockFilepath } from "./circleGenerationTestUtils.ts";
import { Buffer } from "node:buffer";

Deno.test("insideCircle: point inside the circle", () => {
    const center = 100;
    const radius = 100;
    assert(circleGeneration.insideCircle(90, 90, 10, 10, center, radius));
});

Deno.test("insideCircle: point outside the circle", () => {
    const center = 100;
    const radius = 100;
    assert(!circleGeneration.insideCircle(190, 190, 10, 10, center, radius));
});

Deno.test("overlaps: non-overlapping scenario", () => {
    const placed = [{ buffer: new Uint8Array().buffer as Buffer, x: 50, y: 50, width: 20, height: 20 }];
    assert(!circleGeneration.overlaps(0, 0, 10, 10, placed, 0));
});

Deno.test("overlaps: overlapping scenario", () => {
    const placed = [{ buffer: new Uint8Array().buffer as Buffer, x: 50, y: 50, width: 20, height: 20 }];
    assert(circleGeneration.overlaps(55, 55, 20, 20, placed, 0));
});

Deno.test("overlaps: scenario with minimal distance", () => {
    const placed = [{ buffer: new Uint8Array().buffer as Buffer, x: 50, y: 50, width: 20, height: 20 }];
    assert(circleGeneration.overlaps(72, 50, 20, 20, placed, 5));
});

Deno.test("insideCircle: minimal radius scenario", () => {
    const center = 10;
    const radius = 10;
    assert(circleGeneration.insideCircle(5, 5, 2, 2, center, radius));
});

Deno.test("placeImagesRandomly: returns boolean", () => {
    const images = [Buffer.from([0, 1, 2])];
    const placementConfig = {
      minImageSize: 10,
      maxImageSize: 20,
      useRandomImageOrientation: false,
      distanceBetweenEach: { min: 0, max: 0 }
    };
    const placedImages: any[] = [];
    const result = circleGeneration.placeImagesRandomly(images, 100, placementConfig, placedImages, 0);
    assert.strictEqual(typeof result, "boolean");
});

Deno.test("composeCircle: returns a Buffer", async () => {
    const pathToSock = getTestSockFilepath();
    const sockBuffer = await circleGeneration.loadImage(pathToSock);
    const placedImages = [
        { buffer: sockBuffer, x: 10, y: 10, width: 20, height: 20 }
    ];
    const result = await circleGeneration.composeCircle(200, placedImages, { shouldDrawCircleLine: true });
    assert(result instanceof Buffer);
    assert(result.length !== 0);
});

Deno.test("createSpotItCircle: basic scenario with defaults", async () => {
    const circle = { radius: 50 };
    const pathToSock = getTestSockFilepath();
    const images = [{ pathToImage: pathToSock, id: "test" }];
    try {
        const buffer = await circleGeneration.createSpotItCircle(circle, images);
        assert(buffer instanceof Buffer);
    } catch (e) {
        assert(e instanceof Error);
    }
});

Deno.test("createSpotItCircle: with imagePlacementConfig", async () => {
    const circle = { radius: 50 };
    const pathToSock = getTestSockFilepath();
    const images = [{ pathToImage: pathToSock, id: "test" }];
    const placementConfig = {
      minImageSize: 5,
      maxImageSize: 10,
      useRandomImageOrientation: true,
      distanceBetweenEach: { min: 5, max: 10 }
    };
    try {
        const buffer = await circleGeneration.createSpotItCircle(circle, images, {
            shouldDrawCircleLine: true,
            imagePlacementConfig: placementConfig
        });
        assert(buffer instanceof Buffer);
    } catch (e) {
        assert(e instanceof Error);
    }
});

Deno.test("overlaps: identical placement scenario", () => {
    const placed = [
        { buffer: new Uint8Array().buffer as Buffer, x: 50, y: 50, width: 20, height: 20 }
    ];
    assert(circleGeneration.overlaps(50, 50, 20, 20, placed, 0));
});

Deno.test("overlaps: touching edges but not overlapping with no minimal distance", () => {
    const placed = [
        { buffer: new Uint8Array().buffer as Buffer, x: 50, y: 50, width: 20, height: 20 }
    ];
    assert(!circleGeneration.overlaps(70, 50, 20, 20, placed, 0));
});

Deno.test("insideCircle: image exactly on circle edge", () => {
    const center = 100;
    const radius = 50;
    assert(circleGeneration.insideCircle(90, 90, 20, 20, center, radius));
});

Deno.test("insideCircle: just outside circle boundary", () => {
    const center = 100;
    const radius = 50;
    assert(!circleGeneration.insideCircle(130, 130, 20, 20, center, radius));
});
