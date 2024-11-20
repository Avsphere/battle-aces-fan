import { ObjectId } from "mongodb";
import assert from "node:assert";
export const SurveyQuestionTagMapCollection = (db) => {
  return db.collection("surveyQuestionTagMap");
};
export class SurveyQuestionTagMapModel {
  constructor(collection) {
    Object.defineProperty(this, "collection", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: collection,
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
        assert(doc);
        return this.toDocument(doc);
      },
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
        } else {
          const doc = {
            _id: new ObjectId().toString(),
            createdAt: Date.now(),
            lastUpdatedAt: Date.now(),
            data,
          };
          await this.collection.insertOne(doc);
        }
      },
    });
    Object.defineProperty(this, "toDocument", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: (doc) => {
        return doc.data;
      },
    });
  }
}
Object.defineProperty(SurveyQuestionTagMapModel, "create", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: (db) =>
    new SurveyQuestionTagMapModel(SurveyQuestionTagMapCollection(db)),
});
