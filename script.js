'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 10;
let highscore = 0;

// document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // check without input
  if (!guess) {
    document.querySelector(`.message`).textContent = 'try putting in a number';
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(`.message`).textContent = '😥 You Lost 👎🏼 ';
      document.querySelector(`.score`).textContent = score;
    }
    // winning guess
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
    }

    document.querySelector(`.highscore`).textContent = highscore;

    document.querySelector(
      `.message`
    ).textContent = `👍🏼 Winner Winner 🐔 Chicken Dinner`;

    document.querySelector(`.number`).style.width = '30rem';

    document.querySelector(`h1`).textContent = 'YOU WIN';

    document.querySelector(`.number`).textContent =
      ' 🎉' + secretNumber + '🎉 ';

    document.querySelector(`.number`).style.color = 'red';

    document.querySelector(`body`).style.backgroundColor = '#60b347';
  } else if (guess !== secretNumber) {
    score--;
    if (score < 1) {
      document.querySelector(`.message`).textContent = '😥 You Lost 👎🏼 ';
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? 'Too high' : 'Too low';
      document.querySelector(`.score`).textContent = score;
    }

    //guess too big
    //   } else if (guess > secretNumber) {
    //     score--;
    //     if (score < 1) {
    //       document.querySelector(`.message`).textContent = '😥 You Lost 👎🏼 ';
    //       document.querySelector(`.score`).textContent = score;
    //     } else {
    //       document.querySelector(`.message`).textContent = 'To high';
    //       document.querySelector(`.score`).textContent = score;
    //     }
    //     //guess too small
    //   } else if (guess < secretNumber && guess > 0) {
    //     score--;
    //     if (score < 1) {
    //       document.querySelector(`.message`).textContent = '😥 You Lost 👎🏼 ';
    //       document.querySelector(`.score`).textContent = score;
    //     } else {
    //       document.querySelector(`.message`).textContent = 'to low';
    //       document.querySelector(`.score`).textContent = score;
    //     }
  }
});

document.querySelector(`.again`).addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  score = 10;

  document.querySelector(`.message`).textContent = `Start guessing...`;

  document.querySelector(`.score`).textContent = score;

  document.querySelector(`.number`).style.width = '15rem';

  document.querySelector(`h1`).textContent = 'Guess My Number!';

  document.querySelector(`.number`).textContent = '?';

  document.querySelector(`.number`).style.color = '#333';

  document.querySelector(`.guess`).value = '';

  document.querySelector(`body`).style.backgroundColor = '#222';
});
