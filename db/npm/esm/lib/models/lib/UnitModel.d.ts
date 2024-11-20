import type { Collection, Db } from "mongodb";
import type {
  Unit,
  UnitDetailsSchema,
  UnitSchema,
} from "@battle-aces-fan/datacontracts";
export type UnitCollection = Collection<UnitSchema>;
export declare const UnitCollection: (db: Db) => UnitCollection;
export declare class UnitModel {
  private readonly collection;
  constructor(collection: UnitCollection);
  static create: (db: Db) => UnitModel;
  /**
   * Creates a new unit.
   * @param details - The details of the unit to create.
   * @returns The created Unit instance.
   */
  create: (details: UnitDetailsSchema) => Promise<Unit>;
  deleteAll: () => Promise<void>;
  /**
   * Finds a unit by its ID.
   * @param id - The ID of the unit.
   * @returns The found Unit instance.
   * @throws AssertionError if the unit is not found.
   */
  findById: (id: string) => Promise<Unit>;
  tryFindById: (id: string) => Promise<Unit | null>;
  /**
   * Finds a unit by its slug.
   * @param slug - The slug of the unit.
   * @returns The found Unit instance.
   * @throws AssertionError if the unit is not found.
   */
  findBySlug: (slug: string) => Promise<Unit[]>;
  /**
   * Retrieves all units.
   * @returns An array of all Unit instances.
   */
  findAll: () => Promise<Unit[]>;
  /**
   * Updates a unit's details by its ID.
   * @param id - The ID of the unit to update.
   * @param updatedDetails - The updated unit details.
   * @returns The updated Unit instance.
   * @throws AssertionError if the unit is not found.
   */
  updateById: (
    id: string,
    updatedDetails: Partial<UnitDetailsSchema>,
  ) => Promise<Unit>;
  /**
   * Deletes a unit by its ID.
   * @param id - The ID of the unit to delete.
   * @returns A boolean indicating whether the deletion was successful.
   */
  deleteById: (id: string) => Promise<boolean>;
  /**
   * Finds units by their tech tier slug.
   * @param techTierSlug - The slug of the tech tier.
   * @returns An array of Unit instances matching the tech tier.
   */
  findByTechTier: (techTierSlug: string) => Promise<Unit[]>;
  findByName: (name: string) => Promise<Unit[]>;
  /**
   * Finds units by their manufacturer slug.
   * @param manufacturerSlug - The slug of the manufacturer.
   * @returns An array of Unit instances matching the manufacturer.
   */
  findByManufacturer: (manufacturerSlug: string) => Promise<Unit[]>;
  /**
   * Converts a raw database document into a Unit instance.
   * @param unit - The raw unit document from the database.
   * @returns The Unit instance.
   */
  toDocument: (unit: UnitSchema) => Unit;
}
//# sourceMappingURL=UnitModel.d.ts.map
