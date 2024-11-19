import { ObjectId } from 'mongodb';
import assert from "node:assert";
import { User } from '@battle-aces-fan/datacontracts';
export const UserCollection = (db) => {
    return db.collection('users');
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
