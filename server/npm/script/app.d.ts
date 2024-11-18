declare const app: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
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
}, "/">;
export type BattleAcesFanRoutes = typeof app;
export declare const BattleAcesFanRoutes: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
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
}, "/">;
export {};
//# sourceMappingURL=app.d.ts.map