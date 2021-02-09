'use strict';

/*document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const checkNumber = function () {
    let guess = Number(document.querySelector('.guess').value);

    //No input
    if (guess === '0') {
        displayMessage('Number must be between 1 and 20! ')
    }


    else if (!guess && guess !== 0) {
        displayMessage('No number! Type something, moron!');

        //When player winsssss
    } else if (guess === secretNumber) {
        displayMessage('💥🎉🎊Correct Number!!!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {

            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //When guess is too HIGH    
    else if (guess !== secretNumber && guess <= 20 && guess >= 1) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Loose');
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < 1 || guess > 20) {
        displayMessage("Number must be between 1 and 20! ");
    }



    //to be refactored
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You Loose';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Loose';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
};

document.querySelector('.check').addEventListener('click', checkNumber);

const resetGame = function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    score = 20;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');

};
document.querySelector('.again').addEventListener('click', resetGame);