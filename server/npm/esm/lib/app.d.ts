import { Repos } from "@battle-aces-fan/repos";
export declare const BattleAcesFanApp: {
    (repos: Repos): import("hono/hono-base").HonoBase<{}, ({
        "*": {};
    } & {
        "/": {
            $get: {
                input: {};
                output: "Hello Hono!";
                outputFormat: "text";
                status: import("hono/utils/http-status").StatusCode;
            };
        };
    } & {
        "/author": {
            $post: {
                input: {
                    json: {
                        name: string;
                        age: number;
                        hairColor: string;
                    };
                };
                output: {
                    success: boolean;
                    message: string;
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").StatusCode;
            };
        };
    }) | import("hono/types").MergeSchemaPath<{
        "/": {
            $get: {
                input: {};
                output: {
                    users: {
                        readonly data: {
                            _id: string;
                            createdAt: number;
                            lastUpdatedAt: number;
                            ips: string[];
                            battleAcesUsername?: string | undefined;
                        };
                        readonly id: string;
                    }[];
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").StatusCode;
            };
        };
    }, "/users">, "/">;
    create(): import("hono/hono-base").HonoBase<{}, ({
        "*": {};
    } & {
        "/": {
            $get: {
                input: {};
                output: "Hello Hono!";
                outputFormat: "text";
                status: import("hono/utils/http-status").StatusCode;
            };
        };
    } & {
        "/author": {
            $post: {
                input: {
                    json: {
                        name: string;
                        age: number;
                        hairColor: string;
                    };
                };
                output: {
                    success: boolean;
                    message: string;
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").StatusCode;
            };
        };
    }) | import("hono/types").MergeSchemaPath<{
        "/": {
            $get: {
                input: {};
                output: {
                    users: {
                        readonly data: {
                            _id: string;
                            createdAt: number;
                            lastUpdatedAt: number;
                            ips: string[];
                            battleAcesUsername?: string | undefined;
                        };
                        readonly id: string;
                    }[];
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").StatusCode;
            };
        };
    }, "/users">, "/">;
};
export type BattleAcesFanApp = ReturnType<typeof BattleAcesFanApp>;
//# sourceMappingURL=app.d.ts.map