const question = ["What year did Rick Astley release his hit song Never Gonna Give You Up?", "At what temperature does water boil?", "What is the 13th prime number?", "When is my birthday?", "What is the most important chess piece?", "When was running invented?", "How many holes in a polo?", "What is the y-intercept of the equation y = x+5/2x+6?", "What is the meaning of life?", "Why?", "What should you never expect?", "When did the dinosaurs become extinct?", "Is that Ryan Yang?", "Which video game had the highest amount of sales?", "Which AP exam had the lowest percentage of people to get a 5?"];
const answers = [["1985", "1987", "1993", "He never released it, rickrolling is a hoax"], ["212 degrees Celsius", "0 degrees Celsius", "100 degrees Fahrenheit", "373.15 Kelvin"], ["13", "59", "41", "0"], ["August 2nd", "Febuary 8th", "June 29th", "Febuary 30th"], ["Queen", "King", "Knight", "Pawn"], ["1748", "750,000 years ago", "Never", "1968"], ["1", "2", "3", "4"], ["5", "-5", "5/6", "5/12"], ["We love, we live, we lie", "42", "Get all A's in school", "Live life"], ["Excuse me?", "?", "Why what?", "Why not?"], ["A pop quiz", "The Spanish Inquisition", "A your mom joke", "That your answer is correct"], ["Centuries ago", "65,000,00 years ago", "Never", "The day of Ryan Yang"], ["Yes", "No", "IS that Ryan Yang?", "JavaScript"], ["Call of Duty: Modern Warfare", "Duck Hunt", "Wii Sports Resort", "New Super Mario Bros"], ["AP Physics 1", "AP 3D Art & Design", "AP Spanish Literature and Culture", "AP Seminar"]];
const correctAnswer = ["2", "4", "3", "1", "2", "3", "4", "3", "2", "4", "2", "1", "4", "3", "2"];
const numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
const randomNum = [];
let questionNum = 1;
let random;

for (let i = 0; i < 10; i++) {
	random = Math.floor(Math.random() * numList.length);
	randomNum.push(numList[random]);
	numList.splice(random,1);
}

$(document).ready(function(){
  for (let i = 0; i < 10; i++) {
	$("#random" + (i + 1)).text(question[randomNum[i]]);
    $("#answer" + ((i * 4) + 1)).text(answers[randomNum[i]][0]);
    $("#answer" + ((i * 4) + 2)).text(answers[randomNum[i]][1]);
    $("#answer" + ((i * 4) + 3)).text(answers[randomNum[i]][2]);
    $("#answer" + ((i * 4) + 4)).text(answers[randomNum[i]][3]);
  }
});