import { z } from "zod";
import type { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { Repos } from "@battle-aces-fan/repos";
import { UserRoutes } from "./routes/UserRoutes.ts";
import { cors } from "hono/cors";
import { UnitRoutes } from "./routes/UnitRoutes.ts";
import { TagRoutes } from "./routes/TagRoutes.ts";
import { logger } from 'hono/logger'

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
  .use("*", cors({
    origin: [
      "http://localhost:5173",
      "https://battle-aces-fan.com",
      "https://testing-self-hosting-287132352216.us-west2.run.app",
      "https://testing-self-hosting-backend-287132352216.us-west2.run.app",
      "https://battle-aces-fans-1053786520533.us-west1.run.app",
      "https://battle-aces-web-1053786520533.us-west1.run.app"
    ],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length", "X-Requested-With"],
    maxAge: 600,
  }))
    .use(logger())
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
