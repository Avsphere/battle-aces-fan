import { Hono } from "hono";
import { Repos } from "@battle-aces-fan/repos";

export const UnitRoutes = (repos: Repos) => {
  const unitRoutes = new Hono()
    .get(
      "/",
      async (c) => {
        const units = await repos.units.findAll();
        return c.json({
          units : units.map( u => u.data)
        });
      },
    );
  return unitRoutes;
};
