import { Db, type Models } from "@battle-aces-fan/db";

let _models: Models | undefined = undefined;
const getModels = () => {
  if (_models === undefined) {
    _models = Db.models();
  }
  return _models;
};

export type AppContext = {
  readonly models: Models;
  readonly dispose: () => Promise<void>;
};
export const appContext: AppContext = {
  get models() {
    return getModels();
  },

  dispose: async () => {
    await Db.dispose();
  },
} as const;
