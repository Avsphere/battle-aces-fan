import { z } from "zod";
import type { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { Repos } from "@battle-aces-fan/repos";
import { UserRoutes } from "./routes/UserRoutes.ts";
import { cors } from "hono/cors";
import { UnitRoutes } from "./routes/UnitRoutes.ts";
import { TagRoutes } from "./routes/TagRoutes.ts";

const AuthorSchema = z.object({
  name: z.string(),
  age: z.number(),
  hairColor: z.string(),
});
type Author = z.infer<typeof AuthorSchema>;

export const BattleAcesFanApp = (repos: Repos) => {
  const userRoutes = UserRoutes(repos);
  const unitRoutes = UnitRoutes(repos);
  const tagRoutes = TagRoutes(repos);
  const app = new Hono()
    .use(
      "*",
      cors({
        origin: "http://localhost:5173", // Allow requests from this origin
        allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowHeaders: ["Content-Type", "Authorization"],
      }),
    )
    .route("/users", userRoutes)
    .route("/units", unitRoutes)
    .route("/tags", tagRoutes);

  return app;
};

BattleAcesFanApp.create = () => {
  const repos = Repos.create();
  return BattleAcesFanApp(repos);
};

export type BattleAcesFanApp = ReturnType<typeof BattleAcesFanApp>;
