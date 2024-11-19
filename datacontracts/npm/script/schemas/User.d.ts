import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    _id: z.ZodString;
    ips: z.ZodArray<z.ZodString, "many">;
    createdAt: z.ZodNumber;
    lastUpdatedAt: z.ZodNumber;
    battleAcesUsername: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    ips: string[];
    battleAcesUsername?: string | undefined;
}, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    ips: string[];
    battleAcesUsername?: string | undefined;
}>;
export type UserSchema = z.infer<typeof UserSchema>;
export declare class User {
    readonly data: UserSchema;
    constructor(data: UserSchema);
    static parse: (data: unknown) => User;
    get id(): string;
}
//# sourceMappingURL=User.d.ts.map