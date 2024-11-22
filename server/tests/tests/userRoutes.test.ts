import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { BattleAcesFanApp } from "../../lib/app.ts";
import { Hono } from "hono";
import { testClient } from "hono/testing";
import { hc } from "hono/client";
import { assertEquals } from "../lib/testDeps.ts";
import { appContext } from "@battle-aces-fan/app-context";
import { Repos, repos } from "@battle-aces-fan/repos";

Deno.test("BattleAcesFanApp Tests", async (testCtx) => {
  await testCtx.step("smokes", async () => {
    const app = new Hono();
    app.get("/", (c) => c.text("Please test me"));

    const res = await app.request("http://localhost/");
    assertEquals(res.status, 200);
  });

  await testCtx.step("get user", async () => {
    const app = BattleAcesFanApp.create();

    const user = await repos.users.create();

    const client = testClient(app);
    const foundUserResponse = await client.users["find-or-create"].$post({
      json: {
        userId: user.id,
      },
    });

    const foundUser = await foundUserResponse.json();

    assertEquals(foundUser.user._id, user.id);

    const foundUserResponse2 = await client.users[":userId"].$get({
      param: {
        userId: user.id,
      },
    });

    const foundUser2 = await foundUserResponse2.json();

    assertEquals(foundUser2.user._id, user.id);
  });

  await testCtx.step("find or create user", async () => {
    const app = BattleAcesFanApp.create();

    const currentUsers = await repos.users.findAll();
    const client = testClient(app);
    const foundUserResponse = await client.users["find-or-create"].$post({
      json: {},
    });

    const foundUser = await foundUserResponse.json();

    const isNew = currentUsers.find((u) =>
      u.id === foundUser.user._id
    ) === undefined;

    assertEquals(isNew, true);
  });

  await testCtx.step("can answer question", async () => {
    const app = BattleAcesFanApp.create();
    const client = testClient(app);

    const user = await repos.users.create();

    const questionsResponse = await client.users.questions[":userId"].$get({
      param: {
        userId: user.id,
      },
    });

    const questions = await questionsResponse.json();
    const answeredQuestion = questions.questions.find(q => q.details.tags.length > 0)!


    const r = await client.users.responses["answer-question"][":userId"].$post({
      param: {
        userId: user.id,
      },
      json: {
        details: {
          questionId: answeredQuestion._id,
          questionKind: "basic",
          skipped: false,
          smileyFaceRating: "happy",
          tags: [answeredQuestion.details.tags[0]],
        },
      },
    });
    assertEquals(r.status, 200);

    const usersResponses = await repos.users.findAllResponses(user.id);
    const foundResponse = usersResponses.find(r => r.data.details.questionId === answeredQuestion._id);

    assertEquals(foundResponse?.data.details.tags[0], answeredQuestion.details.tags[0]);

    const allResponses = await repos.surveyQuestions.responses.findAll()
    const nextQuestionsResponse = await client.users.questions[":userId"].$get({
      param: {
        userId: user.id,
      },
    });

    const nextQuestions = await nextQuestionsResponse.json();

    // expect this to be one less in length now
    assertEquals(
      nextQuestions.questions.length,
      questions.questions.length - 1,
    );
  });

  await appContext.dispose();
});
