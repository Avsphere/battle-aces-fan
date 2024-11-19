import { BattleAcesFanApp } from "./lib/app.ts";

const app = BattleAcesFanApp.create()


Deno.serve(app.fetch)
