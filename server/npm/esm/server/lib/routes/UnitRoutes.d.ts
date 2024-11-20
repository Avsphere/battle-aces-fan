import type { Repos } from "@battle-aces-fan/repos";
export declare const UnitRoutes: (
  repos: Repos,
) => import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
  "/": {
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
  };
}, "/">;
//# sourceMappingURL=UnitRoutes.d.ts.map
