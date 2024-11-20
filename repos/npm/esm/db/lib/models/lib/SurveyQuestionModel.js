import { ObjectId } from "mongodb";
import assert from "node:assert";
import { SurveyQuestion, } from "@battle-aces-fan/datacontracts";
export const SurveyQuestionCollection = (db) => {
    return db.collection("surveyQuestions");
};
export class SurveyQuestionModel {
    constructor(collection) {
        Object.defineProperty(this, "collection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: collection
        });
        /**
         * Creates a new survey question.
         * @param params - The parameters for the new survey question.
         */
        Object.defineProperty(this, "create", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (params) => {
                const question = {
                    _id: new ObjectId().toString(),
                    createdAt: Date.now(),
                    lastUpdatedAt: Date.now(),
                    isActive: params.isActive,
                    details: params.details,
                };
                await this.collection.insertOne(question);
                return this.toDocument(question);
            }
        });
        Object.defineProperty(this, "deleteById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (id) => {
                await this.collection.deleteOne({ _id: id });
            }
        });
        Object.defineProperty(this, "deleteAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => {
                await this.collection.deleteMany({});
            }
        });
        /**
         * Finds a survey question by its ID.
         * @param id - The ID of the survey question.
         */
        Object.defineProperty(this, "findById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (id) => {
                const doc = await this.collection.findOne({ _id: id });
                assert(doc, `SurveyQuestion with id ${id} not found`);
                return this.toDocument(doc);
            }
        });
        /**
         * Retrieves all survey questions.
         */
        Object.defineProperty(this, "findAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => {
                const docs = await this.collection.find().toArray();
                return docs.map(this.toDocument);
            }
        });
        /**
         * Finds all survey questions of a specific kind.
         * @param kind - The kind of survey questions to find.
         */
        Object.defineProperty(this, "findByKind", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (kind) => {
                const key = "details.kind";
                const docs = await this.collection.find({ [key]: kind }).toArray();
                return docs.map(this.toDocument);
            }
        });
        /**
         * Converts a raw database document into a SurveyQuestion instance.
         * @param question - The raw survey question document from the database.
         */
        Object.defineProperty(this, "toDocument", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (question) => {
                return SurveyQuestion.parse(question);
            }
        });
    }
}
Object.defineProperty(SurveyQuestionModel, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (db) => new SurveyQuestionModel(SurveyQuestionCollection(db))
});
