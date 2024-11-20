import { Collection, Db, ObjectId } from "mongodb";
import assert from "node:assert";
import { User, UserSchema } from "@battle-aces-fan/datacontracts";

export type UserCollection = Collection<UserSchema>;
export const UserCollection = (db: Db) => {
    return db.collection<UserSchema>("users");
};

export class UserModel {
    constructor(private readonly collection: UserCollection) {}

    static create = (db: Db) => new UserModel(UserCollection(db));

    create = async () => {
        const user: UserSchema = {
            _id: new ObjectId().toString(),
            createdAt: Date.now(),
            lastUpdatedAt: Date.now(),
            ips: [],
        };

        await this.collection.insertOne(user);
        return this.toDocument(user);
    };

    findById = async (id: string) => {
        const doc = await this.collection.findOne({ _id: id });
        assert(doc);

        return this.toDocument(doc);
    };

    findByBattleAcesUsername = async (username: string) => {
        const doc = await this.collection.findOne({
            battleAcesUsername: username,
        });
        assert(doc);
        return this.toDocument(doc);
    };

    addIpToUser = async (params: { userId: string; ip: string }) => {
        const { userId, ip } = params;
        const user = await this.collection.findOne({ _id: userId });
        assert(user);

        const ips = user.ips;
        ips.push(ip);

        const ipSet = new Set(ips);

        await this.collection.updateOne(
            { _id: userId },
            {
                $set: {
                    lastUpdatedAt: Date.now(),
                    ips: Array.from(ipSet),
                },
            },
        );
    };

    setBattleAcesUsername = async (params: {
        userId: string;
        battleAcesUsername: string;
    }) => {
        const { userId, battleAcesUsername } = params;
        await this.collection.updateOne(
            { _id: userId },
            {
                $set: {
                    lastUpdatedAt: Date.now(),
                    battleAcesUsername,
                },
            },
        );
    };

    findAll = async () => {
        const docs = await this.collection.find().toArray();
        return docs.map(this.toDocument);
    };

    toDocument = (user: UserSchema): User => {
        return User.parse(user);
    };
}
