import { Collection, Db } from "mongodb";
import { User, UserSchema } from "@battle-aces-fan/datacontracts";
export type UserCollection = Collection<UserSchema>;
export declare const UserCollection: (db: Db) => Collection<{
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    ips: string[];
    battleAcesUsername?: string | undefined;
}>;
export declare class UserModel {
    private readonly collection;
    constructor(collection: UserCollection);
    static create: (db: Db) => UserModel;
    create: () => Promise<User>;
    findById: (id: string) => Promise<User>;
    tryFindById: (id: string) => Promise<User | null>;
    findByBattleAcesUsername: (username: string) => Promise<User>;
    addIpToUser: (params: {
        userId: string;
        ip: string;
    }) => Promise<void>;
    setBattleAcesUsername: (params: {
        userId: string;
        battleAcesUsername: string;
    }) => Promise<void>;
    findAll: () => Promise<User[]>;
    toDocument: (user: UserSchema) => User;
}
//# sourceMappingURL=UserModel.d.ts.map