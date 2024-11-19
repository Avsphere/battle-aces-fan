import { MongoClient } from "mongodb";
import { UserModel } from "./lib/UserModel.js";
import { ConfigProvider } from "@battle-aces-fan/config-provider";
export const Models = (client) => {
    const db = client.db();
    const users = UserModel.create(db);
    return {
        users,
    };
};
let clientInstance = null;
export const Db = {
    dispose: async () => {
        if (clientInstance) {
            await clientInstance.close();
            clientInstance = null;
        }
    },
    models: (maybeConnectionString) => {
        if (!clientInstance) {
            const connectionString = maybeConnectionString ||
                ConfigProvider.config.MONGO_CONNECTION_STRING;
            clientInstance = new MongoClient(connectionString);
        }
        return Models(clientInstance);
    },
};
