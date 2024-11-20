import type { Repos } from "@battle-aces-fan/repos";
export declare const UserRoutes: (
  repos: Repos,
) => import("hono/hono-base").HonoBase<
  import("hono/types").BlankEnv,
  {
    "/find-or-create": {
      $post: {
        input: {
          json: {
            userId?: string | undefined;
          };
        };
        output: {
          user: {
            _id: string;
            createdAt: number;
            lastUpdatedAt: number;
            ips: string[];
            battleAcesUsername?: string | undefined;
          };
        };
        outputFormat: "json";
        status: import("hono/utils/http-status.js").StatusCode;
      };
    };
  } & {
    "/questions/:userId": {
      $get: {
        input: {
          param: {
            userId: string;
          };
        };
        output: {
          questions: {
            _id: string;
            createdAt: number;
            lastUpdatedAt: number;
            isActive: boolean;
            details: {
              kind: "unit_single";
              unitSlug: string;
              tags: string[];
            } | {
              kind: "unit_matchup_1v1";
              tags: string[];
              firstUnitSlug:
                | "bulwark"
                | "ballista"
                | "crab"
                | "butterfly"
                | "katbus"
                | "kingcrab"
                | "hunter"
                | "heavyballista"
                | "dragonfly"
                | "recall"
                | "bomber"
                | "recallhunter"
                | "kraken"
                | "locust"
                | "crusader"
                | "falcon"
                | "scorpion"
                | "valkyrie"
                | "airship"
                | "beetle"
                | "sniper"
                | "recallshocker"
                | "shocker"
                | "gargantua"
                | "predator"
                | "advancedblink"
                | "advancedrecall"
                | "advanceddestroyer"
                | "blinkhunter"
                | "assaultbot"
                | "artillery"
                | "swiftshocker"
                | "mammoth"
                | "gunbot"
                | "mortar"
                | "blink"
                | "advancedbot"
                | "stinger"
                | "behemoth"
                | "missilebot"
                | "heavyhunter"
                | "destroyer"
                | "hornet"
                | "turret"
                | "crossbow"
                | "knight"
                | "raider"
                | "wasp"
                | "flakturret";
              secondUnitSlug:
                | "bulwark"
                | "ballista"
                | "crab"
                | "butterfly"
                | "katbus"
                | "kingcrab"
                | "hunter"
                | "heavyballista"
                | "dragonfly"
                | "recall"
                | "bomber"
                | "recallhunter"
                | "kraken"
                | "locust"
                | "crusader"
                | "falcon"
                | "scorpion"
                | "valkyrie"
                | "airship"
                | "beetle"
                | "sniper"
                | "recallshocker"
                | "shocker"
                | "gargantua"
                | "predator"
                | "advancedblink"
                | "advancedrecall"
                | "advanceddestroyer"
                | "blinkhunter"
                | "assaultbot"
                | "artillery"
                | "swiftshocker"
                | "mammoth"
                | "gunbot"
                | "mortar"
                | "blink"
                | "advancedbot"
                | "stinger"
                | "behemoth"
                | "missilebot"
                | "heavyhunter"
                | "destroyer"
                | "hornet"
                | "turret"
                | "crossbow"
                | "knight"
                | "raider"
                | "wasp"
                | "flakturret";
            } | {
              kind: "basic";
              tags: string[];
              subKind: string;
              text: string;
              relevantUnitSlugs?:
                | (
                  | "bulwark"
                  | "ballista"
                  | "crab"
                  | "butterfly"
                  | "katbus"
                  | "kingcrab"
                  | "hunter"
                  | "heavyballista"
                  | "dragonfly"
                  | "recall"
                  | "bomber"
                  | "recallhunter"
                  | "kraken"
                  | "locust"
                  | "crusader"
                  | "falcon"
                  | "scorpion"
                  | "valkyrie"
                  | "airship"
                  | "beetle"
                  | "sniper"
                  | "recallshocker"
                  | "shocker"
                  | "gargantua"
                  | "predator"
                  | "advancedblink"
                  | "advancedrecall"
                  | "advanceddestroyer"
                  | "blinkhunter"
                  | "assaultbot"
                  | "artillery"
                  | "swiftshocker"
                  | "mammoth"
                  | "gunbot"
                  | "mortar"
                  | "blink"
                  | "advancedbot"
                  | "stinger"
                  | "behemoth"
                  | "missilebot"
                  | "heavyhunter"
                  | "destroyer"
                  | "hornet"
                  | "turret"
                  | "crossbow"
                  | "knight"
                  | "raider"
                  | "wasp"
                  | "flakturret"
                )[]
                | undefined;
              oppositeUnitSlugs?:
                | (
                  | "bulwark"
                  | "ballista"
                  | "crab"
                  | "butterfly"
                  | "katbus"
                  | "kingcrab"
                  | "hunter"
                  | "heavyballista"
                  | "dragonfly"
                  | "recall"
                  | "bomber"
                  | "recallhunter"
                  | "kraken"
                  | "locust"
                  | "crusader"
                  | "falcon"
                  | "scorpion"
                  | "valkyrie"
                  | "airship"
                  | "beetle"
                  | "sniper"
                  | "recallshocker"
                  | "shocker"
                  | "gargantua"
                  | "predator"
                  | "advancedblink"
                  | "advancedrecall"
                  | "advanceddestroyer"
                  | "blinkhunter"
                  | "assaultbot"
                  | "artillery"
                  | "swiftshocker"
                  | "mammoth"
                  | "gunbot"
                  | "mortar"
                  | "blink"
                  | "advancedbot"
                  | "stinger"
                  | "behemoth"
                  | "missilebot"
                  | "heavyhunter"
                  | "destroyer"
                  | "hornet"
                  | "turret"
                  | "crossbow"
                  | "knight"
                  | "raider"
                  | "wasp"
                  | "flakturret"
                )[]
                | undefined;
            };
          }[];
        };
        outputFormat: "json";
        status: import("hono/utils/http-status.js").StatusCode;
      };
    };
  } & {
    "/responses/:userId": {
      $post: {
        input: {
          json: {
            details: {
              tags: string[];
              questionId: string;
              questionKind: "basic" | "unit_single" | "unit_matchup_1v1";
              smileyFaceRating:
                | "veryUnhappy"
                | "unhappy"
                | "neutral"
                | "happy"
                | "veryHappy"
                | null;
              skipped: boolean;
            };
          };
        } & {
          param: {
            userId: string;
          };
        };
        output: {
          success: boolean;
        };
        outputFormat: "json";
        status: import("hono/utils/http-status.js").StatusCode;
      };
    };
  } & {
    "/:userId": {
      $get: {
        input: {
          param: {
            userId: string;
          };
        };
        output: {
          user: {
            _id: string;
            createdAt: number;
            lastUpdatedAt: number;
            ips: string[];
            battleAcesUsername?: string | undefined;
          };
        };
        outputFormat: "json";
        status: import("hono/utils/http-status.js").StatusCode;
      };
    };
  },
  "/"
>;
//# sourceMappingURL=UserRoutes.d.ts.map
