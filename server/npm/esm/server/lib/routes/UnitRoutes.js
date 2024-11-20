import { Hono } from "hono";
export const UnitRoutes = (repos) => {
    const unitRoutes = new Hono()
        .get("/", async (c) => {
        const units = await repos.units.findAll();
        return c.json({
            units: units.map(u => u.data)
        });
    });
    return unitRoutes;
};
