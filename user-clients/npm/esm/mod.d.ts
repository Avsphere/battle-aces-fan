type UserApiClientOptions = {
    url: string;
};
export type UserApiClient = ReturnType<typeof UserApiClient>;
export declare const UserApiClient: (options: UserApiClientOptions) => {
    index: import("hono/client").ClientRequest<{
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").StatusCode;
        };
    }>;
} & {
    author: import("hono/client").ClientRequest<{
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
    }>;
} & {
    users: import("hono/client").ClientRequest<{
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
    }>;
};
export {};
//# sourceMappingURL=mod.d.ts.map