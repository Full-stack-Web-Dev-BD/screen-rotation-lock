'use strict';

// Selecting elements

const btnLeft = document.querySelector('.btn--left');
const mainRight = document.querySelector('.btn--right');
const allBtns = document.querySelectorAll('button');

const currentScore = document.querySelector('.current--score');

// Game mechanics

let chosenNumber = Math.floor(0 + Math.random() * (1 - 0 + 1));

let score = 0;
let wrongAttempt = false;

// get from localStorage

let highscore = 0;

// highscore = Number(localStorage.getItem('highScore'));
// document.querySelector('.current--high-score').textContent = highscore;

let timeoutfun1 = null;
let timeoutfun2 = null;
let bgFlag = null;
// let txFlag = null;

document.addEventListener('DOMContentLoaded', function (e) {
	highscore = Number(localStorage.getItem('highScore'));
	document.querySelector('.current--high-score').textContent = highscore;
	bgFlag = localStorage.getItem('backgroundFlag');
	// txFlag = localStorage.getItem('textFlag');
});

// 0 for left
document.querySelector('.btn--left').addEventListener('click', function () {
	if (chosenNumber === 0) {
		//document.querySelector('.main-50-50').style.backgroundColor = '#60b347';
		//document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun1 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		//document.querySelector('.main-50-50').style.backgroundColor = 'red';
		//document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score').textContent = 0;

		timeoutfun1 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnLeft;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score').textContent = highscore;
		localStorage.setItem('highScore', highscore);

		// adding trophy number here

		updateTrophyNumber(highscore);
	}
});

// 1 for right
document.querySelector('.btn--right').addEventListener('click', function () {
	if (chosenNumber === 1) {
		//document.querySelector('.main-50-50').style.backgroundColor = '#60b347';
		//document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun2 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		//document.querySelector('.main-50-50').style.backgroundColor = 'red';
		//document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});
		document.querySelector('.current--score').innerHTML = 0;
		timeoutfun2 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score').textContent = highscore;
		localStorage.setItem('highScore', highscore);

		updateTrophyNumber(highscore);
	}
});

function halfReset() {
	chosenNumber = Math.floor(0 + Math.random() * (1 - 0 + 1));

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

	//document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.main-50-50').style.backgroundColor = '#222';
	allBtns.forEach((btn) => {
		btn.style.backgroundColor = '#222';
	});
	clearTimeout(timeoutfun1);
	clearTimeout(timeoutfun2);
}

/********************************************/

function updateTrophyNumber(highscore) {
	let trophyNumber = Number(localStorage.getItem('trophyNumber'));

	if (highscore === 5) {
		trophyNumber += 1;
	} else if (highscore === 10) {
		trophyNumber += 2;
	} else if (highscore === 20) {
		trophyNumber += 3;
	} else {
		trophyNumber = trophyNumber;
	}
	localStorage.setItem('trophyNumber', trophyNumber);
}
