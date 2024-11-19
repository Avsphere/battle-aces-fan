import { z } from "zod";
export declare const SurveyQuestionKind: z.ZodEnum<["unit_single", "unit_matchup_1v1"]>;
export type SurveyQuestionKind = z.infer<typeof SurveyQuestionKind>;
export declare const SurveyQuestion_UnitSingleSchema: z.ZodObject<{
    kind: z.ZodLiteral<"unit_single">;
    details: z.ZodObject<{
        unitId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        unitId: string;
    }, {
        unitId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    kind: "unit_single";
    details: {
        unitId: string;
    };
}, {
    kind: "unit_single";
    details: {
        unitId: string;
    };
}>;
export type SurveyQuestion_UnitSingleSchema = z.infer<typeof SurveyQuestion_UnitSingleSchema>;
export declare const SurveyQuestion_UnitMatchupSchema: z.ZodObject<{
    kind: z.ZodLiteral<"unit_matchup_1v1">;
    details: z.ZodObject<{
        firstUnitId: z.ZodString;
        secondUnitId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstUnitId: string;
        secondUnitId: string;
    }, {
        firstUnitId: string;
        secondUnitId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    kind: "unit_matchup_1v1";
    details: {
        firstUnitId: string;
        secondUnitId: string;
    };
}, {
    kind: "unit_matchup_1v1";
    details: {
        firstUnitId: string;
        secondUnitId: string;
    };
}>;
export type SurveyQuestion_UnitMatchupSchema = z.infer<typeof SurveyQuestion_UnitMatchupSchema>;
export declare const SurveyQuestionSchema: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<z.objectUtil.extendShape<{
    _id: z.ZodString;
    createdAt: z.ZodNumber;
    lastUpdatedAt: z.ZodNumber;
}, {
    kind: z.ZodLiteral<"unit_single">;
    details: z.ZodObject<{
        unitId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        unitId: string;
    }, {
        unitId: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    kind: "unit_single";
    details: {
        unitId: string;
    };
}, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    kind: "unit_single";
    details: {
        unitId: string;
    };
}>, z.ZodObject<z.objectUtil.extendShape<{
    _id: z.ZodString;
    createdAt: z.ZodNumber;
    lastUpdatedAt: z.ZodNumber;
}, {
    kind: z.ZodLiteral<"unit_matchup_1v1">;
    details: z.ZodObject<{
        firstUnitId: z.ZodString;
        secondUnitId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstUnitId: string;
        secondUnitId: string;
    }, {
        firstUnitId: string;
        secondUnitId: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    kind: "unit_matchup_1v1";
    details: {
        firstUnitId: string;
        secondUnitId: string;
    };
}, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    kind: "unit_matchup_1v1";
    details: {
        firstUnitId: string;
        secondUnitId: string;
    };
}>]>;
export type SurveyQuestionSchema = z.infer<typeof SurveyQuestionSchema>;
export declare class SurveyQuestion<T extends SurveyQuestionSchema = SurveyQuestionSchema> {
    readonly data: T;
    constructor(data: T);
    static parse: (data: unknown) => SurveyQuestion<{
        _id: string;
        createdAt: number;
        lastUpdatedAt: number;
        kind: "unit_single";
        details: {
            unitId: string;
        };
    } | {
        _id: string;
        createdAt: number;
        lastUpdatedAt: number;
        kind: "unit_matchup_1v1";
        details: {
            firstUnitId: string;
            secondUnitId: string;
        };
    }>;
    get id(): string;
    get kind(): T["kind"];
    get details(): T["details"];
}
//# sourceMappingURL=SurveyQuestion.d.ts.map