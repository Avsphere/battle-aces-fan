import { Collection, Db } from "mongodb";
import { SurveyQuestionResponse, SurveyQuestionResponseSchema } from "@battle-aces-fan/datacontracts";
export type SurveyQuestionResponseCollection = Collection<SurveyQuestionResponseSchema>;
export declare const SurveyQuestionResponseCollection: (db: Db) => Collection<{
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    details: {
        tags: string[];
        questionId: string;
        questionKind: "basic" | "unit_single" | "unit_matchup_1v1";
        userId: string;
        smileyFaceRating: "veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy" | null;
        skipped: boolean;
    };
}>;
export declare class SurveyQuestionResponseModel {
    private readonly collection;
    constructor(collection: SurveyQuestionResponseCollection);
    static create: (db: Db) => SurveyQuestionResponseModel;
    create: (params: Pick<SurveyQuestionResponseSchema, "details">) => Promise<SurveyQuestionResponse>;
    findById: (id: string) => Promise<SurveyQuestionResponse>;
    findAll: () => Promise<SurveyQuestionResponse[]>;
    findAllByUser: (userId: string) => Promise<SurveyQuestionResponse[]>;
    findByQuestionKind: (kind: string) => Promise<SurveyQuestionResponse[]>;
    findByQuestionId: (questionId: string) => Promise<SurveyQuestionResponse[]>;
    toDocument: (response: SurveyQuestionResponseSchema) => SurveyQuestionResponse;
}
//# sourceMappingURL=SurveyQuestionResponseModel.d.ts.map