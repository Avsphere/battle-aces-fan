// make request and read as json: https://crablab.gg/api/units

import { UnitDetailsSchema } from "@battle-aces-fan/datacontracts";

export const getUnitSeedData = async () => {
  const response = await fetch("https://crablab.gg/api/units");
  const data = await response.json();
  const unitDetails = data.data as unknown[];

  const parsed = unitDetails.map((unit) => {
    return UnitDetailsSchema.parse(unit);
  });

  return parsed;
};
