const playAgain = document.querySelector(".button");
const randNumber = document.querySelector(".number");
const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const input = document.querySelector(".input");
const displayScore = document.querySelector(".score");
let highScore = document.querySelector(".highScore");
const body = document.querySelector("body");

let number = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let topScore = 0;

check.addEventListener("click", function () {
  const entered = Number(input.value);

  if (!entered) { // If a number is not entered
      guess.textContent = "No Number Entered!⛔";
  }
  else if (entered === number) { // If an entered number is correct
      guess.textContent = "Correct Number!🎉";
      body.style.backgroundColor = "#60b347";
      randNumber.textContent = number;
      input.disabled = true;

      if (score < topScore) {
          highScore.textContent = topScore;
      }
      else {
          topScore = score;
          highScore.textContent = topScore;
      }
  }
  else if (entered !== number) { // If an entered number is wrong
      if (score > 1) {
          guess.textContent = entered > number ? "Too High...📈" : "Too Low...📈";
          score--;
          displayScore.textContent = score;
      }
      else {
          guess.textContent = "You Lost The Game!💀";
          displayScore.textContent = 0;
          randNumber.textContent = number;
          body.style.backgroundColor = "#FF4122";
          input.disabled = true;
          
      }
  }
});

input.addEventListener("keypress", function () {
    if (event.key === "Enter") {
        document.getElementById("check").click();
    }
})

playAgain.addEventListener("click", function () { // Play Again
    number = Math.trunc(Math.random() * 20) + 1;
    randNumber.textContent = "?";
    score = 5;
    displayScore.textContent = score;
    guess.textContent = "Start guessing...";
    body.style.backgroundColor = "#222222";
    input.disabled = false;
    input.value = "";
})