import type { Repos } from "@battle-aces-fan/repos";
export declare const TagRoutes: (
  repos: Repos,
) => import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
  "/mood-map": {
    $get: {
      input: {};
      output: {
        map: {
          [x: string]: "neutral" | "happy" | "angry";
        };
      };
      outputFormat: "json";
      status: import("hono/utils/http-status").StatusCode;
    };
  };
}, "/">;
//# sourceMappingURL=TagRoutes.d.ts.map
