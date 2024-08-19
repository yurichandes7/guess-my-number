'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log('hi');
console.log(document.querySelector('.message').textContent);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO Number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 CORRECT number!';
    document.querySelector('.questionbox').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.Highscore').textContent = highscore;
      console.log('hi');
      console.log(document.querySelector('.Highscore').textContent);
    }
  } else {
    if (guess > number) {
      document.querySelector('.message').textContent = '📈 Too high!';
      if (score > 0) {
        score--;
        document.querySelector('.Score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💥 You lose!';
      }
    } else {
      document.querySelector('.message').textContent = '📉 Too low!';
      if (score > 0) {
        score--;
        document.querySelector('.Score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💥 You lose!';
      }
    }
  }
});
document.querySelector('.again-box').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.questionbox').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.Score').textContent = score;
  document.querySelector('.guess').value = ' ';
});
