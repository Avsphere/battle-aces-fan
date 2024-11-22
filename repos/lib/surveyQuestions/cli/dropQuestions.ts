import chalk from "chalk";
import type {
  getPathOfManuallyCreatedMatchupQuestions,
  readCurrentManuallyCreatedMatchupQuestions,
} from "./lib/questionUtils.ts";
import { repos } from "../../../repos.ts";
import type { SurveyQuestion } from "@battle-aces-fan/datacontracts";
import type { generateAllQuestions } from "./generateQuestions.ts";

const questions = await repos.surveyQuestions.questions.findAll();

await repos.surveyQuestions.questions.deleteAll();
console.log(chalk.blueBright(`Dropped all ${questions.length} questions`));

Deno.exit(0);
