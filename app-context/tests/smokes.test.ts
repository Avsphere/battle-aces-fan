import type assert from "node:assert";
import { appContext } from "../appContext.ts";

Deno.test("smokes", async () => {
  const context = appContext;

  const users = await context.models.users.findAll();

  await context.dispose();
});
