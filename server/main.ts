import { ConfigProvider } from "../config-provider/ConfigProvider.ts";
import { BattleAcesFanApp } from "./lib/app.ts";
import chalk from "chalk";
const app = BattleAcesFanApp.create();

Deno.serve({
  port: ConfigProvider.config.PORT,
  onListen({ port, hostname }) {
    console.log(chalk.blue(`Server started at http://${hostname}:${port}!`));
  },
}, app.fetch);
