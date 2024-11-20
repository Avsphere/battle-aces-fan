import { Collection, Db } from "mongodb";
import { SurveyQuestion, SurveyQuestionDetails, SurveyQuestionKind, SurveyQuestionSchema } from "@battle-aces-fan/datacontracts";
export type SurveyQuestionCollection = Collection<SurveyQuestionSchema>;
export declare const SurveyQuestionCollection: (db: Db) => Collection<{
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    isActive: boolean;
    details: {
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
    };
}>;
export declare class SurveyQuestionModel {
    private readonly collection;
    constructor(collection: SurveyQuestionCollection);
    static create: (db: Db) => SurveyQuestionModel;
    /**
     * Creates a new survey question.
     * @param params - The parameters for the new survey question.
     */
    create: (params: {
        details: SurveyQuestionDetails;
        isActive: boolean;
    }) => Promise<SurveyQuestion<{
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
    deleteById: (id: string) => Promise<void>;
    deleteAll: () => Promise<void>;
    /**
     * Finds a survey question by its ID.
     * @param id - The ID of the survey question.
     */
    findById: (id: string) => Promise<SurveyQuestion<{
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
    /**
     * Retrieves all survey questions.
     */
    findAll: () => Promise<SurveyQuestion<{
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
    /**
     * Finds all survey questions of a specific kind.
     * @param kind - The kind of survey questions to find.
     */
    findByKind: (kind: SurveyQuestionKind) => Promise<SurveyQuestion<{
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
    /**
     * Converts a raw database document into a SurveyQuestion instance.
     * @param question - The raw survey question document from the database.
     */
    toDocument: (question: SurveyQuestionSchema) => SurveyQuestion;
}
//# sourceMappingURL=SurveyQuestionModel.d.ts.map