"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleAcesFanApp = void 0;
const zod_1 = require("zod");
const hono_1 = require("hono");
const repos_1 = require("@battle-aces-fan/repos");
const UserRoutes_js_1 = require("./routes/UserRoutes.js");
const cors_1 = require("hono/cors");
const UnitRoutes_js_1 = require("./routes/UnitRoutes.js");
const TagRoutes_js_1 = require("./routes/TagRoutes.js");
const AuthorSchema = zod_1.z.object({
  name: zod_1.z.string(),
  age: zod_1.z.number(),
  hairColor: zod_1.z.string(),
});
const BattleAcesFanApp = (repos) => {
  const userRoutes = (0, UserRoutes_js_1.UserRoutes)(repos);
  const unitRoutes = (0, UnitRoutes_js_1.UnitRoutes)(repos);
  const tagRoutes = (0, TagRoutes_js_1.TagRoutes)(repos);
  const app = new hono_1.Hono()
    .use(
      "*",
      (0, cors_1.cors)({
        origin: "http://localhost:3000", // Allow requests from this origin
        allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowHeaders: ["Content-Type", "Authorization"],
      }),
    )
    .route("/users", userRoutes)
    .route("/units", unitRoutes)
    .route("/tags", tagRoutes);
  return app;
};
exports.BattleAcesFanApp = BattleAcesFanApp;
exports.BattleAcesFanApp.create = () => {
  const repos = repos_1.Repos.create();
  return (0, exports.BattleAcesFanApp)(repos);
};
