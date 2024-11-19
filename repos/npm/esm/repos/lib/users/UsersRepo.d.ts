import { AppContext } from '@battle-aces-fan/app-context';
export declare class UsersRepo {
    private readonly appContext;
    constructor(appContext: AppContext);
    create: () => Promise<void>;
    findById: () => Promise<void>;
    findAll: () => Promise<void>;
    static create: () => UsersRepo;
}
//# sourceMappingURL=UsersRepo.d.ts.map