import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { BattleAcesFanApp } from "../../lib/app.ts";
import { Hono } from "hono";
import { testClient } from "hono/testing";
import { hc } from "hono/client";
import { assertEquals } from "../lib/testDeps.ts";
import { appContext } from "@battle-aces-fan/app-context";
import { Repos, repos } from "@battle-aces-fan/repos";

Deno.test("smokes", async () => {
  const app = new Hono();
  app.get("/", (c) => c.text("Please test me"));

  const res = await app.request("http://localhost/");
  assertEquals(res.status, 200);
});

Deno.test("get user", async () => {
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

  await appContext.dispose();
});

Deno.test("find or create user", async () => {
  const app = BattleAcesFanApp.create();

  const currentUsers = await repos.users.findAll();
  const client = testClient(app);
  const foundUserResponse = await client.users["find-or-create"].$post({
    json: {},
  });

  const foundUser = await foundUserResponse.json();

  const isNew =
    currentUsers.find((u) => u.id === foundUser.user._id) === undefined;

  assertEquals(isNew, true);

  await appContext.dispose();
});

Deno.test("can answer question", async () => {
  const app = BattleAcesFanApp.create();
  const client = testClient(app);

  const user = await repos.users.create();

  const questionsResponse = await client.users.questions[":userId"].$get({
    param: {
      userId: user.id,
    },
  });

  const questions = await questionsResponse.json();
  const answeredQuestion = questions.questions[0];

  await client.users.responses[":userId"]
  .$post({
    param : {
      userId: user.id
    },
    json : {
      details : {
        questionId : answeredQuestion._id,
        questionKind : 'basic',
        skipped : false,
        smileyFaceRating : 'happy',
        tags : [answeredQuestion.details.tags[0]]
      }
    }
  })

  const usersResponses = await repos.users.findAllResponses(user.id);


  const nextQuestionsResponse = await client.users.questions[":userId"].$get({
    param: {
      userId: user.id,
    },
  });

  const nextQuestions = await nextQuestionsResponse.json();

  // expect this to be one less in length now
  assertEquals(nextQuestions.questions.length, questions.questions.length - 1);

  console.log('usersResponses', usersResponses)

  await appContext.dispose();
});

Deno.test("Hello World", async () => {
  const app = BattleAcesFanApp.create();
  // const grr = hc<AppType>('http://localhost/')

  const client = testClient(app);

  // this throws due to connection refused
  const t = await client.author.$post({
    json: {
      age: 25,
      name: "John Doe",
      hairColor: "brown",
    },
  });

  console.log("t", t);

  // this works
  // const postRes = await app.request('http://localhost/author', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //         name: 'John Doe',
  //         age: 25
  //     })
  // })

  // // console.log('res', await getRes.text())
  // console.log('res', await postRes.json())
});
