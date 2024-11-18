import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { Hono } from "hono";
const AuthorSchema = z.object({
    name: z.string(),
    age: z.number(),
    hairColor: z.string()
});
const app = new Hono()
    .get('/', (c) => {
    return c.text('Hello Hono!');
})
    .post('/author', zValidator('json', AuthorSchema), async (c) => {
    const data = AuthorSchema.parse(await c.req.json());
    // const data = c.req.valid('json')
    return c.json({
        success: true,
        message: `${data.name} is ${data.age}`,
    });
});
export const BattleAcesFanRoutes = app;
