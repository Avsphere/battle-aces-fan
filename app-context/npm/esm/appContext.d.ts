import type { Models } from "@battle-aces-fan/db";
export type AppContext = {
  readonly models: Models;
  readonly dispose: () => Promise<void>;
};
export declare const appContext: AppContext;
//# sourceMappingURL=appContext.d.ts.map
