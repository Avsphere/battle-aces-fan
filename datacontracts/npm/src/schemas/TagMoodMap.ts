import { z } from "zod";

export const TagMoodKind = z.enum([
  "happy",
  "neutral",
  "angry",
]);
export type TagMoodKind = z.infer<typeof TagMoodKind>;

export const TagMoodMap = z.record(z.string(), TagMoodKind);
export type TagMoodMap = z.infer<typeof TagMoodMap>;

export const generatedTagMoodMap: TagMoodMap = {
  "glitchy movement": "angry",
  "fun to play against": "happy",
  "annoying to play against": "angry",
  "overpowered": "angry",
  "underpowered": "angry",
  "feels great to control": "happy",
  "looks bad": "angry",
  "useless": "angry",
  "overused": "angry",
  "low skill expression": "angry",
  "high skill expression": "happy",
  "fun": "happy",
  "brutally snowballs": "angry",
  "boring": "angry",
  "frustrating": "angry",
  "most of the time": "neutral",
  "rarely": "neutral",
  "meh": "neutral",
  "hurts my soul": "angry",
  "feels inconsistent": "angry",
  "creates a fun dynamic": "happy",
  "not in collision situations": "neutral",
  "only in the early game": "neutral",
  "they make positioning more interesting": "happy",
  "they hurt my soul": "angry",
};
