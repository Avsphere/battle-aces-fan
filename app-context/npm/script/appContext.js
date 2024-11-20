"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContext = void 0;
const db_1 = require("@battle-aces-fan/db");
let _models = undefined;
const getModels = () => {
  if (_models === undefined) {
    _models = db_1.Db.models();
  }
  return _models;
};
exports.appContext = {
  get models() {
    return getModels();
  },
  dispose: async () => {
    await db_1.Db.dispose();
  },
};
