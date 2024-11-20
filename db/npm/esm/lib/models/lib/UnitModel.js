// models/UnitModel.ts
import { ObjectId } from "mongodb";
import { Unit, UnitSchema, } from "@battle-aces-fan/datacontracts";
import assert from "node:assert";
export const UnitCollection = (db) => {
    return db.collection("units");
};
export class UnitModel {
    constructor(collection) {
        Object.defineProperty(this, "collection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: collection
        });
        /**
         * Creates a new unit.
         * @param details - The details of the unit to create.
         * @returns The created Unit instance.
         */
        Object.defineProperty(this, "create", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (details) => {
                const unit = {
                    _id: new ObjectId().toString(),
                    createdAt: Date.now(),
                    lastUpdatedAt: Date.now(),
                    details,
                };
                await this.collection.insertOne(unit);
                return this.toDocument(unit);
            }
        });
        Object.defineProperty(this, "deleteAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => {
                await this.collection.deleteMany({});
            }
        });
        /**
         * Finds a unit by its ID.
         * @param id - The ID of the unit.
         * @returns The found Unit instance.
         * @throws AssertionError if the unit is not found.
         */
        Object.defineProperty(this, "findById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (id) => {
                const doc = await this.collection.findOne({ _id: id });
                assert(doc, `Unit with id ${id} not found`);
                return this.toDocument(doc);
            }
        });
        Object.defineProperty(this, "tryFindById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (id) => {
                try {
                    return await this.findById(id);
                }
                catch (err) {
                    return null;
                }
            }
        });
        /**
         * Finds a unit by its slug.
         * @param slug - The slug of the unit.
         * @returns The found Unit instance.
         * @throws AssertionError if the unit is not found.
         */
        Object.defineProperty(this, "findBySlug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (slug) => {
                const key = "details.slug";
                const docs = await this.collection.find({ [key]: slug }).toArray();
                assert(docs, `Unit with slug ${slug} not found`);
                return docs.map(this.toDocument);
            }
        });
        /**
         * Retrieves all units.
         * @returns An array of all Unit instances.
         */
        Object.defineProperty(this, "findAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => {
                const docs = await this.collection.find({}).toArray();
                return docs.map(this.toDocument);
            }
        });
        /**
         * Updates a unit's details by its ID.
         * @param id - The ID of the unit to update.
         * @param updatedDetails - The updated unit details.
         * @returns The updated Unit instance.
         * @throws AssertionError if the unit is not found.
         */
        Object.defineProperty(this, "updateById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (id, updatedDetails) => {
                const currentDetails = await this.findById(id);
                const mergedDetails = { ...currentDetails.details, ...updatedDetails };
                const updateResult = await this.collection.findOneAndUpdate({ _id: id }, {
                    $set: {
                        "details": mergedDetails,
                        lastUpdatedAt: Date.now(),
                    },
                }, { returnDocument: "after" });
                return this.toDocument(UnitSchema.parse(updateResult));
            }
        });
        /**
         * Deletes a unit by its ID.
         * @param id - The ID of the unit to delete.
         * @returns A boolean indicating whether the deletion was successful.
         */
        Object.defineProperty(this, "deleteById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (id) => {
                const deleteResult = await this.collection.deleteOne({ _id: id });
                return deleteResult.deletedCount === 1;
            }
        });
        /**
         * Finds units by their tech tier slug.
         * @param techTierSlug - The slug of the tech tier.
         * @returns An array of Unit instances matching the tech tier.
         */
        Object.defineProperty(this, "findByTechTier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (techTierSlug) => {
                const key = "details.techTier.slug";
                const docs = await this.collection.find({ [key]: techTierSlug }).toArray();
                return docs.map(this.toDocument);
            }
        });
        Object.defineProperty(this, "findByName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (name) => {
                const key = "details.name";
                const docs = await this.collection.find({ [key]: name }).toArray();
                return docs.map(this.toDocument);
            }
        });
        /**
         * Finds units by their manufacturer slug.
         * @param manufacturerSlug - The slug of the manufacturer.
         * @returns An array of Unit instances matching the manufacturer.
         */
        Object.defineProperty(this, "findByManufacturer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (manufacturerSlug) => {
                const key = "details.manufacturer.slug";
                const docs = await this.collection.find({ [key]: manufacturerSlug }).toArray();
                return docs.map(this.toDocument);
            }
        });
        /**
         * Converts a raw database document into a Unit instance.
         * @param unit - The raw unit document from the database.
         * @returns The Unit instance.
         */
        Object.defineProperty(this, "toDocument", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (unit) => {
                return Unit.parse(unit);
            }
        });
    }
}
Object.defineProperty(UnitModel, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (db) => new UnitModel(UnitCollection(db))
});
