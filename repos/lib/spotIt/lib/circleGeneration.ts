import { Buffer } from "node:buffer";
import sharp, { OverlayOptions, Metadata } from "sharp";

interface CircleConfig {
  radius: number;
}

interface ImageConfig {
  pathToImage: string;
  id: string;
}

interface PlacedImage {
  buffer: Buffer;
  x: number;
  y: number;
  width: number;
  height: number;
  fullWidth: number;
  fullHeight: number;
  angle?: number;
}

interface ImagePlacementConfig {
  minImageSize: number;
  maxImageSize: number;
  useRandomImageOrientation: boolean;
  distanceBetweenEach: {
    min: number;
    max: number;
  };
  randomOrientationScalar?: number;
}

export interface CircleOptions {
  shouldDrawCircleLine?: boolean;
  imagePlacementConfig?: ImagePlacementConfig;
  shouldPullOuterImagesToEdges?: boolean;
  pullOuterImagesToEdgesScalar?: number;
  useTransparentBackground?: boolean;
}

export const circleGeneration = {
  createSpotItCircle: async (
    circle: CircleConfig,
    images: ImageConfig[],
    options: CircleOptions = {}
  ): Promise<Buffer> => {
    const { radius } = circle;
    const canvasSize = radius * 2;

    const placementConfig = options.imagePlacementConfig || {
      minImageSize: Math.floor(radius / 4),
      maxImageSize: Math.floor(radius / 3),
      useRandomImageOrientation: false,
      distanceBetweenEach: { min: 0, max: 0 }
    };

    const distanceConfig = placementConfig.distanceBetweenEach;
    const minimalDistance = (distanceConfig.min + distanceConfig.max) / 2;

    const loadedImages = await Promise.all(
      images.map(i => circleGeneration.loadImage(i.pathToImage))
    );

    const imagesWithMeta = await Promise.all(
      loadedImages.map(async (imgBuffer) => {
        const meta: Metadata = await sharp(imgBuffer).metadata();
        return {
          buffer: imgBuffer,
          originalWidth: meta.width || 100,
          originalHeight: meta.height || 100
        };
      })
    );

    const shuffledImages = imagesWithMeta.sort(() => Math.random() - 0.5);

    let placedImages: PlacedImage[] = [];
    let success = false;
    for (let attempt = 0; attempt < 5000; attempt++) {
      placedImages = [];
      success = circleGeneration.placeImagesRandomly(
        shuffledImages,
        radius,
        placementConfig,
        placedImages,
        minimalDistance
      );
      if (success && placedImages.length === images.length) {
        break;
      }
    }

    if (!success || placedImages.length !== images.length) {
      throw new Error('Not all images could be placed inside the circle.');
    }

    if (options.shouldPullOuterImagesToEdges && options.pullOuterImagesToEdgesScalar !== undefined) {
      const outermostImages = circleGeneration.selectOutermostImages(placedImages, radius);
      circleGeneration.pullOuterImagesToEdges(placedImages, outermostImages, radius, options.pullOuterImagesToEdgesScalar);
    }

    return await circleGeneration.composeCircle(canvasSize, placedImages, options);
  },

  loadImage: async (pathToImage: string): Promise<Buffer> => {
    return await sharp(pathToImage).toBuffer();
  },

  placeImagesRandomly: (
    images: { buffer: Buffer; originalWidth: number; originalHeight: number }[],
    radius: number,
    placementConfig: ImagePlacementConfig,
    placedImages: PlacedImage[],
    minimalDistance: number
  ): boolean => {
    const maxAttempts = 5000;
    const circleCenter = radius;

    for (const imgData of images) {
      let placed = false;
      const { buffer, originalWidth, originalHeight } = imgData;

      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const angle = Math.random() * 2 * Math.PI;
        const chosenSize = Math.floor(
          placementConfig.minImageSize +
          ((Math.random() + Math.random()) / 2) *
          (placementConfig.maxImageSize - placementConfig.minImageSize)
        );

        const scaleFactor = chosenSize / Math.min(originalWidth, originalHeight);
        const finalWidth = Math.round(originalWidth * scaleFactor);
        const finalHeight = Math.round(originalHeight * scaleFactor);

        const boundingBoxSize = chosenSize;

        const r = Math.random() * (radius - chosenSize);
        const x = Math.floor(circleCenter + r * Math.cos(angle) - finalWidth / 2);
        const y = Math.floor(circleCenter + r * Math.sin(angle) - finalHeight / 2);

        if (
          circleGeneration.insideCircle(x, y, finalWidth, finalHeight, circleCenter, radius, 0) &&
          !circleGeneration.overlaps(x, y, boundingBoxSize, boundingBoxSize, placedImages, minimalDistance)
        ) {
          const pImg: PlacedImage = {
            buffer: buffer,
            x,
            y,
            width: boundingBoxSize,
            height: boundingBoxSize,
            fullWidth: finalWidth,
            fullHeight: finalHeight
          };
          const scalar = placementConfig.randomOrientationScalar;
          if (typeof scalar === 'number') {
            pImg.angle = Math.random() * 180 * scalar;
          } else if (placementConfig.useRandomImageOrientation) {
            pImg.angle = Math.random() * 180;
          }
          placedImages.push(pImg);
          placed = true;
          break;
        }
      }
      if (!placed) return false;
    }
    return true;
  },

  insideCircle: (
    x: number,
    y: number,
    w: number,
    h: number,
    center: number,
    radius: number,
    angle: number = 0
  ): boolean => {
    const cx = x + w / 2;
    const cy = y + h / 2;
    const rad = angle * Math.PI / 180;
    const corners = [
      [-w / 2, -h / 2],
      [w / 2, -h / 2],
      [-w / 2, h / 2],
      [w / 2, h / 2]
    ].map(([dx, dy]) => {
      const rx = dx * Math.cos(rad) - dy * Math.sin(rad);
      const ry = dx * Math.sin(rad) + dy * Math.cos(rad);
      return [cx + rx, cy + ry];
    });

    return corners.every(([cxr, cyr]) => {
      const dx = cxr - center;
      const dy = cyr - center;
      return (dx * dx + dy * dy) <= (radius * radius);
    });
  },

  overlaps: (x: number, y: number, w: number, h: number, placed: PlacedImage[], minimalDistance: number): boolean => {
    for (const p of placed) {
      if (
        (x - minimalDistance) < (p.x + p.width) &&
        (x + w + minimalDistance) > p.x &&
        (y - minimalDistance) < (p.y + p.height) &&
        (y + h + minimalDistance) > p.y
      ) {
        return true;
      }
    }
    return false;
  },

  selectOutermostImages: (placedImages: PlacedImage[], radius: number): PlacedImage[] => {
    return placedImages.filter(p => {
      const centerX = p.x + p.fullWidth / 2;
      const centerY = p.y + p.fullHeight / 2;
      const dx = centerX - radius;
      const dy = centerY - radius;
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist > radius * 0.5;
    });
  },

  pullOuterImagesToEdges: (
    placedImages: PlacedImage[],
    outermostImages: PlacedImage[],
    radius: number,
    scalar: number
  ) => {
    const center = radius;
    for (const img of outermostImages) {
      const imgCenterX = img.x + img.fullWidth / 2;
      const imgCenterY = img.y + img.fullHeight / 2;
      const dx = imgCenterX - center;
      const dy = imgCenterY - center;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist === 0) continue;
      const dirX = dx / dist;
      const dirY = dy / dist;

      let low = 0;
      let high = radius - dist;
      for (let i = 0; i < 50; i++) {
        const mid = (low + high) / 2;
        const testX = img.x + mid * dirX;
        const testY = img.y + mid * dirY;
        const angle = img.angle || 0;
        if (circleGeneration.insideCircle(testX, testY, img.fullWidth, img.fullHeight, center, radius, angle)) {
          low = mid;
        } else {
          high = mid;
        }
      }

      const finalPush = low * scalar;
      img.x += finalPush * dirX;
      img.y += finalPush * dirY;
    }
  },

  composeCircle: async (
    size: number,
    placedImages: PlacedImage[],
    options: CircleOptions = {}
  ): Promise<Buffer> => {
    let composite = sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: {
          r: 255,
          g: 255,
          b: 255,
          alpha: options.useTransparentBackground ? 0 : 1
        }
      }
    });

    const circleSVG = `
      <svg width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${(size / 2) - 1}" 
                stroke="black" stroke-width="2" fill="none"/>
      </svg>
    `;

    const imageComposites = await Promise.all(
      placedImages.map(async (p) => {
        const img = sharp(p.buffer)
          .resize(p.fullWidth, p.fullHeight)
          .rotate(p.angle || 0, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png({ quality: 100 });
        const imgBuffer = await img.png().toBuffer();
        return { input: imgBuffer, left: Math.round(p.x), top: Math.round(p.y) };
      })
    );

    const inputShaped: OverlayOptions[] = imageComposites.map(c => ({
      input: c.input, left: c.left, top: c.top, blend: "over"
    }));

    if (options.shouldDrawCircleLine) {
      inputShaped.push({ input: Buffer.from(circleSVG), left: 0, top: 0, blend: "over" });
    }

    composite = composite.composite(inputShaped);

    return await composite.png().toBuffer();
  }
};
