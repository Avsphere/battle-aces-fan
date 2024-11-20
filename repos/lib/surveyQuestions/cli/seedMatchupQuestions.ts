import chalk from "chalk";
import {
  getPathOfManuallyCreatedMatchupQuestions,
  readCurrentManuallyCreatedMatchupQuestions,
} from "./lib/questionUtils.ts";
import { repos } from "../../../repos.ts";
import { SurveyQuestion } from "@battle-aces-fan/datacontracts";

console.log(
  chalk.blueBright(
    `Reading matchup questions from ${getPathOfManuallyCreatedMatchupQuestions()}`,
  ),
);

const manuallySuppliedQuestions =
  await readCurrentManuallyCreatedMatchupQuestions();

console.log(
  chalk.blueBright(`Read ${manuallySuppliedQuestions.length} questions`),
);

const allExistingQuestions = await repos.surveyQuestions.questions.findAll();

// now filter out questions that are the same
const newQuestions = manuallySuppliedQuestions.filter(
  (manuallySuppliedQuestion) => {
    return !allExistingQuestions.some((existingQuestion) => {
      const isSame = SurveyQuestion.isSameAsDetails(
        existingQuestion.details,
        manuallySuppliedQuestion,
      );
      return isSame;
    });
  },
);

console.log(chalk.blueBright(`Found ${newQuestions.length} new questions`));

for (const newQuestion of newQuestions) {
  console.log(
    chalk.blueBright(`Creating new question: ${JSON.stringify(newQuestion)}`),
  );
  await repos.surveyQuestions.questions.create({
    details: newQuestion,
    isActive: true,
  });
}

console.log(chalk.greenBright(`Finished seeding matchup questions`));
