import { appContext } from '@battle-aces-fan/app-context';
export class UsersRepo {
    constructor(appContext) {
        Object.defineProperty(this, "appContext", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: appContext
        });
        Object.defineProperty(this, "create", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => { }
        });
        Object.defineProperty(this, "findById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => { }
        });
        Object.defineProperty(this, "findAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => { }
        });
    }
}
Object.defineProperty(UsersRepo, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: () => new UsersRepo(appContext)
});
