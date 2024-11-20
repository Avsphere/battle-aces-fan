import { Repos } from "../Repos.js";
import { UserModel } from "../../../db/mod.js";
import { SurveyQuestionResponseModel } from "../../../db/lib/models/lib/SurveyQuestionResponseModel.js";
export declare class UsersRepo {
    private readonly repos;
    constructor(repos: Repos);
    create: () => Promise<import("@battle-aces-fan/datacontracts").User>;
    findById: (params: Parameters<UserModel["findById"]>[0]) => Promise<import("@battle-aces-fan/datacontracts").User>;
    findByUsername: (params: Parameters<UserModel["findByBattleAcesUsername"]>[0]) => Promise<(username: string) => Promise<import("@battle-aces-fan/datacontracts").User>>;
    findAll: () => Promise<import("@battle-aces-fan/datacontracts").User[]>;
    answerSurveyQuestion: (response: Parameters<SurveyQuestionResponseModel["create"]>[0]) => Promise<import("@battle-aces-fan/datacontracts").SurveyQuestionResponse>;
    findAllResponses: (userId: string) => Promise<import("@battle-aces-fan/datacontracts").SurveyQuestionResponse[]>;
    findAllUnansweredQuestions: (userId: string) => Promise<import("@battle-aces-fan/datacontracts").SurveyQuestion<{
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
    static create: (repos: Repos) => UsersRepo;
}
//# sourceMappingURL=UsersRepo.d.ts.map