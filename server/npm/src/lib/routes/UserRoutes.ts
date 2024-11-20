import { Hono } from "hono";
import { appContext } from '@battle-aces-fan/app-context'
import { Repos } from "@battle-aces-fan/repos"

export const UserRoutes = (repos : Repos) => {
  const userRoutes = new Hono()
  .get("/", async (c) => {
    const users = await appContext.models.users.findAll();
    return c.json({
      users: users,
    });
  });

  return userRoutes;

}
