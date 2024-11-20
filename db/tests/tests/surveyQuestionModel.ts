// tests/user_model_test.ts

import assert from "node:assert";
import { Db } from "../../lib/models/Models.ts";
import { assertEquals } from "../lib/testDeps.ts";
// tests/survey_question_model_test.ts

Deno.test("SurveyQuestionModel tests", async (testCtx) => {
  const models = Db.models();

  await testCtx.step("can create survey question (unit_single)", async () => {
    const question = await models.surveyQuestions.create({
      details: {
        kind: "unit_single",
        unitId: "unit123",
      },
      isActive: true,
    });
    const found = await models.surveyQuestions.findById(question.id);
    console.log(found);
    assertEquals(found.id, question.id);
    assert(found.kind === "unit_single");
    assert(found.details.kind === "unit_single");
    assertEquals(found.details.unitId, "unit123");
  });

  await testCtx.step(
    "can create survey question (unit_matchup_1v1)",
    async () => {
      const question = await models.surveyQuestions.create({
        details: {
          kind: "unit_matchup_1v1",
          firstUnitId: "unit1",
          secondUnitId: "unit2",
        },
        isActive: true,
      });
      const found = await models.surveyQuestions.findById(question.id);
      console.log(found);
      assertEquals(found.id, question.id);
      assertEquals(found.kind, "unit_matchup_1v1");
      assert(found.details.kind === "unit_matchup_1v1");
      assertEquals(found.details.firstUnitId, "unit1");
      assertEquals(found.details.secondUnitId, "unit2");
    },
  );

  await testCtx.step("can find by kind", async () => {
    // Ensure there are some questions of each kind
    await models.surveyQuestions.create({
      details: {
        kind: "unit_single",
        unitId: "unit456",
      },
      isActive: false,
    });
    const unitSingleQuestions = await models.surveyQuestions.findByKind(
      "unit_single",
    );
    console.log(unitSingleQuestions);
    assert(unitSingleQuestions.length > 0);
    for (const q of unitSingleQuestions) {
      assertEquals(q.kind, "unit_single");
    }
  });

  await testCtx.step("can find all survey questions", async () => {
    const allQuestions = await models.surveyQuestions.findAll();
    console.log(allQuestions);
    assert(allQuestions.length >= 2);
  });

  await Db.dispose();
});
