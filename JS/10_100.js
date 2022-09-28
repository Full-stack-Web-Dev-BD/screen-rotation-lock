'use strict';

// Selecting elements

const currentScore = document.querySelector('.current--score-ten');
const highScore = document.querySelector('.high-score--ten');
const allBtns = document.querySelectorAll('button');
//const iconTenHundred = document.querySelector('.icon--ten-hundred');
const btnTopRight = document.querySelector('.btn--top-right');
const btnTopLeft = document.querySelector('.btn--top-left');
const btnUpperRight = document.querySelector('.btn--upper-right');
const btnUpperLeft = document.querySelector('.btn--upper-left');
const btnCentreRight = document.querySelector('.btn--centre-right');
const btnCentreLeft = document.querySelector('.btn--centre-left');
const btnLowerRight = document.querySelector('.btn--lower-right');
const btnLowerLeft = document.querySelector('.btn--lower-left');
const btnBottomRight = document.querySelector('.btn--bottom-right');
const btnBottomLeft = document.querySelector('.btn--bottom-left');

// Game mechanics

let chosenNumber = Math.floor(0 + Math.random() * (9 - 0 + 1));

let score = 0;
let wrongAttempt = false;

// get from localStorage

let highscore = 0;

// highscore = Number(localStorage.getItem('high-score--ten'));
// document.querySelector('.current--high-score--ten').textContent = highscore;

let timeoutfun1 = null;
let timeoutfun2 = null;
let timeoutfun3 = null;
let timeoutfun4 = null;
let timeoutfun5 = null;
let timeoutfun6 = null;
let timeoutfun7 = null;
let timeoutfun8 = null;
let timeoutfun9 = null;
let timeoutfun10 = null;
let bgFlag = null;
// let txFlag = null;

document.addEventListener('DOMContentLoaded', function (e) {
	highscore = Number(localStorage.getItem('current--high-score--ten'));
	document.querySelector('.current--high-score--ten').textContent = highscore;
	bgFlag = localStorage.getItem('backgroundFlag');
	// txFlag = localStorage.getItem('textFlag');
});

// 0 for top-right
document
	.querySelector('.btn--top-right')
	.addEventListener('click', function () {
		if (chosenNumber === 0) {
			debugger;
			//document.querySelector('.main-10-100').style.backgroundColor = '#60b347';
			//document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun1 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			//document.querySelector('.main-10-100').style.backgroundColor = 'red';
			//document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-ten').textContent = 0;

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
			document.querySelector('.current--high-score--ten').textContent =
				highscore;
			localStorage.setItem('current--high-score--ten', highscore);

			updateTrophyNumber10(highscore);
		}
	});

// 1 for top-left
document.querySelector('.btn--top-left').addEventListener('click', function () {
	if (chosenNumber === 1) {
		//document.querySelector('.main-10-100').style.backgroundColor = '#60b347';
		//document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun2 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		//document.querySelector('.main-10-100').style.backgroundColor = 'red';
		//document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-ten').textContent = 0;

		timeoutfun2 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTopLeft;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--ten').textContent = highscore;
		localStorage.setItem('current--high-score--ten', highscore);

		updateTrophyNumber10(highscore);
	}
});

// 2 for upper-right
document
	.querySelector('.btn--upper-right')
	.addEventListener('click', function () {
		if (chosenNumber === 2) {
			//document.querySelector('.main-10-100').style.backgroundColor = '#60b347';
			//document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun3 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			//document.querySelector('.main-10-100').style.backgroundColor = 'red';
			//document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-ten').textContent = 0;

			timeoutfun3 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}
		const guess = btnUpperRight;

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--ten').textContent =
				highscore;
			localStorage.setItem('current--high-score--ten', highscore);

			updateTrophyNumber10(highscore);
		}
	});

// 3 for upper-left
document
	.querySelector('.btn--upper-left')
	.addEventListener('click', function () {
		if (chosenNumber === 3) {
			//document.querySelector('.main-10-100').style.backgroundColor = '#60b347';
			//document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun4 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			//document.querySelector('.main-10-100').style.backgroundColor = 'red';
			//document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-ten').textContent = 0;

			timeoutfun4 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}
		const guess = btnUpperLeft;

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--ten').textContent =
				highscore;
			localStorage.setItem('current--high-score--ten', highscore);

			updateTrophyNumber10(highscore);
		}
	});

// 4 for centre-right
document
	.querySelector('.btn--centre-right')
	.addEventListener('click', function () {
		if (chosenNumber === 4) {
			//document.querySelector('.main-10-100').style.backgroundColor = '#60b347';
			//document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun5 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			//document.querySelector('.main-10-100').style.backgroundColor = 'red';
			//document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-ten').textContent = 0;

			timeoutfun5 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}
		const guess = btnCentreight;

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--ten').textContent =
				highscore;
			localStorage.setItem('current--high-score--ten', highscore);

			updateTrophyNumber10(highscore);
		}
	});

// 5 for centre-left
document
	.querySelector('.btn--centre-left')
	.addEventListener('click', function () {
		if (chosenNumber === 5) {
			//document.querySelector('.main-10-100').style.backgroundColor = '#60b347';
			//document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun6 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			//document.querySelector('.main-10-100').style.backgroundColor = 'red';
			//document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-ten').textContent = 0;

			timeoutfun6 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}
		const guess = btnCentreLeft;

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--ten').textContent =
				highscore;
			localStorage.setItem('current--high-score--ten', highscore);

			updateTrophyNumber10(highscore);
		}
	});

// 6 for lower-right
document
	.querySelector('.btn--lower-right')
	.addEventListener('click', function () {
		if (chosenNumber === 6) {
			//document.querySelector('.main-10-100').style.backgroundColor = '#60b347';
			//document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun7 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			//document.querySelector('.main-10-100').style.backgroundColor = 'red';
			//document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-ten').textContent = 0;

			timeoutfun7 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}
		const guess = btnLowerRight;

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--ten').textContent =
				highscore;
			localStorage.setItem('current--high-score--ten', highscore);

			updateTrophyNumber10(highscore);
		}
	});

// 7 for lower-left
document
	.querySelector('.btn--lower-left')
	.addEventListener('click', function () {
		if (chosenNumber === 7) {
			//document.querySelector('.main-10-100').style.backgroundColor = '#60b347';
			//document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun8 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			//document.querySelector('.main-10-100').style.backgroundColor = 'red';
			//document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-ten').textContent = 0;

			timeoutfun8 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}
		const guess = btnLowerLeft;

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--ten').textContent =
				highscore;
			localStorage.setItem('current--high-score--ten', highscore);
			updateTrophyNumber10(highscore);
		}
	});

// 8 for bottom-right
document
	.querySelector('.btn--bottom-right')
	.addEventListener('click', function () {
		if (chosenNumber === 8) {
			//document.querySelector('.main-10-100').style.backgroundColor = '#60b347';
			//document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun9 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			//document.querySelector('.main-10-100').style.backgroundColor = 'red';
			//document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-ten').textContent = 0;

			timeoutfun9 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}
		const guess = btnBottomRight;

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--ten').textContent =
				highscore;
			localStorage.setItem('current--high-score--ten', highscore);

			updateTrophyNumber10(highscore);
		}
	});

// 9 for bottom-left
document
	.querySelector('.btn--bottom-left')
	.addEventListener('click', function () {
		if (chosenNumber === 9) {
			//document.querySelector('.main-10-100').style.backgroundColor = '#60b347';
			//document.querySelector('body').style.backgroundColor = '#60b347';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
			timeoutfun10 = setTimeout(() => {
				halfReset();
			}, 1000);
		} else {
			//document.querySelector('.main-10-100').style.backgroundColor = 'red';
			//document.querySelector('body').style.backgroundColor = 'red';
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-ten').textContent = 0;

			timeoutfun10 = setTimeout(() => {
				halfReset();
			}, 1000);
			score = 0;
			return;
		}
		const guess = btnBottomLeft;

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--ten').textContent =
				highscore;
			localStorage.setItem('current--high-score--ten', highscore);

			updateTrophyNumber10(highscore);
		}
	});

function halfReset() {
	chosenNumber = Math.floor(0 + Math.random() * (9 - 0 + 1));

	if (bgFlag === 'simple') {
		setSimple();
	} else if (bgFlag === 'vibrant') {
		setVibrant();
	} else if (bgFlag === 'premium') {
		setPremimum();
	} else {
		document.querySelector('body').style.backgroundColor = '#222';
	}

	document.querySelector('.main-10-100').style.backgroundColor = '#222';
	allBtns.forEach((btn) => {
		btn.style.backgroundColor = '#222';
	});
	clearTimeout(timeoutfun1);
	clearTimeout(timeoutfun2);
	clearTimeout(timeoutfun3);
	clearTimeout(timeoutfun4);
	clearTimeout(timeoutfun5);
	clearTimeout(timeoutfun6);
	clearTimeout(timeoutfun7);
	clearTimeout(timeoutfun8);
	clearTimeout(timeoutfun9);
	clearTimeout(timeoutfun10);
}

/********************************************/

function setVibrant() {
	document.querySelector('body').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,33,89,1) 0%, rgba(142,191,78,1) 52%, rgba(0,212,255,1) 71%)';

	document.querySelector('.main-10-100').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,33,89,1) 0%, rgba(142,191,78,1) 52%, rgba(0,212,255,1) 71%)';
}

function setSimple() {
	document.querySelector('body').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,66,41,1) 100%, rgba(142,191,78,1) 100%, rgba(0,212,255,1) 100%)';

	document.querySelector('.main-10-100').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,66,41,1) 100%, rgba(142,191,78,1) 100%, rgba(0,212,255,1) 100%)';
}

function setPremimum() {
	document.querySelector('body').style.backgroundImage =
		'radial-gradient(#ffffff 1.75px, transparent 1.75px), radial-gradient(#ffffff 1.75px, #000000 1.75px)';
	document.querySelector('body').style.backgroundSize = '70px 70px';
	document.querySelector('body').style.backgroundPosition = '0 0,35px 35px';

	document.querySelector('.main-10-100').style.backgroundImage =
		'radial-gradient(#ffffff 1.75px, transparent 1.75px), radial-gradient(#ffffff 1.75px, #000000 1.75px)';
	document.querySelector('.main-10-100').style.backgroundSize = '70px 70px';
	document.querySelector('.main-10-100').style.backgroundPosition =
		'0 0,35px 35px';
}

/********************************************/

function updateTrophyNumber10(highScore) {
	debugger;
	let trophyNumber = Number(localStorage.getItem('trophyNumber'));

	if (highScore === 1) {
		trophyNumber += 3;
	} else if (highScore === 5) {
		trophyNumber += 5;
	} else if (highScore === 10) {
		trophyNumber += 7;
	} else {
		trophyNumber = trophyNumber;
	}
	localStorage.setItem('trophyNumber', trophyNumber);
}
