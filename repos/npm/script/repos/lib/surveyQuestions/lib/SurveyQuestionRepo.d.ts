import { Repos } from "../../Repos.js";
import { SurveyQuestionModel } from "../../../../db/lib/models/lib/SurveyQuestionModel.js";
export type SurveyQuestionRepo = ReturnType<typeof SurveyQuestionRepo>;
export declare const SurveyQuestionRepo: (repos: Repos) => {
    createMany: (params: Parameters<SurveyQuestionModel["create"]>[0][]) => Promise<import("@battle-aces-fan/datacontracts").SurveyQuestion<{
        kind: "unit_single";
        unitSlug: string;
        tags: string[];
    } | {
        kind: "unit_matchup_1v1";
        tags: string[];
        firstUnitSlug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
        secondUnitSlug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
    } | {
        kind: "basic";
        tags: string[];
        subKind: string;
        text: string;
        relevantUnitSlugs?: ("bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret")[] | undefined;
        oppositeUnitSlugs?: ("bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret")[] | undefined;
    }>[]>;
    create: (params: Parameters<SurveyQuestionModel["create"]>[0]) => Promise<import("@battle-aces-fan/datacontracts").SurveyQuestion<{
        kind: "unit_single";
        unitSlug: string;
        tags: string[];
    } | {
        kind: "unit_matchup_1v1";
        tags: string[];
        firstUnitSlug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
        secondUnitSlug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
    } | {
        kind: "basic";
        tags: string[];
        subKind: string;
        text: string;
        relevantUnitSlugs?: ("bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret")[] | undefined;
        oppositeUnitSlugs?: ("bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret")[] | undefined;
    }>>;
    deleteAll: () => Promise<void>;
    findById: (params: Parameters<SurveyQuestionModel["findById"]>[0]) => Promise<import("@battle-aces-fan/datacontracts").SurveyQuestion<{
        kind: "unit_single";
        unitSlug: string;
        tags: string[];
    } | {
        kind: "unit_matchup_1v1";
        tags: string[];
        firstUnitSlug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
        secondUnitSlug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
    } | {
        kind: "basic";
        tags: string[];
        subKind: string;
        text: string;
        relevantUnitSlugs?: ("bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret")[] | undefined;
        oppositeUnitSlugs?: ("bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret")[] | undefined;
    }>>;
    findByKind: (params: Parameters<SurveyQuestionModel["findByKind"]>[0]) => Promise<import("@battle-aces-fan/datacontracts").SurveyQuestion<{
        kind: "unit_single";
        unitSlug: string;
        tags: string[];
    } | {
        kind: "unit_matchup_1v1";
        tags: string[];
        firstUnitSlug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
        secondUnitSlug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
    } | {
        kind: "basic";
        tags: string[];
        subKind: string;
        text: string;
        relevantUnitSlugs?: ("bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret")[] | undefined;
        oppositeUnitSlugs?: ("bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret")[] | undefined;
    }>[]>;
    findAll: () => Promise<import("@battle-aces-fan/datacontracts").SurveyQuestion<{
        kind: "unit_single";
        unitSlug: string;
        tags: string[];
    } | {
        kind: "unit_matchup_1v1";
        tags: string[];
        firstUnitSlug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
        secondUnitSlug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
    } | {
        kind: "basic";
        tags: string[];
        subKind: string;
        text: string;
        relevantUnitSlugs?: ("bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret")[] | undefined;
        oppositeUnitSlugs?: ("bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret")[] | undefined;
    }>[]>;
};
//# sourceMappingURL=SurveyQuestionRepo.d.ts.map