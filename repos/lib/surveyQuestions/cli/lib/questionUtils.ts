import { join, parse, resolve } from "@std/path";
import z from "zod";
import {
  SurveyQuestion_BasicSchema,
  SurveyQuestion_UnitMatchupSchema,
  type SurveyQuestionDetails,
  type Unit,
} from "@battle-aces-fan/datacontracts";
import chalk from "chalk";

export const sortUnitsByPlayrate = (units: Unit[]) => {
  const sortedUnits = units.sort((a, b) => {
    return b.details.leaderboardStats["1v1"].playrate -
      a.details.leaderboardStats["1v1"].playrate;
  });
  return sortedUnits;
};

export const tryFindUnitBySlugSubString = (
  units: Unit[],
  slugSubString: string,
) => {
  const found = units.filter((unit) =>
    unit.details.slug.startsWith(slugSubString)
  );

  if (found.length > 1) {
    console.log(
      chalk.yellow(
        `Found ${found.length} units that match the slug substring ${slugSubString}`,
      ),
    );

    return found[0];
  }

  if (found.length === 0) {
    return null;
  }

  return found[0];
};

export const getPathOfManuallyCreatedMatchupQuestions = () => {
  // find path of current file
  const pathOfCurrentFile = new URL(import.meta.url).pathname;
  const directoryOfCurrentFile = parse(pathOfCurrentFile).dir;
  const newPath = join(
    directoryOfCurrentFile,
    "generatedQuestionData",
    "manuallyCreatedMatchupQuestions.json",
  );

  const pathToUse = resolve(newPath);

  return pathToUse;
};

export const getPathOfGeneratedBasicUnitQuestions = () => {
  // find path of current file
  const pathOfCurrentFile = new URL(import.meta.url).pathname;
  const directoryOfCurrentFile = parse(pathOfCurrentFile).dir;
  const newPath = join(
    directoryOfCurrentFile,
    "generatedQuestionData",
    "generatedBasicUnitQuestions.json",
  );

  const pathToUse = resolve(newPath);

  return pathToUse;
};

export const readCurrentBasicUnitQuestions = async () => {
  const pathToRead = getPathOfManuallyCreatedMatchupQuestions();
  const jsonStr = await Deno.readTextFile(pathToRead);
  const parsed = z.array(SurveyQuestion_BasicSchema).parse(JSON.parse(jsonStr));

  return parsed;
};

export const readCurrentManuallyCreatedMatchupQuestions = async () => {
  const pathToRead = getPathOfManuallyCreatedMatchupQuestions();
  const jsonStr = await Deno.readTextFile(pathToRead);
  const parsed = z.array(SurveyQuestion_UnitMatchupSchema).parse(
    JSON.parse(jsonStr),
  );

  return parsed;
};
