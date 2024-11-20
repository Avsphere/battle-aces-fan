import chalk from "chalk";
import { getPathOfManuallyCreatedMatchupQuestions, readCurrentManuallyCreatedMatchupQuestions } from "./lib/questionUtils.ts";
import { repos } from "../../../repos.ts";
import { SurveyQuestion } from "@battle-aces-fan/datacontracts";
import { generateAllQuestions } from "./generateQuestions.ts";


const questions = await repos.surveyQuestions.questions.findAll()

await await repos.surveyQuestions.questions.deleteAll()
console.log(chalk.blueBright(`Dropped all ${questions.length} questions`))


Deno.exit(0)