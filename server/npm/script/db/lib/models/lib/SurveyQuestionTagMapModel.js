"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyQuestionTagMapModel = exports.SurveyQuestionTagMapCollection = void 0;
const mongodb_1 = require("mongodb");
const node_assert_1 = __importDefault(require("node:assert"));
const SurveyQuestionTagMapCollection = (db) => {
    return db.collection("surveyQuestionTagMap");
};
exports.SurveyQuestionTagMapCollection = SurveyQuestionTagMapCollection;
class SurveyQuestionTagMapModel {
    constructor(collection) {
        Object.defineProperty(this, "collection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: collection
        });
        /**
         * Retrieves the singleton SurveyQuestionTagMap document.
         */
        Object.defineProperty(this, "getSingleton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => {
                const doc = await this.collection.findOne();
                (0, node_assert_1.default)(doc);
                return this.toDocument(doc);
            }
        });
        /**
         * Updates the singleton SurveyQuestionTagMap document.
         * If it doesn't exist, it creates a new one.
         */
        Object.defineProperty(this, "update", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (data) => {
                const existing = await this.collection.findOne();
                if (existing) {
                    await this.collection.updateOne({ _id: existing._id }, {
                        $set: {
                            data,
                            lastUpdatedAt: Date.now(),
                        },
                    });
                }
                else {
                    const doc = {
                        _id: new mongodb_1.ObjectId().toString(),
                        createdAt: Date.now(),
                        lastUpdatedAt: Date.now(),
                        data,
                    };
                    await this.collection.insertOne(doc);
                }
            }
        });
        Object.defineProperty(this, "toDocument", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (doc) => {
                return doc.data;
            }
        });
    }
}
exports.SurveyQuestionTagMapModel = SurveyQuestionTagMapModel;
Object.defineProperty(SurveyQuestionTagMapModel, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (db) => new SurveyQuestionTagMapModel((0, exports.SurveyQuestionTagMapCollection)(db))
});
