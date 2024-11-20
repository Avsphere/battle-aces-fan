import assert from "node:assert";
import "jsr:@std/dotenv/load";

export const ConfigProvider = {
    get config() {
        const mongoConnectionString = Deno.env.get("MONGO_CONNECTION_STRING")
        assert(mongoConnectionString, "MONGO_CONNECTION_STRING is required")

        const port = Deno.env.get("PORT")
        assert(port, "PORT is required")
        return {
            MONGO_CONNECTION_STRING: mongoConnectionString,
            PORT: parseInt(port)
        };
    }

}