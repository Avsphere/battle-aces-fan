import * as dntShim from "./_dnt.shims.js";
import assert from "node:assert";
import "./deps/jsr.io/@std/dotenv/0.225.2/load.js";
export const ConfigProvider = {
  get config() {
    const mongoConnectionString = dntShim.Deno.env.get(
      "MONGO_CONNECTION_STRING",
    );
    assert(mongoConnectionString, "MONGO_CONNECTION_STRING is required");
    const port = dntShim.Deno.env.get("PORT");
    assert(port, "PORT is required");
    return {
      MONGO_CONNECTION_STRING: mongoConnectionString,
      PORT: parseInt(port),
    };
  },
};
