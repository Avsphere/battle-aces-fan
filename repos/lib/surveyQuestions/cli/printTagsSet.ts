import chalk from "chalk";
import type {
  getPathOfManuallyCreatedMatchupQuestions,
  readCurrentManuallyCreatedMatchupQuestions,
} from "./lib/questionUtils.ts";
import { repos } from "../../../repos.ts";

console.log(chalk.blueBright(`Printing all tags`));

const allExistingQuestions = await repos.surveyQuestions.questions.findAll();

const tags = allExistingQuestions.flatMap((question) => question.details.tags);
const tagsSet = new Set(tags);
const tagsArray = Array.from(tagsSet);

console.log(chalk.blueBright(`Found ${tagsArray.length} tags`), tagsArray);
