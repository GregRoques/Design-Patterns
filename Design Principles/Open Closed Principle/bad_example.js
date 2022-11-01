function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. false");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer:");
        break;
      default:
        console.log("N/A");
        break;
    }
  });
}

const questions = [
  {
    type: "boolean",
    description: "I like ice cream.",
  },
  {
    type: "multipleChoice",
    description: "What is your favorite flavor?",
    options: ["vanilla", "chocolate", "strawberry"],
  },
  {
    type: "text",
    description: "What is your favorite brand?",
  },
  {
    type: "range",
    description:
      "we violated the open/closed principle because we can not add this new type without going into the original function, and don't want to add something to this function outside of it",
  },
];
