"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleAcesFanApp = void 0;
const zod_1 = require("zod");
const zod_validator_1 = require("@hono/zod-validator");
const hono_1 = require("hono");
const repos_1 = require("@battle-aces-fan/repos");
const UserRoutes_js_1 = require("./routes/UserRoutes.js");
const AuthorSchema = zod_1.z.object({
    name: zod_1.z.string(),
    age: zod_1.z.number(),
    hairColor: zod_1.z.string(),
});
const BattleAcesFanApp = (repos) => {
    const userRoutes = (0, UserRoutes_js_1.UserRoutes)(repos);
    const app = new hono_1.Hono()
        .get("/", (c) => {
        return c.text("Hello Hono!");
    })
        .post("/author", (0, zod_validator_1.zValidator)("json", AuthorSchema), async (c) => {
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
exports.BattleAcesFanApp = BattleAcesFanApp;
exports.BattleAcesFanApp.create = () => {
    const repos = repos_1.Repos.create();
    return (0, exports.BattleAcesFanApp)(repos);
};
// export const BattleAcesFanRoutes = app;
