import { Db, Models } from "@battle-aces-fan/db";

let _models: Models | undefined = undefined;
const getModels = () => {
  if (_models === undefined) {
    _models = Db.models();
  }
  return _models;
};

export type AppContext = typeof appContext;
export const appContext = {
  get models() {
    return getModels();
  },

  dispose: async () => {
    await Db.dispose();
  },
} as const;
