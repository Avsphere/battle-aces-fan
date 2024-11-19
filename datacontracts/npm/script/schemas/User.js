"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    _id: zod_1.z.string(),
    ips: zod_1.z.array(zod_1.z.string()),
    createdAt: zod_1.z.number(),
    lastUpdatedAt: zod_1.z.number(),
    battleAcesUsername: zod_1.z.string().optional(),
});
class User {
    constructor(data) {
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: data
        });
    }
    get id() {
        return this.data._id;
    }
}
exports.User = User;
Object.defineProperty(User, "parse", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (data) => new User(exports.UserSchema.parse(data))
});
