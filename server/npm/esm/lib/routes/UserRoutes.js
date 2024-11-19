import { Hono } from "hono";
import { appContext } from '@battle-aces-fan/app-context';
export const UserRoutes = (repos) => {
    const userRoutes = new Hono()
        .get("/", async (c) => {
        const users = await appContext.models.users.findAll();
        return c.json({
            users: users,
        });
    });
    return userRoutes;
};
