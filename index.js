var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " Do you know Tushar? ");
console.log("Answer five questions and then decide yourself.");
console.log("Please answer the questions by entering [a,b,c] or [A, B, C]");
function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer) {
    console.log("You are right!");
    score++;
  }
  else {
    console.log("You are wrong");
  }
  console.log("The score is " + score);
  console.log("---------------------");
}

// array of objects
var questions = [{
  question: "Where do I live? \n A. Pune \n B. Satara \n C. Mumbai \n",
  answer: "A"
}, {
  question: "What is Tushar's favourite superhero? \n A. Ironman \n B. Batman \n C. Superman \n",
  answer: "B"
}, {
  question: "What is Tushar's favourite Indian football club? \n A. Bengaluru FC \n B. FC Goa \n C. Mumbai City FC \n",
  answer: "C"
}, {
  question: "What is Tushar's European football club? \n A. Manchester United FC \n B. FC Barcelona \n C. Liverpool FC \n",
  answer: "A"
}, {
  question: "What is Tushar's favourite sport? \n A. Basketball \n B. Volleyball \n C. Football \n",
  answer: "C"
}];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log('\n\n***********************************');
console.log('Your final score is ' + score); console.log('***********************************\n\n');