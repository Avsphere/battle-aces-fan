"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitRoutes = void 0;
const hono_1 = require("hono");
const UnitRoutes = (repos) => {
    const unitRoutes = new hono_1.Hono()
        .get("/", async (c) => {
        const units = await repos.units.findAll();
        return c.json({
            units: units.map(u => u.data)
        });
    });
    return unitRoutes;
};
exports.UnitRoutes = UnitRoutes;
