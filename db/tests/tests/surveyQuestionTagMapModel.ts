// tests/survey_question_tag_map_model_test.ts

import { SurveyQuestionTagKind } from "@battle-aces-fan/datacontracts";
import { Db } from "../../lib/models/Models.ts";
import { assertEquals } from "../lib/testDeps.ts";

Deno.test("SurveyQuestionTagMapModel tests", async (testCtx) => {
    const models = Db.models();

    await testCtx.step(
        "can update and get singleton SurveyQuestionTagMap",
        async () => {
            await models.surveyQuestionTagMap.update({
                unit_single: {
                    happy: ["Fun", "Feels great"],
                },
            });
            const data = await models.surveyQuestionTagMap.getSingleton();
            assertEquals(data.unit_single?.veryHappy, undefined);
            assertEquals(
                data.unit_single?.happy?.includes("Feels great"),
                true,
            );
        },
    );

    await testCtx.step(
        "can update singleton SurveyQuestionTagMap again",
        async () => {
            await models.surveyQuestionTagMap.update({
                unit_single: {
                    happy: ["Frustrating"],
                    veryHappy: ["Have not used the unit"],
                },
            });
            const data = await models.surveyQuestionTagMap.getSingleton();
            assertEquals(
                data.unit_single?.veryHappy?.includes("Have not used the unit"),
                true,
            );
            // Previous data should be replaced
            assertEquals(data.unit_single?.happy?.includes("Fun"), false);
        },
    );

    await Db.dispose();
});
