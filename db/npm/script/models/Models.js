"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = exports.Models = void 0;
const mongodb_1 = require("mongodb");
const UserModel_js_1 = require("./lib/UserModel.js");
const config_provider_1 = require("@battle-aces-fan/config-provider");
const Models = (client) => {
    const db = client.db();
    const users = UserModel_js_1.UserModel.create(db);
    return {
        users,
    };
};
exports.Models = Models;
let clientInstance = null;
exports.Db = {
    dispose: async () => {
        if (clientInstance) {
            await clientInstance.close();
            clientInstance = null;
        }
    },
    models: (maybeConnectionString) => {
        if (!clientInstance) {
            const connectionString = maybeConnectionString ||
                config_provider_1.ConfigProvider.config.MONGO_CONNECTION_STRING;
            clientInstance = new mongodb_1.MongoClient(connectionString);
        }
        return (0, exports.Models)(clientInstance);
    },
};
