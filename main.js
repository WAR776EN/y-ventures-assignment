const readline = require('readline');
const questions = require("./questions")
const calculate = require("./calculate")
const validateInput = require("./inputValidation")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];
let index = 0;

console.clear();
function askNext() {
  try {
    if (index < questions.length) {
      const question = `\n${index + 1}. ${questions[index]}`
  
      rl.question(question, (answer) => {
        validateInput(answer)
        answers.push(answer);
        index++;
        askNext();
      });
    } else {
      calculate(+answers[0], +answers[1])
      rl.close();
    }
  }
  catch(err) {
    rl.close();
  }
  
}

askNext();