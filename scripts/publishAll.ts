import { DenoBuildTooler } from "./lib/DenoBuildTooler.ts";

const tooler = await DenoBuildTooler()

await tooler.updateAll()
await tooler.publishAll()