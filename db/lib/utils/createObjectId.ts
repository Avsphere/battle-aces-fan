import { ObjectId } from "mongodb";

export const createObjectId = () => {
    return new ObjectId().toString();
}