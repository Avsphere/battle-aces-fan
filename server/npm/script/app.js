"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleAcesFanRoutes = void 0;
const zod_1 = require("zod");
const zod_validator_1 = require("@hono/zod-validator");
const hono_1 = require("hono");
const AuthorSchema = zod_1.z.object({
    name: zod_1.z.string(),
    age: zod_1.z.number(),
    hairColor: zod_1.z.string()
});
const app = new hono_1.Hono()
    .get('/', (c) => {
    return c.text('Hello Hono!');
})
    .post('/author', (0, zod_validator_1.zValidator)('json', AuthorSchema), async (c) => {
    const data = AuthorSchema.parse(await c.req.json());
    // const data = c.req.valid('json')
    return c.json({
        success: true,
        message: `${data.name} is ${data.age}`,
    });
});
exports.BattleAcesFanRoutes = app;
