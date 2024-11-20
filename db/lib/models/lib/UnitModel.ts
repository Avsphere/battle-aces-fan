// models/UnitModel.ts

import { Collection, Db, ObjectId } from "mongodb";
import {
    Unit,
    UnitDetailsSchema,
    UnitSchema,
} from "@battle-aces-fan/datacontracts";
import assert from "node:assert";

export type UnitCollection = Collection<UnitSchema>;

export const UnitCollection = (db: Db): UnitCollection => {
    return db.collection<UnitSchema>("units");
};

export class UnitModel {
    constructor(private readonly collection: UnitCollection) {}

    static create = (db: Db): UnitModel =>
        new UnitModel(UnitCollection(db));

    /**
     * Creates a new unit.
     * @param details - The details of the unit to create.
     * @returns The created Unit instance.
     */
    create = async (details: UnitDetailsSchema): Promise<Unit> => {
        const unit: UnitSchema = {
            _id: new ObjectId().toString(),
            createdAt: Date.now(),
            lastUpdatedAt: Date.now(),
            details,
        };

        await this.collection.insertOne(unit);
        return this.toDocument(unit);
    };


    /**
     * Finds a unit by its ID.
     * @param id - The ID of the unit.
     * @returns The found Unit instance.
     * @throws AssertionError if the unit is not found.
     */
    findById = async (id: string): Promise<Unit> => {
        const doc = await this.collection.findOne({ _id: id });
        assert(doc, `Unit with id ${id} not found`);
        return this.toDocument(doc);
    };

    tryFindById = async (id: string): Promise<Unit | null> => {
        try {
            return await this.findById(id);
        } catch(err) {
            return null;
        }
 
    };

    /**
     * Finds a unit by its slug.
     * @param slug - The slug of the unit.
     * @returns The found Unit instance.
     * @throws AssertionError if the unit is not found.
     */
    findBySlug = async (slug: string): Promise<Unit> => {
        const key = "details.slug" as any;
        const doc = await this.collection.findOne({ [key] : slug });
        assert(doc, `Unit with slug ${slug} not found`);
        return this.toDocument(doc);
    };

    /**
     * Retrieves all units.
     * @returns An array of all Unit instances.
     */
    findAll = async (): Promise<Unit[]> => {
        const docs = await this.collection.find({}).toArray();
        return docs.map(this.toDocument);
    };

    /**
     * Updates a unit's details by its ID.
     * @param id - The ID of the unit to update.
     * @param updatedDetails - The updated unit details.
     * @returns The updated Unit instance.
     * @throws AssertionError if the unit is not found.
     */
    updateById = async (
        id: string,
        updatedDetails: Partial<UnitDetailsSchema>
    ): Promise<Unit> => {
        const currentDetails = await this.findById(id);
        const mergedDetails = { ...currentDetails.details, ...updatedDetails };

        const updateResult = await this.collection.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    "details": mergedDetails,
                    lastUpdatedAt: Date.now(),
                },
            },
            { returnDocument: "after" }
        );

        return this.toDocument(UnitSchema.parse(updateResult));
    };

    /**
     * Deletes a unit by its ID.
     * @param id - The ID of the unit to delete.
     * @returns A boolean indicating whether the deletion was successful.
     */
    deleteById = async (id: string): Promise<boolean> => {
        const deleteResult = await this.collection.deleteOne({ _id: id });
        return deleteResult.deletedCount === 1;
    };

    /**
     * Finds units by their tech tier slug.
     * @param techTierSlug - The slug of the tech tier.
     * @returns An array of Unit instances matching the tech tier.
     */
    findByTechTier = async (techTierSlug: string): Promise<Unit[]> => {
        const key = "details.techTier.slug" as any;
        const docs = await this.collection.find({ [key] : techTierSlug }).toArray();
        return docs.map(this.toDocument);
    };

    findByName = async (name: string): Promise<Unit[]> => {
        const key = "details.name" as any;
        const docs = await this.collection.find({ [key] : name }).toArray();
        return docs.map(this.toDocument);
    }

    /**
     * Finds units by their manufacturer slug.
     * @param manufacturerSlug - The slug of the manufacturer.
     * @returns An array of Unit instances matching the manufacturer.
     */
    findByManufacturer = async (manufacturerSlug: string): Promise<Unit[]> => {
        const key = "details.manufacturer.slug" as any;
        const docs = await this.collection.find({ [key] : manufacturerSlug }).toArray();
        return docs.map(this.toDocument);
    };

    /**
     * Converts a raw database document into a Unit instance.
     * @param unit - The raw unit document from the database.
     * @returns The Unit instance.
     */
    toDocument = (unit: UnitSchema): Unit => {
        return Unit.parse(unit);
    };
}
