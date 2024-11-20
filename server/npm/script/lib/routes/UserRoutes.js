"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const hono_1 = require("hono");
const app_context_1 = require("@battle-aces-fan/app-context");
const UserRoutes = (repos) => {
    const userRoutes = new hono_1.Hono()
        .get("/", async (c) => {
        const users = await app_context_1.appContext.models.users.findAll();
        return c.json({
            users: users,
        });
    });
    return userRoutes;
};
exports.UserRoutes = UserRoutes;
