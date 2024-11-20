"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserCollection = void 0;
const mongodb_1 = require("mongodb");
const node_assert_1 = __importDefault(require("node:assert"));
const datacontracts_1 = require("@battle-aces-fan/datacontracts");
const UserCollection = (db) => {
  return db.collection("users");
};
exports.UserCollection = UserCollection;
class UserModel {
  constructor(collection) {
    Object.defineProperty(this, "collection", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: collection,
    });
    Object.defineProperty(this, "create", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: async () => {
        const user = {
          _id: new mongodb_1.ObjectId().toString(),
          createdAt: Date.now(),
          lastUpdatedAt: Date.now(),
          ips: [],
        };
        await this.collection.insertOne(user);
        return this.toDocument(user);
      },
    });
    Object.defineProperty(this, "findById", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: async (id) => {
        const doc = await this.collection.findOne({ _id: id });
        (0, node_assert_1.default)(doc);
        return this.toDocument(doc);
      },
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
      },
    });
    Object.defineProperty(this, "findByBattleAcesUsername", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: async (username) => {
        const doc = await this.collection.findOne({
          battleAcesUsername: username,
        });
        (0, node_assert_1.default)(doc);
        return this.toDocument(doc);
      },
    });
    Object.defineProperty(this, "addIpToUser", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: async (params) => {
        const { userId, ip } = params;
        const user = await this.collection.findOne({ _id: userId });
        (0, node_assert_1.default)(user);
        const ips = user.ips;
        ips.push(ip);
        const ipSet = new Set(ips);
        await this.collection.updateOne({ _id: userId }, {
          $set: {
            lastUpdatedAt: Date.now(),
            ips: Array.from(ipSet),
          },
        });
      },
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
      },
    });
    Object.defineProperty(this, "findAll", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: async () => {
        const docs = await this.collection.find().toArray();
        return docs.map(this.toDocument);
      },
    });
    Object.defineProperty(this, "toDocument", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: (user) => {
        return datacontracts_1.User.parse(user);
      },
    });
  }
}
exports.UserModel = UserModel;
Object.defineProperty(UserModel, "create", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: (db) => new UserModel((0, exports.UserCollection)(db)),
});
