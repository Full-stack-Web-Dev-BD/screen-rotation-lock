'use strict';

// Selecting elements

const currentScore = document.querySelector('.current--score-twenty');
const highScore = document.querySelector('.high-score--twenty');
const allBtns = document.querySelectorAll('button');
const btnTopRight = document.querySelector('.btn--top-right');
const btnBottomRight = document.querySelector('.btn--bottom-left');
const btnTopLeft = document.querySelector('.btn--top-left');
const btnBottomLeft = document.querySelector('.btn--bottom-left');

// Game mechanics

let chosenNumber = Math.floor(0 + Math.random() * (3 - 0 + 1));

let score = 0;
let wrongAttempt = false;

// get from localStorage

let highscore = 0;

// highscore = Number(localStorage.getItem('high-score--twenty'));
// document.querySelector('.current--high-score--twenty').textContent = highscore;

let timeoutfun1 = null;
let timeoutfun2 = null;
let timeoutfun3 = null;
let timeoutfun4 = null;
let bgFlag = null;
// let txFlag = null;

document.addEventListener('DOMContentLoaded', function (e) {
	highscore = Number(localStorage.getItem('current--high-score--twenty'));
	document.querySelector('.current--high-score--twenty').textContent =
		highscore;
	bgFlag = localStorage.getItem('backgroundFlag');
	// txFlag = localStorage.getItem('textFlag');
});

// 0 for top-right
document
	.querySelector('.btn--top-right')
	.addEventListener('click', function () {
		if (chosenNumber === 0) {
			// document.querySelector('.main-25-100').style.backgroundColor = '#60b347';
			// document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun1 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			// document.querySelector('.main-25-100').style.backgroundColor = 'red';
			// document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-twenty').textContent = 0;

			timeoutfun1 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}
		const guess = btnTopRight;

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--twenty').textContent =
				highscore;
			localStorage.setItem('current--high-score--twenty', highscore);

			updateTrophyNumber25(highscore);
		}
	});

// 1 for bottom right
document
	.querySelector('.btn--bottom-right')
	.addEventListener('click', function () {
		if (chosenNumber === 1) {
			// document.querySelector('.main-25-100').style.backgroundColor = '#60b347';
			// document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun2 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			// document.querySelector('.main-25-100').style.backgroundColor = 'red';
			// document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});
			document.querySelector('.current--score-twenty').innerHTML = 0;
			timeoutfun2 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--twenty').textContent =
				highscore;
			localStorage.setItem('current--high-score--twenty', highscore);

			updateTrophyNumber25(highscore);
		}
	});

// 2 for top left
document.querySelector('.btn--top-left').addEventListener('click', function () {
	if (chosenNumber === 2) {
		// document.querySelector('.main-25-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun3 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-25-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});
		document.querySelector('.current--score-twenty').innerHTML = 0;
		timeoutfun3 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--twenty').textContent =
			highscore;
		localStorage.setItem('current--high-score--twenty', highscore);

		updateTrophyNumber25(highscore);
	}
});

// 3 for bottom left
document
	.querySelector('.btn--bottom-left')
	.addEventListener('click', function () {
		if (chosenNumber === 3) {
			// document.querySelector('.main-25-100').style.backgroundColor = '#60b347';
			// document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun4 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			// document.querySelector('.main-25-100').style.backgroundColor = 'red';
			// document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});
			document.querySelector('.current--score-twenty').innerHTML = 0;
			timeoutfun4 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--twenty').textContent =
				highscore;
			localStorage.setItem('current--high-score--twenty', highscore);

			updateTrophyNumber25(highscore);
		}
	});

function halfReset() {
	chosenNumber = Math.floor(0 + Math.random() * (3 - 0 + 1));

	if (bgFlag === 'vibrant') {
		setVibrant();
	} else if (bgFlag === 'simple') {
		setSimple();
	} else if (bgFlag === 'premium') {
		setPremimum();
	} else {
		document.querySelector('body').style.backgroundColor = '#222';
	}

	// if (txFlag === 'excess') {
	// 	setExcess();
	// } else if (txFlag === 'elderly') {
	// 	setElderly();
	// } else {
	// 	setNuclear();
	// }

	// document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.main-25-100').style.backgroundColor = '#222';
	allBtns.forEach((btn) => {
		btn.style.backgroundColor = '#222';
	});
	clearTimeout(timeoutfun1);
	clearTimeout(timeoutfun2);
	clearTimeout(timeoutfun3);
	clearTimeout(timeoutfun4);
}

/********************************************/

function setVibrant() {
	document.querySelector('body').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,33,89,1) 0%, rgba(142,191,78,1) 52%, rgba(0,212,255,1) 71%)';

	document.querySelector('.main-25-100').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,33,89,1) 0%, rgba(142,191,78,1) 52%, rgba(0,212,255,1) 71%)';
}

function setSimple() {
	document.querySelector('body').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,66,41,1) 100%, rgba(142,191,78,1) 100%, rgba(0,212,255,1) 100%)';

	document.querySelector('.main-25-100').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,66,41,1) 100%, rgba(142,191,78,1) 100%, rgba(0,212,255,1) 100%)';
}

function setPremimum() {
	document.querySelector('body').style.backgroundImage =
		'radial-gradient(#ffffff 1.75px, transparent 1.75px), radial-gradient(#ffffff 1.75px, #000000 1.75px)';
	document.querySelector('body').style.backgroundSize = '70px 70px';
	document.querySelector('body').style.backgroundPosition = '0 0,35px 35px';

	document.querySelector('.main-25-100').style.backgroundImage =
		'radial-gradient(#ffffff 1.75px, transparent 1.75px), radial-gradient(#ffffff 1.75px, #000000 1.75px)';
	document.querySelector('.main-25-100').style.backgroundSize = '70px 70px';
	document.querySelector('.main-25-100').style.backgroundPosition =
		'0 0,35px 35px';
}

/********************************************/

function updateTrophyNumber25(highScore) {
	let trophyNumber = Number(localStorage.getItem('trophyNumber'));

	if (highScore === 1) {
		trophyNumber += 2;
	} else if (highScore === 10) {
		trophyNumber += 3;
	} else if (highScore === 15) {
		trophyNumber += 4;
	} else {
		trophyNumber = trophyNumber;
	}
	localStorage.setItem('trophyNumber', trophyNumber);
}
