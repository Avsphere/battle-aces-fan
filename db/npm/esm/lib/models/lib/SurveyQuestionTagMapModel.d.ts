import { Collection, Db } from "mongodb";
import { SurveyQuestionTagMap, SurveyQuestionTagMapSchema } from "@battle-aces-fan/datacontracts";
export type SurveyQuestionTagMapCollection = Collection<SurveyQuestionTagMapSchema>;
export declare const SurveyQuestionTagMapCollection: (db: Db) => Collection<{
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    data: Partial<Record<"basic" | "unit_single" | "unit_matchup_1v1", Partial<Record<"veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy", string[]>>>>;
}>;
export declare class SurveyQuestionTagMapModel {
    private readonly collection;
    constructor(collection: SurveyQuestionTagMapCollection);
    static create: (db: Db) => SurveyQuestionTagMapModel;
    /**
     * Retrieves the singleton SurveyQuestionTagMap document.
     */
    getSingleton: () => Promise<Partial<Record<"basic" | "unit_single" | "unit_matchup_1v1", Partial<Record<"veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy", string[]>>>>>;
    /**
     * Updates the singleton SurveyQuestionTagMap document.
     * If it doesn't exist, it creates a new one.
     */
    update: (data: SurveyQuestionTagMap) => Promise<void>;
    toDocument: (doc: SurveyQuestionTagMapSchema) => SurveyQuestionTagMap;
}
//# sourceMappingURL=SurveyQuestionTagMapModel.d.ts.map