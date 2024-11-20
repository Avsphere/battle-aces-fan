// tests/survey_question_response_model_test.ts

import assert from "node:assert";
import { Db } from "../../mod.ts";
import { assertEquals } from "../lib/testDeps.ts";

Deno.test("SurveyQuestionResponseModel tests with updated schema", async (testCtx) => {
  const models = Db.models();

  await testCtx.step("can create survey question response", async () => {
    const response = await models.surveyQuestionResponses.create({
      details: {
        questionId: "question123",
        questionKind: "unit_single",
        userId: "user123",
        smileyFaceRating: "happy",
        tags: ["Confusing"],
        skipped: false,
      },
    });
    const found = await models.surveyQuestionResponses.findById(response.id);
    console.log(found);
    assertEquals(found.id, response.id);
    assertEquals(found.data.details.userId, "user123");
    assertEquals(found.data.details.smileyFaceRating, "happy");
    assertEquals(found.data.details.tags.includes("Confusing"), true);
    assertEquals(found.data.details.skipped, false);
  });

  await testCtx.step("can find all responses by user", async () => {
    await models.surveyQuestionResponses.create({
      details: {
        questionId: "question1",
        questionKind: "unit_single",
        userId: "user456",
        smileyFaceRating: "neutral",
        tags: [],
        skipped: false,
      },
    });
    await models.surveyQuestionResponses.create({
      details: {
        questionId: "question2",
        questionKind: "unit_matchup_1v1",
        userId: "user456",
        smileyFaceRating: null,
        tags: ["Confusing"],
        skipped: true,
      },
    });
    const responses = await models.surveyQuestionResponses.findAllByUser(
      "user456",
    );
    console.log(responses);
    assert(responses.length >= 2);
    for (const r of responses) {
      assertEquals(r.data.details.userId, "user456");
    }
  });

  await testCtx.step("can find all survey question responses", async () => {
    const allResponses = await models.surveyQuestionResponses.findAll();
    console.log(allResponses);
    assert(allResponses.length >= 3);
  });

  await Db.dispose();
});
