// tests/user_model_test.ts

import assert from "node:assert";
import { Db } from "../../lib/models/Models.ts";
import { assertEquals } from "../lib/testDeps.ts";
import { createObjectId } from "../../lib/utils/createObjectId.ts";

Deno.test("UserModel tests", async (testCtx) => {
  const models = Db.models();

  await testCtx.step("can create user", async () => {
    const user = await models.users.create();
    const found = await models.users.findById(user.id);
    assertEquals(found.id, user.id);
  });

  await testCtx.step("can set battleAcesUsername", async () => {
    const user = await models.users.create();
    const username = createObjectId();
    await models.users.setBattleAcesUsername({
      userId: user.id,
      battleAcesUsername: username,
    });
    const found = await models.users.findByBattleAcesUsername(username);
    assertEquals(found.id, user.id);
    assertEquals(found.data.battleAcesUsername, username);
  });

  await testCtx.step("can add IP to user", async () => {
    const user = await models.users.create();
    await models.users.addIpToUser({ userId: user.id, ip: "127.0.0.1" });
    const found = await models.users.findById(user.id);
    assert(found.data.ips.includes("127.0.0.1"));
  });

  await testCtx.step("can find all users", async () => {
    const user1 = await models.users.create();
    const user2 = await models.users.create();
    const users = await models.users.findAll();
    assert(users.length >= 2);
    const userIds = users.map((u) => u.id);
    assert(userIds.includes(user1.id));
    assert(userIds.includes(user2.id));
  });

  await Db.dispose();
});
