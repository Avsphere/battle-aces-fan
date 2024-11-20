import type { z } from "zod";
export declare const SurveyQuestionKind: z.ZodEnum<
  ["basic", "unit_single", "unit_matchup_1v1"]
>;
export type SurveyQuestionKind = z.infer<typeof SurveyQuestionKind>;
export declare const SurveyQuestion_UnitSingleSchema: z.ZodObject<
  {
    kind: z.ZodLiteral<"unit_single">;
    unitSlug: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
  },
  "strip",
  z.ZodTypeAny,
  {
    kind: "unit_single";
    unitSlug: string;
    tags: string[];
  },
  {
    kind: "unit_single";
    unitSlug: string;
    tags: string[];
  }
>;
export type SurveyQuestion_UnitSingleSchema = z.infer<
  typeof SurveyQuestion_UnitSingleSchema
>;
export declare const SurveyQuestion_UnitMatchupSchema: z.ZodObject<
  {
    kind: z.ZodLiteral<"unit_matchup_1v1">;
    firstUnitSlug: z.ZodEnum<
      [
        "bulwark",
        "ballista",
        "crab",
        "butterfly",
        "katbus",
        "kingcrab",
        "hunter",
        "heavyballista",
        "dragonfly",
        "recall",
        "bomber",
        "recallhunter",
        "kraken",
        "locust",
        "crusader",
        "falcon",
        "scorpion",
        "valkyrie",
        "airship",
        "beetle",
        "sniper",
        "recallshocker",
        "shocker",
        "gargantua",
        "predator",
        "advancedblink",
        "advancedrecall",
        "advanceddestroyer",
        "blinkhunter",
        "assaultbot",
        "artillery",
        "swiftshocker",
        "mammoth",
        "gunbot",
        "mortar",
        "blink",
        "advancedbot",
        "stinger",
        "behemoth",
        "missilebot",
        "heavyhunter",
        "destroyer",
        "hornet",
        "turret",
        "crossbow",
        "knight",
        "raider",
        "wasp",
        "flakturret",
      ]
    >;
    secondUnitSlug: z.ZodEnum<
      [
        "bulwark",
        "ballista",
        "crab",
        "butterfly",
        "katbus",
        "kingcrab",
        "hunter",
        "heavyballista",
        "dragonfly",
        "recall",
        "bomber",
        "recallhunter",
        "kraken",
        "locust",
        "crusader",
        "falcon",
        "scorpion",
        "valkyrie",
        "airship",
        "beetle",
        "sniper",
        "recallshocker",
        "shocker",
        "gargantua",
        "predator",
        "advancedblink",
        "advancedrecall",
        "advanceddestroyer",
        "blinkhunter",
        "assaultbot",
        "artillery",
        "swiftshocker",
        "mammoth",
        "gunbot",
        "mortar",
        "blink",
        "advancedbot",
        "stinger",
        "behemoth",
        "missilebot",
        "heavyhunter",
        "destroyer",
        "hornet",
        "turret",
        "crossbow",
        "knight",
        "raider",
        "wasp",
        "flakturret",
      ]
    >;
    tags: z.ZodArray<z.ZodString, "many">;
  },
  "strip",
  z.ZodTypeAny,
  {
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
  },
  {
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
  }
>;
export type SurveyQuestion_UnitMatchupSchema = z.infer<
  typeof SurveyQuestion_UnitMatchupSchema
>;
export declare const SurveyQuestion_BasicSchema: z.ZodObject<
  {
    kind: z.ZodLiteral<"basic">;
    subKind: z.ZodString;
    text: z.ZodString;
    relevantUnitSlugs: z.ZodOptional<
      z.ZodArray<
        z.ZodEnum<
          [
            "bulwark",
            "ballista",
            "crab",
            "butterfly",
            "katbus",
            "kingcrab",
            "hunter",
            "heavyballista",
            "dragonfly",
            "recall",
            "bomber",
            "recallhunter",
            "kraken",
            "locust",
            "crusader",
            "falcon",
            "scorpion",
            "valkyrie",
            "airship",
            "beetle",
            "sniper",
            "recallshocker",
            "shocker",
            "gargantua",
            "predator",
            "advancedblink",
            "advancedrecall",
            "advanceddestroyer",
            "blinkhunter",
            "assaultbot",
            "artillery",
            "swiftshocker",
            "mammoth",
            "gunbot",
            "mortar",
            "blink",
            "advancedbot",
            "stinger",
            "behemoth",
            "missilebot",
            "heavyhunter",
            "destroyer",
            "hornet",
            "turret",
            "crossbow",
            "knight",
            "raider",
            "wasp",
            "flakturret",
          ]
        >,
        "many"
      >
    >;
    oppositeUnitSlugs: z.ZodOptional<
      z.ZodArray<
        z.ZodEnum<
          [
            "bulwark",
            "ballista",
            "crab",
            "butterfly",
            "katbus",
            "kingcrab",
            "hunter",
            "heavyballista",
            "dragonfly",
            "recall",
            "bomber",
            "recallhunter",
            "kraken",
            "locust",
            "crusader",
            "falcon",
            "scorpion",
            "valkyrie",
            "airship",
            "beetle",
            "sniper",
            "recallshocker",
            "shocker",
            "gargantua",
            "predator",
            "advancedblink",
            "advancedrecall",
            "advanceddestroyer",
            "blinkhunter",
            "assaultbot",
            "artillery",
            "swiftshocker",
            "mammoth",
            "gunbot",
            "mortar",
            "blink",
            "advancedbot",
            "stinger",
            "behemoth",
            "missilebot",
            "heavyhunter",
            "destroyer",
            "hornet",
            "turret",
            "crossbow",
            "knight",
            "raider",
            "wasp",
            "flakturret",
          ]
        >,
        "many"
      >
    >;
    tags: z.ZodArray<z.ZodString, "many">;
  },
  "strip",
  z.ZodTypeAny,
  {
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
  },
  {
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
  }
>;
export type SurveyQuestion_BasicSchema = z.infer<
  typeof SurveyQuestion_BasicSchema
>;
export declare const SurveyQuestionDetails: z.ZodDiscriminatedUnion<
  "kind",
  [
    z.ZodObject<
      {
        kind: z.ZodLiteral<"unit_single">;
        unitSlug: z.ZodString;
        tags: z.ZodArray<z.ZodString, "many">;
      },
      "strip",
      z.ZodTypeAny,
      {
        kind: "unit_single";
        unitSlug: string;
        tags: string[];
      },
      {
        kind: "unit_single";
        unitSlug: string;
        tags: string[];
      }
    >,
    z.ZodObject<
      {
        kind: z.ZodLiteral<"unit_matchup_1v1">;
        firstUnitSlug: z.ZodEnum<
          [
            "bulwark",
            "ballista",
            "crab",
            "butterfly",
            "katbus",
            "kingcrab",
            "hunter",
            "heavyballista",
            "dragonfly",
            "recall",
            "bomber",
            "recallhunter",
            "kraken",
            "locust",
            "crusader",
            "falcon",
            "scorpion",
            "valkyrie",
            "airship",
            "beetle",
            "sniper",
            "recallshocker",
            "shocker",
            "gargantua",
            "predator",
            "advancedblink",
            "advancedrecall",
            "advanceddestroyer",
            "blinkhunter",
            "assaultbot",
            "artillery",
            "swiftshocker",
            "mammoth",
            "gunbot",
            "mortar",
            "blink",
            "advancedbot",
            "stinger",
            "behemoth",
            "missilebot",
            "heavyhunter",
            "destroyer",
            "hornet",
            "turret",
            "crossbow",
            "knight",
            "raider",
            "wasp",
            "flakturret",
          ]
        >;
        secondUnitSlug: z.ZodEnum<
          [
            "bulwark",
            "ballista",
            "crab",
            "butterfly",
            "katbus",
            "kingcrab",
            "hunter",
            "heavyballista",
            "dragonfly",
            "recall",
            "bomber",
            "recallhunter",
            "kraken",
            "locust",
            "crusader",
            "falcon",
            "scorpion",
            "valkyrie",
            "airship",
            "beetle",
            "sniper",
            "recallshocker",
            "shocker",
            "gargantua",
            "predator",
            "advancedblink",
            "advancedrecall",
            "advanceddestroyer",
            "blinkhunter",
            "assaultbot",
            "artillery",
            "swiftshocker",
            "mammoth",
            "gunbot",
            "mortar",
            "blink",
            "advancedbot",
            "stinger",
            "behemoth",
            "missilebot",
            "heavyhunter",
            "destroyer",
            "hornet",
            "turret",
            "crossbow",
            "knight",
            "raider",
            "wasp",
            "flakturret",
          ]
        >;
        tags: z.ZodArray<z.ZodString, "many">;
      },
      "strip",
      z.ZodTypeAny,
      {
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
      },
      {
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
      }
    >,
    z.ZodObject<
      {
        kind: z.ZodLiteral<"basic">;
        subKind: z.ZodString;
        text: z.ZodString;
        relevantUnitSlugs: z.ZodOptional<
          z.ZodArray<
            z.ZodEnum<
              [
                "bulwark",
                "ballista",
                "crab",
                "butterfly",
                "katbus",
                "kingcrab",
                "hunter",
                "heavyballista",
                "dragonfly",
                "recall",
                "bomber",
                "recallhunter",
                "kraken",
                "locust",
                "crusader",
                "falcon",
                "scorpion",
                "valkyrie",
                "airship",
                "beetle",
                "sniper",
                "recallshocker",
                "shocker",
                "gargantua",
                "predator",
                "advancedblink",
                "advancedrecall",
                "advanceddestroyer",
                "blinkhunter",
                "assaultbot",
                "artillery",
                "swiftshocker",
                "mammoth",
                "gunbot",
                "mortar",
                "blink",
                "advancedbot",
                "stinger",
                "behemoth",
                "missilebot",
                "heavyhunter",
                "destroyer",
                "hornet",
                "turret",
                "crossbow",
                "knight",
                "raider",
                "wasp",
                "flakturret",
              ]
            >,
            "many"
          >
        >;
        oppositeUnitSlugs: z.ZodOptional<
          z.ZodArray<
            z.ZodEnum<
              [
                "bulwark",
                "ballista",
                "crab",
                "butterfly",
                "katbus",
                "kingcrab",
                "hunter",
                "heavyballista",
                "dragonfly",
                "recall",
                "bomber",
                "recallhunter",
                "kraken",
                "locust",
                "crusader",
                "falcon",
                "scorpion",
                "valkyrie",
                "airship",
                "beetle",
                "sniper",
                "recallshocker",
                "shocker",
                "gargantua",
                "predator",
                "advancedblink",
                "advancedrecall",
                "advanceddestroyer",
                "blinkhunter",
                "assaultbot",
                "artillery",
                "swiftshocker",
                "mammoth",
                "gunbot",
                "mortar",
                "blink",
                "advancedbot",
                "stinger",
                "behemoth",
                "missilebot",
                "heavyhunter",
                "destroyer",
                "hornet",
                "turret",
                "crossbow",
                "knight",
                "raider",
                "wasp",
                "flakturret",
              ]
            >,
            "many"
          >
        >;
        tags: z.ZodArray<z.ZodString, "many">;
      },
      "strip",
      z.ZodTypeAny,
      {
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
      },
      {
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
      }
    >,
  ]
>;
export type SurveyQuestionDetails = z.infer<typeof SurveyQuestionDetails>;
export declare const SurveyQuestionSchema: z.ZodObject<
  {
    _id: z.ZodString;
    createdAt: z.ZodNumber;
    lastUpdatedAt: z.ZodNumber;
    /**
     * meaning the question is being displayed to users
     */
    isActive: z.ZodBoolean;
    details: z.ZodDiscriminatedUnion<"kind", [
      z.ZodObject<
        {
          kind: z.ZodLiteral<"unit_single">;
          unitSlug: z.ZodString;
          tags: z.ZodArray<z.ZodString, "many">;
        },
        "strip",
        z.ZodTypeAny,
        {
          kind: "unit_single";
          unitSlug: string;
          tags: string[];
        },
        {
          kind: "unit_single";
          unitSlug: string;
          tags: string[];
        }
      >,
      z.ZodObject<
        {
          kind: z.ZodLiteral<"unit_matchup_1v1">;
          firstUnitSlug: z.ZodEnum<
            [
              "bulwark",
              "ballista",
              "crab",
              "butterfly",
              "katbus",
              "kingcrab",
              "hunter",
              "heavyballista",
              "dragonfly",
              "recall",
              "bomber",
              "recallhunter",
              "kraken",
              "locust",
              "crusader",
              "falcon",
              "scorpion",
              "valkyrie",
              "airship",
              "beetle",
              "sniper",
              "recallshocker",
              "shocker",
              "gargantua",
              "predator",
              "advancedblink",
              "advancedrecall",
              "advanceddestroyer",
              "blinkhunter",
              "assaultbot",
              "artillery",
              "swiftshocker",
              "mammoth",
              "gunbot",
              "mortar",
              "blink",
              "advancedbot",
              "stinger",
              "behemoth",
              "missilebot",
              "heavyhunter",
              "destroyer",
              "hornet",
              "turret",
              "crossbow",
              "knight",
              "raider",
              "wasp",
              "flakturret",
            ]
          >;
          secondUnitSlug: z.ZodEnum<
            [
              "bulwark",
              "ballista",
              "crab",
              "butterfly",
              "katbus",
              "kingcrab",
              "hunter",
              "heavyballista",
              "dragonfly",
              "recall",
              "bomber",
              "recallhunter",
              "kraken",
              "locust",
              "crusader",
              "falcon",
              "scorpion",
              "valkyrie",
              "airship",
              "beetle",
              "sniper",
              "recallshocker",
              "shocker",
              "gargantua",
              "predator",
              "advancedblink",
              "advancedrecall",
              "advanceddestroyer",
              "blinkhunter",
              "assaultbot",
              "artillery",
              "swiftshocker",
              "mammoth",
              "gunbot",
              "mortar",
              "blink",
              "advancedbot",
              "stinger",
              "behemoth",
              "missilebot",
              "heavyhunter",
              "destroyer",
              "hornet",
              "turret",
              "crossbow",
              "knight",
              "raider",
              "wasp",
              "flakturret",
            ]
          >;
          tags: z.ZodArray<z.ZodString, "many">;
        },
        "strip",
        z.ZodTypeAny,
        {
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
        },
        {
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
        }
      >,
      z.ZodObject<
        {
          kind: z.ZodLiteral<"basic">;
          subKind: z.ZodString;
          text: z.ZodString;
          relevantUnitSlugs: z.ZodOptional<
            z.ZodArray<
              z.ZodEnum<
                [
                  "bulwark",
                  "ballista",
                  "crab",
                  "butterfly",
                  "katbus",
                  "kingcrab",
                  "hunter",
                  "heavyballista",
                  "dragonfly",
                  "recall",
                  "bomber",
                  "recallhunter",
                  "kraken",
                  "locust",
                  "crusader",
                  "falcon",
                  "scorpion",
                  "valkyrie",
                  "airship",
                  "beetle",
                  "sniper",
                  "recallshocker",
                  "shocker",
                  "gargantua",
                  "predator",
                  "advancedblink",
                  "advancedrecall",
                  "advanceddestroyer",
                  "blinkhunter",
                  "assaultbot",
                  "artillery",
                  "swiftshocker",
                  "mammoth",
                  "gunbot",
                  "mortar",
                  "blink",
                  "advancedbot",
                  "stinger",
                  "behemoth",
                  "missilebot",
                  "heavyhunter",
                  "destroyer",
                  "hornet",
                  "turret",
                  "crossbow",
                  "knight",
                  "raider",
                  "wasp",
                  "flakturret",
                ]
              >,
              "many"
            >
          >;
          oppositeUnitSlugs: z.ZodOptional<
            z.ZodArray<
              z.ZodEnum<
                [
                  "bulwark",
                  "ballista",
                  "crab",
                  "butterfly",
                  "katbus",
                  "kingcrab",
                  "hunter",
                  "heavyballista",
                  "dragonfly",
                  "recall",
                  "bomber",
                  "recallhunter",
                  "kraken",
                  "locust",
                  "crusader",
                  "falcon",
                  "scorpion",
                  "valkyrie",
                  "airship",
                  "beetle",
                  "sniper",
                  "recallshocker",
                  "shocker",
                  "gargantua",
                  "predator",
                  "advancedblink",
                  "advancedrecall",
                  "advanceddestroyer",
                  "blinkhunter",
                  "assaultbot",
                  "artillery",
                  "swiftshocker",
                  "mammoth",
                  "gunbot",
                  "mortar",
                  "blink",
                  "advancedbot",
                  "stinger",
                  "behemoth",
                  "missilebot",
                  "heavyhunter",
                  "destroyer",
                  "hornet",
                  "turret",
                  "crossbow",
                  "knight",
                  "raider",
                  "wasp",
                  "flakturret",
                ]
              >,
              "many"
            >
          >;
          tags: z.ZodArray<z.ZodString, "many">;
        },
        "strip",
        z.ZodTypeAny,
        {
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
        },
        {
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
        }
      >,
    ]>;
  },
  "strip",
  z.ZodTypeAny,
  {
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
  },
  {
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
  }
>;
export type SurveyQuestionSchema = z.infer<typeof SurveyQuestionSchema>;
export declare class SurveyQuestion<
  T extends SurveyQuestionDetails = SurveyQuestionDetails,
> {
  readonly data: SurveyQuestionSchema;
  constructor(data: SurveyQuestionSchema);
  static parse: (data: unknown) => SurveyQuestion<
    {
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
    }
  >;
  get id(): string;
  isSameAs: (other: SurveyQuestion) => boolean;
  static isSameAsDetails: (
    question1: SurveyQuestionDetails,
    question2: SurveyQuestionDetails,
  ) => boolean;
  get kind(): T["kind"];
  get details(): T;
}
//# sourceMappingURL=SurveyQuestion.d.ts.map
