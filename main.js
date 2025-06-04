const readline = require('readline');
const questions = require("./questions")
const calculate = require("./calculate")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];
let index = 0;

console.clear();
function askNext() {
  if (index < questions.length) {
    const question = `\n${index + 1}. ${questions[index]}`

    rl.question(question, (answer) => {
      answers.push(answer);
      index++;
      askNext();
    });
  } else {
    calculate(+answers[0], +answers[1])
    rl.close();
  }
}

askNext();
