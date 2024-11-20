import { Hono } from "hono";
import { appContext } from "@battle-aces-fan/app-context";
import type { Repos } from "@battle-aces-fan/repos";
import type { FindByIdSchema } from "./lib/routeUtils.js";
import { zValidator } from "@hono/zod-validator";
import type { UsersRepo } from "../../../repos/lib/users/UsersRepo.js";
import { SurveyQuestionResponseDetails } from "@battle-aces-fan/datacontracts";
import { z } from "zod";

const UserSubmitResponseSchema = z.object({
  details: SurveyQuestionResponseDetails.omit({
    userId: true,
  }),
});

const GetOrCreateUserSchema = z.object({
  userId: z.string().optional(),
});

export const UserRoutes = (repos: Repos) => {
  const userRoutes = new Hono()
    .post(
      "/find-or-create",
      zValidator("json", GetOrCreateUserSchema),
      async (c) => {
        const data = GetOrCreateUserSchema.parse(await c.req.json());
        if (!data.userId) {
          const newUser = await appContext.models.users.create();
          return c.json({
            user: newUser.data,
          });
        }

        const user = await appContext.models.users.findById(data.userId);
        return c.json({
          user: user.data,
        });
      },
    )
    .get(
      "/questions/:userId",
      zValidator("param", z.object({ userId: z.string() })),
      async (c) => {
        const userId = c.req.param().userId;
        const questions = await repos.users.findAllUnansweredQuestions(userId);
        return c.json({ questions: questions.map((q) => q.data) });
      },
    )
    .post(
      "/responses/:userId",
      zValidator("json", UserSubmitResponseSchema),
      async (c) => {
        const userId = c.req.param().userId;
        const response = UserSubmitResponseSchema.parse(await c.req.json());
        await repos.users.answerSurveyQuestion({
          details: {
            ...response.details,
            userId,
          },
        });

        return c.json({
          success: true,
        });
      },
    )
    .get(
      "/:userId",
      zValidator("param", z.object({ userId: z.string() })),
      async (c) => {
        const userId = c.req.param().userId;

        const user = await appContext.models.users.findById(userId);
        return c.json({
          user: user.data,
        });
      },
    );

  return userRoutes;
};
