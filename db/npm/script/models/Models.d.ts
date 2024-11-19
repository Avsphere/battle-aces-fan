import { MongoClient } from "mongodb";
import { UserModel } from "./lib/UserModel.js";
export type Models = ReturnType<typeof Models>;
export declare const Models: (client: MongoClient) => {
    users: UserModel;
};
export declare const Db: {
    dispose: () => Promise<void>;
    models: (maybeConnectionString?: string) => Models;
};
//# sourceMappingURL=Models.d.ts.map