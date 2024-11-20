import { Repos } from "@battle-aces-fan/repos";
export declare const UserRoutes: (repos: Repos) => import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
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
}, "/">;
//# sourceMappingURL=UserRoutes.d.ts.map