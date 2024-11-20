import { z } from "zod";
export declare const UnitDetailsSchema: z.ZodObject<{
    id: z.ZodString;
    unitId: z.ZodNumber;
    slug: z.ZodEnum<["bulwark", "ballista", "crab", "butterfly", "katbus", "kingcrab", "hunter", "heavyballista", "dragonfly", "recall", "bomber", "recallhunter", "kraken", "locust", "crusader", "falcon", "scorpion", "valkyrie", "airship", "beetle", "sniper", "recallshocker", "shocker", "gargantua", "predator", "advancedblink", "advancedrecall", "advanceddestroyer", "blinkhunter", "assaultbot", "artillery", "swiftshocker", "mammoth", "gunbot", "mortar", "blink", "advancedbot", "stinger", "behemoth", "missilebot", "heavyhunter", "destroyer", "hornet", "turret", "crossbow", "knight", "raider", "wasp", "flakturret"]>;
    name: z.ZodString;
    unitDescription: z.ZodString;
    unitLore: z.ZodString;
    techTier: z.ZodObject<{
        slug: z.ZodString;
        techTierId: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        slug: string;
        name: string;
        techTierId: number;
    }, {
        slug: string;
        name: string;
        techTierId: number;
    }>;
    manufacturer: z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        primaryColor: z.ZodObject<{
            hex: z.ZodString;
            red: z.ZodNumber;
            green: z.ZodNumber;
            blue: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            hex: string;
            red: number;
            green: number;
            blue: number;
        }, {
            hex: string;
            red: number;
            green: number;
            blue: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        slug: string;
        name: string;
        description: string;
        primaryColor: {
            hex: string;
            red: number;
            green: number;
            blue: number;
        };
    }, {
        slug: string;
        name: string;
        description: string;
        primaryColor: {
            hex: string;
            red: number;
            green: number;
            blue: number;
        };
    }>;
    unitDomain: z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        slug: string;
        name: string;
    }, {
        slug: string;
        name: string;
    }>;
    unitAbility: z.ZodNullable<z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        slug: string;
        name: string;
        description: string;
    }, {
        slug: string;
        name: string;
        description: string;
    }>>;
    unitTraits: z.ZodArray<z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
        color: z.ZodObject<{
            hex: z.ZodString;
            red: z.ZodNumber;
            green: z.ZodNumber;
            blue: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            hex: string;
            red: number;
            green: number;
            blue: number;
        }, {
            hex: string;
            red: number;
            green: number;
            blue: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        slug: string;
        name: string;
        color: {
            hex: string;
            red: number;
            green: number;
            blue: number;
        };
    }, {
        slug: string;
        name: string;
        color: {
            hex: string;
            red: number;
            green: number;
            blue: number;
        };
    }>, "many">;
    unitCounters: z.ZodArray<z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        slug: string;
        name: string;
    }, {
        slug: string;
        name: string;
    }>, "many">;
    unitCounteredby: z.ZodArray<z.ZodObject<{
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        slug: string;
        name: string;
    }, {
        slug: string;
        name: string;
    }>, "many">;
    targetsAir: z.ZodBoolean;
    targetsGround: z.ZodBoolean;
    statHealth: z.ZodNumber;
    statDamage: z.ZodNumber;
    statSpeed: z.ZodNumber;
    statRange: z.ZodNumber;
    costMatter: z.ZodNumber;
    costEnergy: z.ZodNumber;
    costBandwidth: z.ZodNumber;
    leaderboardStats: z.ZodObject<{
        "1v1": z.ZodObject<{
            playrate: z.ZodNumber;
            mmrGain: z.ZodNullable<z.ZodNumber>;
            tier: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            playrate: number;
            mmrGain: number | null;
            tier: string;
        }, {
            playrate: number;
            mmrGain: number | null;
            tier: string;
        }>;
        "2v2": z.ZodObject<{
            playrate: z.ZodNumber;
            mmrGain: z.ZodNullable<z.ZodNumber>;
            tier: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            playrate: number;
            mmrGain: number | null;
            tier: string;
        }, {
            playrate: number;
            mmrGain: number | null;
            tier: string;
        }>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
}, "strip", z.ZodTypeAny, {
    slug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
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
}, {
    slug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
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
}>;
export type UnitDetailsSchema = z.infer<typeof UnitDetailsSchema>;
export declare const UnitSchema: z.ZodObject<{
    _id: z.ZodString;
    createdAt: z.ZodNumber;
    lastUpdatedAt: z.ZodNumber;
    details: z.ZodObject<{
        id: z.ZodString;
        unitId: z.ZodNumber;
        slug: z.ZodEnum<["bulwark", "ballista", "crab", "butterfly", "katbus", "kingcrab", "hunter", "heavyballista", "dragonfly", "recall", "bomber", "recallhunter", "kraken", "locust", "crusader", "falcon", "scorpion", "valkyrie", "airship", "beetle", "sniper", "recallshocker", "shocker", "gargantua", "predator", "advancedblink", "advancedrecall", "advanceddestroyer", "blinkhunter", "assaultbot", "artillery", "swiftshocker", "mammoth", "gunbot", "mortar", "blink", "advancedbot", "stinger", "behemoth", "missilebot", "heavyhunter", "destroyer", "hornet", "turret", "crossbow", "knight", "raider", "wasp", "flakturret"]>;
        name: z.ZodString;
        unitDescription: z.ZodString;
        unitLore: z.ZodString;
        techTier: z.ZodObject<{
            slug: z.ZodString;
            techTierId: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            slug: string;
            name: string;
            techTierId: number;
        }, {
            slug: string;
            name: string;
            techTierId: number;
        }>;
        manufacturer: z.ZodObject<{
            slug: z.ZodString;
            name: z.ZodString;
            description: z.ZodString;
            primaryColor: z.ZodObject<{
                hex: z.ZodString;
                red: z.ZodNumber;
                green: z.ZodNumber;
                blue: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                red: number;
                green: number;
                blue: number;
            }, {
                hex: string;
                red: number;
                green: number;
                blue: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            slug: string;
            name: string;
            description: string;
            primaryColor: {
                hex: string;
                red: number;
                green: number;
                blue: number;
            };
        }, {
            slug: string;
            name: string;
            description: string;
            primaryColor: {
                hex: string;
                red: number;
                green: number;
                blue: number;
            };
        }>;
        unitDomain: z.ZodObject<{
            slug: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            slug: string;
            name: string;
        }, {
            slug: string;
            name: string;
        }>;
        unitAbility: z.ZodNullable<z.ZodObject<{
            slug: z.ZodString;
            name: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            slug: string;
            name: string;
            description: string;
        }, {
            slug: string;
            name: string;
            description: string;
        }>>;
        unitTraits: z.ZodArray<z.ZodObject<{
            slug: z.ZodString;
            name: z.ZodString;
            color: z.ZodObject<{
                hex: z.ZodString;
                red: z.ZodNumber;
                green: z.ZodNumber;
                blue: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                red: number;
                green: number;
                blue: number;
            }, {
                hex: string;
                red: number;
                green: number;
                blue: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            slug: string;
            name: string;
            color: {
                hex: string;
                red: number;
                green: number;
                blue: number;
            };
        }, {
            slug: string;
            name: string;
            color: {
                hex: string;
                red: number;
                green: number;
                blue: number;
            };
        }>, "many">;
        unitCounters: z.ZodArray<z.ZodObject<{
            slug: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            slug: string;
            name: string;
        }, {
            slug: string;
            name: string;
        }>, "many">;
        unitCounteredby: z.ZodArray<z.ZodObject<{
            slug: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            slug: string;
            name: string;
        }, {
            slug: string;
            name: string;
        }>, "many">;
        targetsAir: z.ZodBoolean;
        targetsGround: z.ZodBoolean;
        statHealth: z.ZodNumber;
        statDamage: z.ZodNumber;
        statSpeed: z.ZodNumber;
        statRange: z.ZodNumber;
        costMatter: z.ZodNumber;
        costEnergy: z.ZodNumber;
        costBandwidth: z.ZodNumber;
        leaderboardStats: z.ZodObject<{
            "1v1": z.ZodObject<{
                playrate: z.ZodNumber;
                mmrGain: z.ZodNullable<z.ZodNumber>;
                tier: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                playrate: number;
                mmrGain: number | null;
                tier: string;
            }, {
                playrate: number;
                mmrGain: number | null;
                tier: string;
            }>;
            "2v2": z.ZodObject<{
                playrate: z.ZodNumber;
                mmrGain: z.ZodNullable<z.ZodNumber>;
                tier: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                playrate: number;
                mmrGain: number | null;
                tier: string;
            }, {
                playrate: number;
                mmrGain: number | null;
                tier: string;
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>;
    }, "strip", z.ZodTypeAny, {
        slug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
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
    }, {
        slug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
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
    }>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    details: {
        slug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
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
}, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    details: {
        slug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
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
}>;
export type UnitSchema = z.infer<typeof UnitSchema>;
export declare class Unit {
    readonly data: UnitSchema;
    constructor(data: UnitSchema);
    static parse: (data: unknown) => Unit;
    get techTierId(): number;
    get id(): string;
    get details(): {
        slug: "bulwark" | "ballista" | "crab" | "butterfly" | "katbus" | "kingcrab" | "hunter" | "heavyballista" | "dragonfly" | "recall" | "bomber" | "recallhunter" | "kraken" | "locust" | "crusader" | "falcon" | "scorpion" | "valkyrie" | "airship" | "beetle" | "sniper" | "recallshocker" | "shocker" | "gargantua" | "predator" | "advancedblink" | "advancedrecall" | "advanceddestroyer" | "blinkhunter" | "assaultbot" | "artillery" | "swiftshocker" | "mammoth" | "gunbot" | "mortar" | "blink" | "advancedbot" | "stinger" | "behemoth" | "missilebot" | "heavyhunter" | "destroyer" | "hornet" | "turret" | "crossbow" | "knight" | "raider" | "wasp" | "flakturret";
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
}
//# sourceMappingURL=UnitSchema.d.ts.map