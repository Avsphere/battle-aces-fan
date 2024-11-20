"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatedTagMoodMap = exports.TagMoodMap = exports.TagMoodKind = void 0;
const zod_1 = require("zod");
exports.TagMoodKind = zod_1.z.enum([
    'happy',
    'neutral',
    'angry'
]);
exports.TagMoodMap = zod_1.z.record(zod_1.z.string(), exports.TagMoodKind);
exports.generatedTagMoodMap = {
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
    "they hurt my soul": "angry"
};
