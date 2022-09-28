'use strict';

// Selecting elements

const main = document.querySelector('.main');

const shop = document.querySelector('.shop');
const iconShopMenu = document.querySelector('.icon--shop-menu');

const background = document.querySelector('.background');
const iconBackgroundSelect = document.querySelector('.icon--background-select');

const text = document.querySelector('.text');
const iconTextSelect = document.querySelector('.icon--text-select');

const extra = document.querySelector('.extra');
const iconExtraSelect = document.querySelector('.icon--extra-select');

const gameSelect = document.querySelector('.game-select');
const iconGameSelect = document.querySelector('.icon--game-select');

const mainFifty = document.querySelector('.main-50-50');
const iconFifty = document.querySelector('.icon--fifty');

const mainTwenty = document.querySelector('.main-25-100');
const iconTwentyfiveHundred = document.querySelector(
	'.icon--twentyfive-hundred'
);

const mainTen = document.querySelector('.main-10-100');
const iconTenHundred = document.querySelector('.icon--ten-hundred');

const mainOne = document.querySelector('.main-1-100');
const iconOneHundred = document.querySelector('.icon--one-hundred');

// global variables

let trophyNumber = null;
let highScoreOne = null;

// For 50/50 play

document.addEventListener('DOMContentLoaded', function () {
	setGlobalBackground();
	setGlobalFont();

	trophyNumber = Number(localStorage.getItem('trophyNumber'));
	highScoreOne = Number(localStorage.getItem('high-score--one'));
	const trophyNumberContainer = document.querySelector('.trophy-number');
	if (trophyNumberContainer != 'undefined' && trophyNumberContainer != null) {
		trophyNumberContainer.innerHTML = trophyNumber;
	}
});

document.addEventListener('DOMContentLoaded', function () {
	setGlobalBackground();

	setGlobalFont();
});

document.addEventListener('DOMContentLoaded', function () {
	setGlobalBackground();

	//set GlobalFont
	setGlobalFont();
});

document.addEventListener('DOMContentLoaded', function () {
	setGlobalBackground();

	//set GlobalFont
	setGlobalFont();
});

const simpleBG = document.querySelector('.simple-background');
const vibrantBG = document.querySelector('.vibrant-background');
const premiumBG = document.querySelector('.premium-background');

if (simpleBG != 'undefined' && simpleBG != null) {
	simpleBG.addEventListener('click', function () {
		if (trophyNumber >= 5) {
			localStorage.setItem('backgroundFlag', 'simple');
			document.body.style.background =
				'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,66,41,1) 100%, rgba(142,191,78,1) 100%, rgba(0,212,255,1) 100%)';
		} else {
			document.body.style.backgroundColor = '#222';
		}
	});
}

if (vibrantBG != 'undefined' && vibrantBG != null) {
	vibrantBG.addEventListener('click', function () {
		if (trophyNumber >= 20) {
			localStorage.setItem('backgroundFlag', 'vibrant');
			document.querySelector('body').style.background =
				'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,33,89,1) 0%, rgba(142,191,78,1) 52%, rgba(0,212,255,1) 71%)';
		} else {
			// document.body.style.backgroundColor = '#222';
			document.querySelector('body').style.backgroundColor = '#222';
		}
	});
}

if (premiumBG != 'undefined' && premiumBG != null) {
	premiumBG.addEventListener('click', function () {
		if (highScoreOne >= 3) {
			localStorage.setItem('backgroundFlag', 'premium');
			document.body.style.backgroundImage =
				'radial-gradient(#ffffff 1.75px, transparent 1.75px), radial-gradient(#ffffff 1.75px, #000000 1.75px)';
			document.body.style.backgroundSize = '70px 70px';
			document.body.style.backgroundPosition = '0 0,35px 35px';
		} else {
			document.body.style.backgroundColor = '#222';
		}
	});
}

const excessTextBtn = document.querySelector('.excess-text');
const elderlyTextBtn = document.querySelector('.elderly-text');
const nuclearTextBtn = document.querySelector('.nuclear-text');

if (excessTextBtn != 'undefined' && excessTextBtn != null) {
	excessTextBtn.addEventListener('click', function () {
		if (trophyNumber >= 10) {
			//10
			localStorage.setItem('textFlag', 'excess');
			setExcess();
		} else {
			document.body.style.fontFamily = 'Press Start 2P , sans - serif';
		}
	});
}

if (elderlyTextBtn != 'undefined' && elderlyTextBtn != null) {
	elderlyTextBtn.addEventListener('click', function () {
		if (trophyNumber >= 15) {
			//15
			localStorage.setItem('textFlag', 'elderly');
			setElderly();
		} else {
			document.body.style.fontFamily = 'Press Start 2P, sans - serif';
		}
	});
}

if (nuclearTextBtn != 'undefinded' && nuclearTextBtn != null) {
	nuclearTextBtn.addEventListener('click', function () {
		if (trophyNumber >= 25) {
			//25
			localStorage.setItem('textFlag', 'nuclear');
			setNuclear();
		} else {
			document.body.style.backgroundColor = 'Press Start 2P, sans - serif';
		}
	});
}

// document.querySelector('.extra-level').addEventListener('click', function () {
// 	alert('clidkging');
// 	if (trophyNumber === 1) {
// 		location.href = '1:100.html';
// 	} else {
// 		location.href = 'extra.html';
// 	}
// });

function setVibrant() {
	document.querySelector('body').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,33,89,1) 0%, rgba(142,191,78,1) 52%, rgba(0,212,255,1) 71%)';
	const fiftyFifty = document.querySelector('.main-50-50');
	if (fiftyFifty != 'undefined' && fiftyFifty != null) {
		fiftyFifty.style.background =
			'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,33,89,1) 0%, rgba(142,191,78,1) 52%, rgba(0,212,255,1) 71%)';
	}
}

function setSimple() {
	document.querySelector('body').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,66,41,1) 100%, rgba(142,191,78,1) 100%, rgba(0,212,255,1) 100%)';

	const fiftyFifty = document.querySelector('.main-50-50');
	if (fiftyFifty != 'undefined' && fiftyFifty != null) {
		fiftyFifty.style.background =
			'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,66,41,1) 100%, rgba(142,191,78,1) 100%, rgba(0,212,255,1) 100%)';
	}
}

function setPremimum() {
	document.querySelector('body').style.backgroundImage =
		'radial-gradient(#ffffff 1.75px, transparent 1.75px), radial-gradient(#ffffff 1.75px, #000000 1.75px)';
	document.querySelector('body').style.backgroundSize = '70px 70px';
	document.querySelector('body').style.backgroundPosition = '0 0,35px 35px';

	// for 50-50

	const fiftyFifty = document.querySelector('.main-50-50');
	if (fiftyFifty != 'undefined' && fiftyFifty != null) {
		fiftyFifty.style.backgroundImage =
			'radial-gradient(#ffffff 1.75px, transparent 1.75px), radial-gradient(#ffffff 1.75px, #000000 1.75px)';
		fiftyFifty.style.backgroundSize = '70px 70px';
		fiftyFifty.style.backgroundPosition = '0 0,35px 35px';
	}
}

/********************************************/

function setNuclear() {
	document.body.style.fontFamily = 'Monoton,cursive';
}
function setElderly() {
	document.body.style.fontFamily = 'Rubik Moonrocks,cursive';
}

function setExcess() {
	document.body.style.fontFamily = 'Bowlby One, cursive';
}

function setDefaultFont() {
	document.body.style.fontFamily = 'Press Start 2P, sans - serif';
}

function setGlobalFont() {
	if (localStorage.getItem('textFlag') === 'excess') {
		setExcess();
	} else if (localStorage.getItem('textFlag') === 'elderly') {
		setElderly();
	} else if (localStorage.getItem('textFlag') === 'nuclear') {
		setNuclear();
	} else {
		setDefaultFont();
	}
}

function setGlobalBackground() {
	if (localStorage.getItem('backgroundFlag') === 'simple') {
		setSimple();
	} else if (localStorage.getItem('backgroundFlag') === 'vibrant') {
		setVibrant();
	} else if (localStorage.getItem('backgroundFlag') === 'premium') {
		setPremimum();
	} else {
		setDefaultBackground();
	}
}

function setDefaultBackground() {
	document.querySelector('body').style.backgroundColor = '#222';
}

function setTrophyNumber() {
	const trophyNumberContainer = document.querySelector('.trophy-number');
	if (trophyNumberContainer != 'undefined' && trophyNumberContainer != null) {
		trophyNumberContainer.innerHTML = trophyNumber;
	}
}
