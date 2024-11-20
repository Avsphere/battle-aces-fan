type UserApiClientOptions = {
  url: string;
};
export type UserApiClient = ReturnType<typeof UserApiClient>;
export declare const UserApiClient: (options: UserApiClientOptions) => {
  "*": import("hono/client").ClientRequest<{}>;
} & {
  users: {
    "find-or-create": import("hono/client").ClientRequest<{
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
        status: import("hono/utils/http-status").StatusCode;
      };
    }>;
  };
} & {
  users: {
    questions: {
      ":userId": import("hono/client").ClientRequest<{
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
          status: import("hono/utils/http-status").StatusCode;
        };
      }>;
    };
  };
} & {
  users: {
    responses: {
      ":userId": import("hono/client").ClientRequest<{
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
          status: import("hono/utils/http-status").StatusCode;
        };
      }>;
    };
  };
} & {
  users: {
    ":userId": import("hono/client").ClientRequest<{
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
        status: import("hono/utils/http-status").StatusCode;
      };
    }>;
  };
} & {
  units: import("hono/client").ClientRequest<{
    $get: {
      input: {};
      output: {
        units: {
          _id: string;
          createdAt: number;
          lastUpdatedAt: number;
          details: {
            slug:
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
            name: string;
            id: string;
            unitId: number;
            unitDescription: string;
            unitLore: string;
            techTier: {
              slug: string;
              name: string;
              techTierId: number;
            };
            manufacturer: {
              slug: string;
              name: string;
              description: string;
              primaryColor: {
                hex: string;
                red: number;
                green: number;
                blue: number;
              };
            };
            unitDomain: {
              slug: string;
              name: string;
            };
            unitAbility: {
              slug: string;
              name: string;
              description: string;
            } | null;
            unitTraits: {
              slug: string;
              name: string;
              color: {
                hex: string;
                red: number;
                green: number;
                blue: number;
              };
            }[];
            unitCounters: {
              slug: string;
              name: string;
            }[];
            unitCounteredby: {
              slug: string;
              name: string;
            }[];
            targetsAir: boolean;
            targetsGround: boolean;
            statHealth: number;
            statDamage: number;
            statSpeed: number;
            statRange: number;
            costMatter: number;
            costEnergy: number;
            costBandwidth: number;
            leaderboardStats: {
              "1v1": {
                playrate: number;
                mmrGain: number | null;
                tier: string;
              };
              "2v2": {
                playrate: number;
                mmrGain: number | null;
                tier: string;
              };
            };
          };
        }[];
      };
      outputFormat: "json";
      status: import("hono/utils/http-status").StatusCode;
    };
  }>;
} & {
  tags: {
    "mood-map": import("hono/client").ClientRequest<{
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
    }>;
  };
};
export {};
//# sourceMappingURL=mod.d.ts.map
