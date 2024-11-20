import { ObjectId } from "mongodb";
import assert from "node:assert";
import { SurveyQuestionResponse, } from "@battle-aces-fan/datacontracts";
export const SurveyQuestionResponseCollection = (db) => {
    return db.collection("surveyQuestionResponses");
};
export class SurveyQuestionResponseModel {
    constructor(collection) {
        Object.defineProperty(this, "collection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: collection
        });
        Object.defineProperty(this, "create", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (params) => {
                const response = {
                    _id: new ObjectId().toString(),
                    createdAt: Date.now(),
                    lastUpdatedAt: Date.now(),
                    ...params,
                };
                await this.collection.insertOne(response);
                return this.toDocument(response);
            }
        });
        Object.defineProperty(this, "findById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (id) => {
                const doc = await this.collection.findOne({ _id: id });
                assert(doc);
                return this.toDocument(doc);
            }
        });
        Object.defineProperty(this, "findAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => {
                const docs = await this.collection.find().toArray();
                return docs.map(this.toDocument);
            }
        });
        Object.defineProperty(this, "findAllByUser", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (userId) => {
                const key = "details.userId";
                const docs = await this.collection.find({
                    [key]: userId,
                }).toArray();
                return docs.map(this.toDocument);
            }
        });
        Object.defineProperty(this, "findByQuestionKind", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (kind) => {
                const key = "details.kind";
                const docs = await this.collection.find({ [key]: kind }).toArray();
                return docs.map(this.toDocument);
            }
        });
        Object.defineProperty(this, "findByQuestionId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (questionId) => {
                const key = "details.questionId";
                const docs = await this.collection.find({ [key]: questionId }).toArray();
                return docs.map(this.toDocument);
            }
        });
        Object.defineProperty(this, "toDocument", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (response) => {
                return SurveyQuestionResponse.parse(response);
            }
        });
    }
}
Object.defineProperty(SurveyQuestionResponseModel, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (db) => new SurveyQuestionResponseModel(SurveyQuestionResponseCollection(db))
});
