export class UnitsRepo {
  constructor(repos) {
    Object.defineProperty(this, "repos", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: repos,
    });
    Object.defineProperty(this, "create", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: async (params) => {
        return await this.repos.appContext.models.units.create(params);
      },
    });
    Object.defineProperty(this, "createMany", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: async (params) => {
        return await Promise.all(params.map((p) => this.create(p)));
      },
    });
    Object.defineProperty(this, "findById", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: async (params) => {
        return await this.repos.appContext.models.units.findById(params);
      },
    });
    Object.defineProperty(this, "findAll", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: async () => {
        return await this.repos.appContext.models.units.findAll();
      },
    });
    Object.defineProperty(this, "deleteAll", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: async () => {
        return await this.repos.appContext.models.units.deleteAll();
      },
    });
  }
}
Object.defineProperty(UnitsRepo, "create", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: (repos) => new UnitsRepo(repos),
});
