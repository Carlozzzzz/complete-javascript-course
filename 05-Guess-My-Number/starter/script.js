'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Event
// what will happen, event handler

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// resetting the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  console.log(score, secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // game logic

  // when there is no input
  if (!guess) {
    console.log(guess);
    displayMessage('No number');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Corrent Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When the guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // using ternary operator
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
    }
  }
});
