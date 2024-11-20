import { Hono } from "hono";
import { Repos } from "@battle-aces-fan/repos";

export const TagRoutes = (repos: Repos) => {
  const unitRoutes = new Hono()
    .get(
      "/mood-map",
      async (c) => {
        return c.json({
          map : await repos.surveyQuestions.tagMap.getTagMoodMap()
        });
      },
    );
  return unitRoutes;
};
