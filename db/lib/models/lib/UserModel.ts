import { Collection, Db, ObjectId } from 'mongodb'
import assert from "node:assert";
import { User, UserSchema } from '@battle-aces-fan/datacontracts'


export type UserCollection = Collection<UserSchema>
export const UserCollection = (db : Db) => {
    return db.collection<UserSchema>('users')
}

export class UserModel {
    constructor(private readonly collection : UserCollection){
    }

    static create = (db : Db) => new UserModel(UserCollection(db))

    create = async () => {
        const user : UserSchema = {
            _id : new ObjectId().toString(),
            createdAt : Date.now(),
            lastUpdatedAt : Date.now(),
            ips : [],
        }

        await this.collection.insertOne(user)
        return this.toDocument(user)
    }


    findById = async (id : string) => {
        const doc = await this.collection.findOne({_id : id})
        assert(doc)

        return this.toDocument(doc)
    }

    findAll = async () => {
        const docs = await this.collection.find().toArray()
        return docs.map(this.toDocument)
    }

    toDocument = (user : UserSchema) : User => {
        return User.parse(user)
    }


}