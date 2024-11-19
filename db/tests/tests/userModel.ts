import { Db } from "../../lib/models/Models.ts";



Deno.test("can create user", async() => {
  const models = Db.models();
  const user = await models.users.create();

  const found = await models.users.findById(user.id);
  console.log(found)

  await Db.dispose()
});
