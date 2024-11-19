import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { Repos } from "@battle-aces-fan/repos";
import { UserRoutes } from "./routes/UserRoutes.js";

const AuthorSchema = z.object({
  name: z.string(),
  age: z.number(),
  hairColor: z.string(),
});
type Author = z.infer<typeof AuthorSchema>;

export const BattleAcesFanApp = (repos: Repos) => {
  const userRoutes = UserRoutes(repos);

  const app = new Hono()
    .get("/", (c) => {
      return c.text("Hello Hono!");
    })
    .post("/author", zValidator("json", AuthorSchema), async (c) => {
      const data = AuthorSchema.parse(await c.req.json());
      // const data = c.req.valid('json')

      return c.json({
        success: true,
        message: `${data.name} is ${data.age}`,
      });
    })
    .route("/users", userRoutes);

  return app;
};

BattleAcesFanApp.create = () => {
  const repos = Repos.create();
  return BattleAcesFanApp(repos);
};

export type BattleAcesFanApp = ReturnType<typeof BattleAcesFanApp>;
// export const BattleAcesFanRoutes = app;