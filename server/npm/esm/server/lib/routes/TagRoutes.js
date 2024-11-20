import { Hono } from "hono";
export const TagRoutes = (repos) => {
    const unitRoutes = new Hono()
        .get("/mood-map", async (c) => {
        return c.json({
            map: await repos.surveyQuestions.tagMap.getTagMoodMap()
        });
    });
    return unitRoutes;
};
