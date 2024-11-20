import { type Collection, type Db, ObjectId } from "mongodb";
import assert from "node:assert";
import {
  SurveyQuestion,
  type SurveyQuestionDetails,
  type SurveyQuestionKind,
  type SurveyQuestionSchema,
} from "@battle-aces-fan/datacontracts";

export type SurveyQuestionCollection = Collection<SurveyQuestionSchema>;
export const SurveyQuestionCollection = (db: Db) => {
  return db.collection<SurveyQuestionSchema>("surveyQuestions");
};

export class SurveyQuestionModel {
  constructor(private readonly collection: SurveyQuestionCollection) {}

  static create = (db: Db) =>
    new SurveyQuestionModel(SurveyQuestionCollection(db));

  /**
   * Creates a new survey question.
   * @param params - The parameters for the new survey question.
   */
  create = async (params: {
    details: SurveyQuestionDetails;
    isActive: boolean;
  }) => {
    const question: SurveyQuestionSchema = {
      _id: new ObjectId().toString(),
      createdAt: Date.now(),
      lastUpdatedAt: Date.now(),
      isActive: params.isActive,
      details: params.details,
    };

    await this.collection.insertOne(question);
    return this.toDocument(question);
  };

  deleteById = async (id: string) => {
    await this.collection.deleteOne({ _id: id });
  };

  deleteAll = async () => {
    await this.collection.deleteMany({});
  };

  /**
   * Finds a survey question by its ID.
   * @param id - The ID of the survey question.
   */
  findById = async (id: string) => {
    const doc = await this.collection.findOne({ _id: id });
    assert(doc, `SurveyQuestion with id ${id} not found`);
    return this.toDocument(doc);
  };

  /**
   * Retrieves all survey questions.
   */
  findAll = async () => {
    const docs = await this.collection.find().toArray();
    return docs.map(this.toDocument);
  };

  /**
   * Finds all survey questions of a specific kind.
   * @param kind - The kind of survey questions to find.
   */
  findByKind = async (kind: SurveyQuestionKind) => {
    const key = "details.kind" as unknown as keyof SurveyQuestionSchema;
    const docs = await this.collection.find({ [key]: kind }).toArray();
    return docs.map(this.toDocument);
  };

  /**
   * Converts a raw database document into a SurveyQuestion instance.
   * @param question - The raw survey question document from the database.
   */
  toDocument = (question: SurveyQuestionSchema): SurveyQuestion => {
    return SurveyQuestion.parse(question);
  };
}
