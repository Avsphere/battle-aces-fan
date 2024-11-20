"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRoutes = void 0;
const hono_1 = require("hono");
const TagRoutes = (repos) => {
    const unitRoutes = new hono_1.Hono()
        .get("/mood-map", async (c) => {
        return c.json({
            map: await repos.surveyQuestions.tagMap.getTagMoodMap()
        });
    });
    return unitRoutes;
};
exports.TagRoutes = TagRoutes;
