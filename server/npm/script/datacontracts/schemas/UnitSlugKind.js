"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitSlugKind = void 0;
const zod_1 = __importDefault(require("zod"));
exports.UnitSlugKind = zod_1.default.enum(["bulwark", "ballista", "crab", "butterfly", "katbus", "kingcrab", "hunter", "heavyballista", "dragonfly", "recall", "bomber", "recallhunter", "kraken", "locust", "crusader", "falcon", "scorpion", "valkyrie", "airship", "beetle", "sniper", "recallshocker", "shocker", "gargantua", "predator", "advancedblink", "advancedrecall", "advanceddestroyer", "blinkhunter", "assaultbot", "artillery", "swiftshocker", "mammoth", "gunbot", "mortar", "blink", "advancedbot", "stinger", "behemoth", "missilebot", "heavyhunter", "destroyer", "hornet", "turret", "crossbow", "knight", "raider", "wasp", "flakturret"]);
