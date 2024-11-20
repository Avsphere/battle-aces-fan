import chalk from "chalk";
import { appContext } from "@battle-aces-fan/app-context";
import type {
  SurveyQuestion_UnitMatchupSchema,
  SurveyQuestionDetails,
} from "@battle-aces-fan/datacontracts";
import type { getPathOfManuallyCreatedMatchupQuestions } from "./lib/questionUtils.ts";
import { z } from "zod";
import { CUSTOM_TEXT_QUESTIONS } from "./lib/customTextQuestions.ts";
import { CUSTOM_MATCHUP_QUESTIONS } from "./lib/customMatchupQuestions.ts";
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
  "useless",
  "overused",
  "low skill expression",
  "high skill expression",
] as const;

export const BASIC_UNIT_MATCHUP_TAGS = [
  "fun",
  "brutally snowballs",
  "boring",
  "frustrating",
  "low skill expression",
  "high skill expression",
] as const;

console.log(chalk.green("Loading all units"));
const units = await appContext.models.units.findAll();
console.log(chalk.green(`Finished loading all ${units.length} units`));

const generateBasicUnitQuestions = (): SurveyQuestionDetails[] => {
  const questions = units.map((unit) => {
    const question: SurveyQuestionDetails = {
      kind: "basic",
      subKind: "thoughts_on_unit",
      text: `Thoughts on ${unit.details.name}?`,
      relevantUnitSlugs: [unit.details.slug],
      tags: z.array(z.string()).parse(BASIC_UNIT_QUESTION_TAGS),
    };
    return question;
  });

  return questions;
};

const generateBasicUnitMatchupQuestions = (): SurveyQuestionDetails[] => {
  const baseTierUnits = units.filter((u) => u.techTierId === 0);
  const baseTierUnitPairsIncludingSelf = baseTierUnits.flatMap(
    (unit1, index) => {
      return baseTierUnits.slice(index).map((unit2) => {
        return [unit1, unit2];
      });
    },
  );

  const pairsWhereBothUnitsOnlyTargetGround = baseTierUnitPairsIncludingSelf
    .filter(([unit1, unit2]) => {
      return unit1.details.targetsAir === false &&
        unit2.details.targetsAir === false;
    });

  const questions = pairsWhereBothUnitsOnlyTargetGround.map(
    ([unit1, unit2]) => {
      const question: SurveyQuestionDetails = {
        kind: "basic",
        subKind: "thoughts_on_basic_unit_matchup",
        text: `Thoughts on ${unit1.details.name} vs ${unit2.details.name}?`,
        relevantUnitSlugs: [unit1.details.slug],
        oppositeUnitSlugs: [unit2.details.slug],
        tags: z.array(z.string()).parse(BASIC_UNIT_MATCHUP_TAGS),
      };
      return question;
    },
  );

  return questions;
};

export const generateAllQuestions = (): SurveyQuestionDetails[] => {
  const basicUnitQuestions = generateBasicUnitQuestions();
  const basicUnitMatchupQuestions = generateBasicUnitMatchupQuestions();
  const textQuestions = CUSTOM_TEXT_QUESTIONS;
  const matchupQuestions = CUSTOM_MATCHUP_QUESTIONS;

  return [
    ...basicUnitQuestions,
    ...basicUnitMatchupQuestions,
    ...textQuestions,
    ...matchupQuestions,
  ];
};
