import { MongoClient } from "mongodb";
import assert from "node:assert";
import { UserModel } from "./lib/UserModel.ts";
import { ConfigProvider } from "@battle-aces-fan/config-provider";

export type Models = ReturnType<typeof Models>;

export const Models = (client: MongoClient) => {
    const db = client.db();

    const users = UserModel.create(db);

    return {
        users,
    };
};

let clientInstance: MongoClient | null = null;

export const Db = {
    dispose: async () => {
        if (clientInstance) {
            await clientInstance.close();
            clientInstance = null;
        }
    },
    models: (maybeConnectionString?: string): Models => {
        if (!clientInstance) {
            const connectionString = maybeConnectionString ||
                ConfigProvider.config.MONGO_CONNECTION_STRING;
            clientInstance = new MongoClient(connectionString);
        }

        return Models(clientInstance);
    },
};
