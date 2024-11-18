import * as dntShim from "./_dnt.test_shims.js";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { BattleAcesFanRoutes } from "./app.js";
import { Hono } from "hono";
import { assertEquals } from "./testDeps.js";
import { testClient } from 'hono/testing'
import { hc } from "hono/client";

dntShim.Deno.test('smokes', async () => {
    const app = new Hono()
    app.get('/', (c) => c.text('Please test me'))
  
    const res = await app.request('http://localhost/')
    assertEquals(res.status, 200)
  })

dntShim.Deno.test('Hello World', async () => {
    const app = BattleAcesFanRoutes
    // const grr = hc<AppType>('http://localhost/')

  const client = testClient(app);

    // this throws due to connection refused
    const t = await client.author.$post({
        json : {
            age: 25,
            name: 'John Doe',
            hairColor: 'brown'
        }
    })

    console.log('t', t)

    // this works
    // const postRes = await app.request('http://localhost/author', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: 'John Doe',
    //         age: 25
    //     })
    // })



    // // console.log('res', await getRes.text())
    // console.log('res', await postRes.json())
})