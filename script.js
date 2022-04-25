'use strict';

const displayMessage = (message) => document.querySelector('.message').textContent = message;
const displayNumber = (number) => document.querySelector('.number').textContent = number;
const bodyBackgroundColor = (color) => document.querySelector('body').style.backgroundColor = color;
const scoreNumber = (number) => document.querySelector('.score').textContent = number;
const numberGenerator = () => Math.trunc(Math.random()*20) + 1;

let secretNumber = numberGenerator();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    const isScoreGreaterZero = Number(document.querySelector('.score').textContent) > 1;

    if (!guess) {
        displayMessage("❌ No Number!");
    } else if (isScoreGreaterZero) {
        if (guess === secretNumber) {
            displayMessage("🎊 Correct Number!!");
            displayNumber(secretNumber);
            bodyBackgroundColor("#60b347");
            document.querySelector(".number").style.width = "30rem";
            if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }
        } else if (guess !== secretNumber) {
            displayMessage(`${guess > secretNumber?"📈 To high!":"📉 To low!"}`);
            score --;
            scoreNumber(score);
        }
    } else {
        displayMessage("Game over!");
        scoreNumber(0);
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = numberGenerator();
    document.querySelector('.guess').value = "";
    displayNumber("?");
    displayMessage("Start guessing");
    bodyBackgroundColor("#222");
    scoreNumber(score);
    document.querySelector(".number").style.width = "15rem";

});
