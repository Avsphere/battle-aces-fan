import { Collection, Db, ObjectId } from "mongodb";
import assert from "node:assert";
import {
    SurveyQuestionResponse,
    SurveyQuestionResponseSchema,
} from "@battle-aces-fan/datacontracts";

export type SurveyQuestionResponseCollection = Collection<
    SurveyQuestionResponseSchema
>;
export const SurveyQuestionResponseCollection = (db: Db) => {
    return db.collection<SurveyQuestionResponseSchema>(
        "surveyQuestionResponses",
    );
};

export class SurveyQuestionResponseModel {
    constructor(
        private readonly collection: SurveyQuestionResponseCollection,
    ) {}

    static create = (db: Db) =>
        new SurveyQuestionResponseModel(SurveyQuestionResponseCollection(db));

    create = async (
        params: Pick<
            SurveyQuestionResponseSchema,
            "details"
        >,
    ) => {
        const response: SurveyQuestionResponseSchema = {
            _id: new ObjectId().toString(),
            createdAt: Date.now(),
            lastUpdatedAt: Date.now(),
            ...params,
        };

        await this.collection.insertOne(response);
        return this.toDocument(response);
    };

    findById = async (id: string) => {
        const doc = await this.collection.findOne({ _id: id });
        assert(doc);

        return this.toDocument(doc);
    };

    findAll = async () => {
        const docs = await this.collection.find().toArray();
        return docs.map(this.toDocument);
    };

    findAllByUser = async (userId: string) => {
        const key = "details.userId" as any

        const docs = await this.collection.find({ 
            [key]: userId,
        }).toArray();
        return docs.map(this.toDocument);
    };


    findByQuestionKind = async (kind: string) => {
        const key = "details.kind" as any

        const docs = await this.collection.find({ [key]: kind }).toArray();
        return docs.map(this.toDocument);
    }

    findByQuestionId = async (questionId: string) => {
        const key = "details.questionId" as any

        const docs = await this.collection.find({ [key]: questionId }).toArray();
        return docs.map(this.toDocument);
    }


    toDocument = (
        response: SurveyQuestionResponseSchema,
    ): SurveyQuestionResponse => {
        return SurveyQuestionResponse.parse(response);
    };
}
