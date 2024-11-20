import type { SurveyQuestionDetails } from "@battle-aces-fan/datacontracts";

export const CUSTOM_TEXT_QUESTIONS: SurveyQuestionDetails[] = [
  {
    kind: "basic",
    subKind: "text",
    text: "Does unit surrounding work like you expect it to?",
    tags: ["most of the time", "rarely", "meh", "hurts my soul"],
  },
  {
    kind: "basic",
    subKind: "text",
    text: "Do you enjoy melee vs blink micro?",
    tags: [
      "most of the time",
      "rarely",
      "meh",
      "hurts my soul",
      "fun",
      "frustrating",
    ],
  },
  {
    kind: "basic",
    subKind: "text",
    text: "Do you enjoy the way target firing works?",
    tags: [
      "most of the time",
      "rarely",
      "meh",
      "feels inconsistent",
      "creates a fun dynamic",
      "frustrating",
    ],
  },
  {
    kind: "basic",
    subKind: "text",
    text: "Do you feel that units are consistent in their behavior?",
    tags: [
      "most of the time",
      "rarely",
      "not in collision situations",
      "meh",
      "frustrating",
    ],
  },
  {
    kind: "basic",
    subKind: "text",
    text: "Do you feel that melee units allow for enough skill expression?",
    tags: ["most of the time", "rarely", "only in the early game"],
  },
  {
    kind: "basic",
    subKind: "text",
    text: "Do you enjoy playing against mortar units?",
    tags: [
      "most of the time",
      "rarely",
      "they make positioning more interesting",
      "they hurt my soul",
    ],
  },
];
