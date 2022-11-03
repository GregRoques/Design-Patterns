// we are going to break print/quiz out into smaller components

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoies() {
    console.log("1. True");
    console.log("2. False");
  }
}

class multipleChoice {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoies() {
    this.options.forEach((option, index) => {
      console.log(`${index}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoies() {
    console.log("Anwer: _________________________");
  }
}

const printQuiz = (questions) => {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoies();
    console.log(" ");
  });
}; // never had to open or close this to make changes

const questions = [
  new BooleanQuestion("I like ice cream."),

  new multipleChoice("What is your favorite flavor?", [
    "vanilla",
    "chocolate",
    "strawberry",
  ]),
  new TextQuestion("What is your favorite brand?"),
];
