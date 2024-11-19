import assert from "node:assert";
import { ConfigProvider } from "../ConfigProvider.ts";

Deno.test("smokes", async () => {
    assert(!!ConfigProvider.config.MONGO_CONNECTION_STRING)
    console.log(ConfigProvider.config.MONGO_CONNECTION_STRING)
});
