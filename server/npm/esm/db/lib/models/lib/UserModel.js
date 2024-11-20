import { ObjectId } from "mongodb";
import assert from "node:assert";
import { User } from "@battle-aces-fan/datacontracts";
export const UserCollection = (db) => {
    return db.collection("users");
};
export class UserModel {
    constructor(collection) {
        Object.defineProperty(this, "collection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: collection
        });
        Object.defineProperty(this, "create", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => {
                const user = {
                    _id: new ObjectId().toString(),
                    createdAt: Date.now(),
                    lastUpdatedAt: Date.now(),
                    ips: [],
                };
                await this.collection.insertOne(user);
                return this.toDocument(user);
            }
        });
        Object.defineProperty(this, "findById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (id) => {
                const doc = await this.collection.findOne({ _id: id });
                assert(doc);
                return this.toDocument(doc);
            }
        });
        Object.defineProperty(this, "tryFindById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (id) => {
                const doc = await this.collection.findOne({ _id: id });
                if (!doc) {
                    return null;
                }
                return this.toDocument(doc);
            }
        });
        Object.defineProperty(this, "findByBattleAcesUsername", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (username) => {
                const doc = await this.collection.findOne({
                    battleAcesUsername: username,
                });
                assert(doc);
                return this.toDocument(doc);
            }
        });
        Object.defineProperty(this, "addIpToUser", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (params) => {
                const { userId, ip } = params;
                const user = await this.collection.findOne({ _id: userId });
                assert(user);
                const ips = user.ips;
                ips.push(ip);
                const ipSet = new Set(ips);
                await this.collection.updateOne({ _id: userId }, {
                    $set: {
                        lastUpdatedAt: Date.now(),
                        ips: Array.from(ipSet),
                    },
                });
            }
        });
        Object.defineProperty(this, "setBattleAcesUsername", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (params) => {
                const { userId, battleAcesUsername } = params;
                await this.collection.updateOne({ _id: userId }, {
                    $set: {
                        lastUpdatedAt: Date.now(),
                        battleAcesUsername,
                    },
                });
            }
        });
        Object.defineProperty(this, "findAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => {
                const docs = await this.collection.find().toArray();
                return docs.map(this.toDocument);
            }
        });
        Object.defineProperty(this, "toDocument", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (user) => {
                return User.parse(user);
            }
        });
    }
}
Object.defineProperty(UserModel, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (db) => new UserModel(UserCollection(db))
});
