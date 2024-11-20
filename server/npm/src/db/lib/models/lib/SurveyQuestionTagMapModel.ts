import { Collection, Db, ObjectId } from "mongodb";
import assert from "node:assert";
import {
    SurveyQuestionTagMap,
    SurveyQuestionTagMapSchema,
} from "@battle-aces-fan/datacontracts";

export type SurveyQuestionTagMapCollection = Collection<
    SurveyQuestionTagMapSchema
>;
export const SurveyQuestionTagMapCollection = (db: Db) => {
    return db.collection<SurveyQuestionTagMapSchema>("surveyQuestionTagMap");
};

export class SurveyQuestionTagMapModel {
    constructor(private readonly collection: SurveyQuestionTagMapCollection) {}

    static create = (db: Db) =>
        new SurveyQuestionTagMapModel(SurveyQuestionTagMapCollection(db));

    /**
     * Retrieves the singleton SurveyQuestionTagMap document.
     */
    getSingleton = async () => {
        const doc = await this.collection.findOne();
        assert(doc);
        return this.toDocument(doc);
    };

    /**
     * Updates the singleton SurveyQuestionTagMap document.
     * If it doesn't exist, it creates a new one.
     */
    update = async (data: SurveyQuestionTagMap) => {
        const existing = await this.collection.findOne();
        if (existing) {
            await this.collection.updateOne(
                { _id: existing._id },
                {
                    $set: {
                        data,
                        lastUpdatedAt: Date.now(),
                    },
                },
            );
        } else {
            const doc: SurveyQuestionTagMapSchema = {
                _id: new ObjectId().toString(),
                createdAt: Date.now(),
                lastUpdatedAt: Date.now(),
                data,
            };
            await this.collection.insertOne(doc);
        }
    };

    toDocument = (doc: SurveyQuestionTagMapSchema): SurveyQuestionTagMap => {
        return doc.data;
    };
}
