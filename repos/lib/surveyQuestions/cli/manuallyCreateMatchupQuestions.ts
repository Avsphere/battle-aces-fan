import chalk from "chalk";
import { appContext } from "@battle-aces-fan/app-context";
import type { SurveyQuestion_UnitMatchupSchema } from "@battle-aces-fan/datacontracts";
import { getPathOfManuallyCreatedMatchupQuestions } from "./lib/questionUtils.ts";
type UnitEventData = {
  unitSlug1: string;
  unitSlug2: string;
};

type UnitInputtedEvent = CustomEvent<UnitEventData>;

export const BASIC_UNIT_QUESTION_TAGS = [
  "glitchy movement",
  "fun to play against",
  "annoying to play against",
  "overpowered",
  "underpowered",
  "feels great to control",
  "looks bad",
] as const;

export const BASIC_UNIT_MATCHUP_TAGS = [
  "brutally snowballs",
  "boring",
  "frustrating",
  "fun",
  "low skill expression",
  "high skill expression",
] as const;

console.log(chalk.green("Loading all units"));
const units = await appContext.models.units.findAll();
console.log(chalk.green(`Finished loading all ${units.length} units`));

const tryFindUnitBySlugSubString = (slugSubString: string) => {
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

const unitMatchupQuestions: SurveyQuestion_UnitMatchupSchema[] = [];
const onUnitMatchupEventHandler = (event: UnitInputtedEvent) => {
  const { unitSlug1, unitSlug2 } = event.detail;
  console.log(`Event Received: ${unitSlug1} vs ${unitSlug2}`);
  const maybeUnit1 = tryFindUnitBySlugSubString(unitSlug1);
  if (!maybeUnit1) {
    console.log(
      chalk.red(
        `Could not find a unit with the slug substring ${unitSlug1}`,
      ),
    );
    return;
  }
  const maybeUnit2 = tryFindUnitBySlugSubString(unitSlug2);
  if (!maybeUnit2) {
    console.log(
      chalk.red(
        `Could not find a unit with the slug substring ${unitSlug2}`,
      ),
    );
    return;
  }

  const unit1 = maybeUnit1;
  const unit2 = maybeUnit2;

  const question: SurveyQuestion_UnitMatchupSchema = {
    kind: "unit_matchup_1v1",
    firstUnitSlug: unit1.details.slug,
    secondUnitSlug: unit2.details.slug,
    tags: [],
  };

  // check if the question already exists for this exact matchup
  const existingQuestion = unitMatchupQuestions.find(
    (q) =>
      q.firstUnitSlug === question.firstUnitSlug &&
      q.secondUnitSlug === question.secondUnitSlug,
  );
  if (existingQuestion) {
    console.log(
      chalk.yellow(
        `A question already exists between ${unit1.details.slug} and ${unit2.details.slug}`,
      ),
    );
    return;
  }

  console.log(
    chalk.green(
      `Created a unit matchup question between ${unit1.details.slug} and ${unit2.details.slug}`,
    ),
  );

  unitMatchupQuestions.push(question);
};

// save all of the questions to a file whose path is relative to the current working directory at './lib/manuallyCreatedMatchupQuestions.json'
const onCliExitHandler = async () => {
  const p = getPathOfManuallyCreatedMatchupQuestions();

  console.log("Saving the questions to the file at path: ", p);

  await Deno.writeTextFile(
    p,
    JSON.stringify(unitMatchupQuestions, null, 2),
  );

  console.log("Exiting the CLI tool.");
  Deno.exit(0);
};

globalThis.addEventListener("unitMatchupSuppliedEvent", async (event) => {
  await onUnitMatchupEventHandler(event as UnitInputtedEvent);
});

// on ctrl+c, exit the CLI tool
Deno.addSignalListener("SIGINT", async () => {
  console.log("\nCtrl+C detected. Exiting the CLI tool...");
  await onCliExitHandler();
});

while (true) {
  // Ask the first question
  const unitSlug1 = prompt("Unit slug 1:");
  if (unitSlug1 === null) {
    console.log("Exiting the CLI tool.");
    await onCliExitHandler();
    break; // Exit if the user cancels the prompt
  }
  if (!unitSlug1.trim()) {
    console.log("Unit slug 1 cannot be empty.");
    continue;
  }

  // Ask the second question
  const unitSlug2 = prompt("Unit slug 2:");
  if (unitSlug2 === null) {
    console.log("Exiting the CLI tool.");
    await onCliExitHandler();
    break; // Exit if the user cancels the prompt
  }
  if (!unitSlug2.trim()) {
    console.log("Unit slug 2 cannot be empty.");
    continue;
  }

  // Emit the event with the provided answers
  const event = new CustomEvent<UnitEventData>("unitMatchupSuppliedEvent", {
    detail: { unitSlug1, unitSlug2 },
  });
  globalThis.dispatchEvent(event);
}
