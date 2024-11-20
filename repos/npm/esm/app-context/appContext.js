import { Db } from "@battle-aces-fan/db";
let _models = undefined;
const getModels = () => {
  if (_models === undefined) {
    _models = Db.models();
  }
  return _models;
};
export const appContext = {
  get models() {
    return getModels();
  },
  dispose: async () => {
    await Db.dispose();
  },
};
