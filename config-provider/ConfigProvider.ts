import assert from "node:assert";
import "jsr:@std/dotenv/load";

export const ConfigProvider = {
    get config() {
        const mongoConnectionString = Deno.env.get("MONGO_CONNECTION_STRING")
        assert(mongoConnectionString, "MONGO_CONNECTION_STRING is required")

        return {
            MONGO_CONNECTION_STRING: mongoConnectionString,
        };
    }

}