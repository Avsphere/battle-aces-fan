"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const hono_1 = require("hono");
const app_context_1 = require("@battle-aces-fan/app-context");
const zod_validator_1 = require("@hono/zod-validator");
const datacontracts_1 = require("@battle-aces-fan/datacontracts");
const zod_1 = require("zod");
const UserSubmitResponseSchema = zod_1.z.object({
    details: datacontracts_1.SurveyQuestionResponseDetails.omit({
        userId: true,
    }),
});
const GetOrCreateUserSchema = zod_1.z.object({
    userId: zod_1.z.string().optional(),
});
const UserRoutes = (repos) => {
    const userRoutes = new hono_1.Hono()
        .post("/find-or-create", (0, zod_validator_1.zValidator)("json", GetOrCreateUserSchema), async (c) => {
        const data = GetOrCreateUserSchema.parse(await c.req.json());
        if (!data.userId) {
            const newUser = await app_context_1.appContext.models.users.create();
            return c.json({
                user: newUser.data,
            });
        }
        const user = await app_context_1.appContext.models.users.findById(data.userId);
        return c.json({
            user: user.data,
        });
    })
        .get("/questions/:userId", (0, zod_validator_1.zValidator)("param", zod_1.z.object({ userId: zod_1.z.string() })), async (c) => {
        const userId = c.req.param().userId;
        const questions = await repos.users.findAllUnansweredQuestions(userId);
        return c.json({ questions: questions.map(q => q.data) });
    })
        .post("/responses/:userId", (0, zod_validator_1.zValidator)("json", UserSubmitResponseSchema), async (c) => {
        const userId = c.req.param().userId;
        const response = UserSubmitResponseSchema.parse(await c.req.json());
        await repos.users.answerSurveyQuestion({
            details: {
                ...response.details,
                userId,
            }
        });
        return c.json({
            success: true,
        });
    })
        .get("/:userId", (0, zod_validator_1.zValidator)("param", zod_1.z.object({ userId: zod_1.z.string() })), async (c) => {
        const userId = c.req.param().userId;
        const user = await app_context_1.appContext.models.users.findById(userId);
        return c.json({
            user: user.data,
        });
    });
    return userRoutes;
};
exports.UserRoutes = UserRoutes;
