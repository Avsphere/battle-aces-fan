"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyQuestionTag = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SurveyQuestionTag = zod_1.default.string();