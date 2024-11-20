import assert from "node:assert";
import { ConfigProvider } from "../ConfigProvider.ts";

Deno.test("smokes", () => {
  assert(!!ConfigProvider.config.MONGO_CONNECTION_STRING);
  console.log(ConfigProvider.config.MONGO_CONNECTION_STRING);
});
