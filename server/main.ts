import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { Hono } from "hono";
import { cors } from 'hono/cors';

const app = new Hono()

app.use('*', cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/', (c) => {
  console.log('making index request', c)
  return c.text('Hello Hono!')
})


const AuthorSchema = z.object({
  name: z.string(),
  age: z.number(),
  hairColor : z.string()
})
type Author = z.infer<typeof AuthorSchema>

app.post('/author', zValidator('json', AuthorSchema), async(c) => {
  const data = c.req.valid('json')
  console.log('making request to author', data)
  return c.json({
    success: true,
    message: `${data.name} is ${data.age}`,
  })
})



Deno.serve(app.fetch)
