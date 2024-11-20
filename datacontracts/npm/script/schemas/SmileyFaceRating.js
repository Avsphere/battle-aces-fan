"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmileyFaceRating = void 0;
const zod_1 = require("zod");
exports.SmileyFaceRating = zod_1.z.enum([
  "veryUnhappy",
  "unhappy",
  "neutral",
  "happy",
  "veryHappy",
]);
