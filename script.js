'use strict';
// console.log(document.querySelector('.message').textContent);
// //DOM allows JS to access HTML and CSS to maninpulate them
// //DOM !== javascript, DOM is apart of Web APIs that can interact with JS

// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent); //Changed text content from Start guessing... to Correct Number!

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('No number!!!');
  }
  //When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; //changes background color to green when you win the game

    document.querySelector('.number').style.width = '30rem'; //expands width when won

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//adds event listiner that checks for a click, enter in value, click check, logs number(value) to console. Calls function once clicked(the event is listening for the click)

//Again button restores everything to default values if you want to play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing');

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222'; //restore default css

  document.querySelector('.number').style.width = '15rem'; //restores default css
});
