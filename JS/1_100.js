'use strict';

// Selecting elements

const currentScore = document.querySelector('.current--score-one');
const highScore = document.querySelector('.high-score--one');

const allBtns = document.querySelectorAll('button');

const btnOne = document.querySelector('.btn--1');
const btnTwo = document.querySelector('.btn--2');
const btnThree = document.querySelector('.btn--3');
const btnFour = document.querySelector('.btn--4');
const btnFive = document.querySelector('.btn--5');
const btnSix = document.querySelector('.btn--6');
const btnSeven = document.querySelector('.btn--7');
const btnEight = document.querySelector('.btn--8');
const btnNine = document.querySelector('.btn--9');
const btnTen = document.querySelector('.btn--10');
const btnEleven = document.querySelector('.btn--11');
const btnTwelve = document.querySelector('.btn--12');
const btnThirteen = document.querySelector('.btn--13');
const btnFourteen = document.querySelector('.btn--14');
const btnFifteen = document.querySelector('.btn--15');
const btnSixteen = document.querySelector('.btn--16');
const btnSeventeen = document.querySelector('.btn--17');
const btnEighteen = document.querySelector('.btn--18');
const btnNineteen = document.querySelector('.btn--19');
const btnTwenty = document.querySelector('.btn--20');
const btnTwentyOne = document.querySelector('.btn--22');
const btnTwentyTwo = document.querySelector('.btn--23');
const btnTwentyThree = document.querySelector('.btn--23');
const btnTwentyFour = document.querySelector('.btn--24');
const btnTwentyFive = document.querySelector('.btn--25');
const btnTwentySix = document.querySelector('.btn--26');
const btnTwentySeven = document.querySelector('.btn--27');
const btnTwentyEight = document.querySelector('.btn--28');
const btnTwentyNine = document.querySelector('.btn--29');
const btnThirty = document.querySelector('.btn--30');
const btnThirtyOne = document.querySelector('.btn--31');
const btnThirtyTwo = document.querySelector('.btn--32');
const btnThirtyThree = document.querySelector('.btn--33');
const btnThirtyFour = document.querySelector('.btn--34');
const btnThirtyFive = document.querySelector('.btn--35');
const btnThirtySix = document.querySelector('.btn--36');
const btnThirtySeven = document.querySelector('.btn--37');
const btnThirtyEight = document.querySelector('.btn--38');
const btnThirtyNine = document.querySelector('.btn--39');
const btnFourty = document.querySelector('.btn--40');
const btnFourtyOne = document.querySelector('.btn--41');
const btnFourtyTwo = document.querySelector('.btn--42');
const btnFourtyThree = document.querySelector('.btn--43');
const btnFourtyFour = document.querySelector('.btn--44');
const btnFourtyFive = document.querySelector('.btn--45');
const btnFourtySix = document.querySelector('.btn--46');
const btnFourtySeven = document.querySelector('.btn--47');
const btnFourtyEight = document.querySelector('.btn--48');
const btnFourtyNine = document.querySelector('.btn--49');
const btnFifty = document.querySelector('.btn--50');
const btnFiftyOne = document.querySelector('.btn--51');
const btnFiftyTwo = document.querySelector('.btn--52');
const btnFiftyThree = document.querySelector('.btn--53');
const btnFiftyFour = document.querySelector('.btn--54');
const btnFiftyFive = document.querySelector('.btn--55');
const btnFiftySix = document.querySelector('.btn--56');
const btnFiftySeven = document.querySelector('.btn--57');
const btnFiftyEight = document.querySelector('.btn--58');
const btnFiftyNine = document.querySelector('.btn--59');
const btnSixty = document.querySelector('.btn--60');
const btnSixtyOne = document.querySelector('.btn--61');
const btnSixtyTwo = document.querySelector('.btn--62');
const btnSixtyThree = document.querySelector('.btn--63');
const btnSixtyFour = document.querySelector('.btn--64');
const btnSixtyFive = document.querySelector('.btn--65');
const btnSixtySix = document.querySelector('.btn--66');
const btnSixtySeven = document.querySelector('.btn--67');
const btnSixtyEight = document.querySelector('.btn--68');
const btnSixtyNine = document.querySelector('.btn--69');
const btnSeventy = document.querySelector('.btn--70');
const btnSeventyOne = document.querySelector('.btn--71');
const btnSeventyTwo = document.querySelector('.btn--72');
const btnSeventyThree = document.querySelector('.btn--73');
const btnSeventyFour = document.querySelector('.btn--74');
const btnSeventyFive = document.querySelector('.btn--75');
const btnSeventySix = document.querySelector('.btn--76');
const btnSeventySeven = document.querySelector('.btn--77');
const btnSeventyEight = document.querySelector('.btn--78');
const btnSeventyNine = document.querySelector('.btn--79');
const btnEighty = document.querySelector('.btn--80');
const btnEightyOne = document.querySelector('.btn--81');
const btnEightyTwo = document.querySelector('.btn--82');
const btnEightyThree = document.querySelector('.btn--83');
const btnEightyFour = document.querySelector('.btn--84');
const btnEightyFive = document.querySelector('.btn--85');
const btnEightySix = document.querySelector('.btn--86');
const btnEightySeven = document.querySelector('.btn--87');
const btnEightyEight = document.querySelector('.btn--88');
const btnEightyNine = document.querySelector('.btn--89');
const btnNinety = document.querySelector('.btn--90');
const btnNinetyOne = document.querySelector('.btn--91');
const btnNinetyTwo = document.querySelector('.btn--92');
const btnNinetyThree = document.querySelector('.btn--93');
const btnNinetyFour = document.querySelector('.btn--94');
const btnNinetyFive = document.querySelector('.btn--95');
const btnNinetySix = document.querySelector('.btn--96');
const btnNinetySeven = document.querySelector('.btn--97');
const btnNinetyEight = document.querySelector('.btn--98');
const btnNinetyNine = document.querySelector('.btn--99');
const btnOneHundred = document.querySelector('.btn--100');

// Game mechanics

 let chosenNumber = Math.floor(0 + Math.random() * (99 - 0 + 1));

//let chosenNumber = 1;

let score = 0;
let wrongAttempt = false;

// get from localStorage

let highscore = 0;

highscore = Number(localStorage.getItem('high-score--one'));
document.querySelector('.current--high-score--one').textContent = highscore;

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
let timeoutfun11 = null;
let timeoutfun12 = null;
let timeoutfun13 = null;
let timeoutfun14 = null;
let timeoutfun15 = null;
let timeoutfun16 = null;
let timeoutfun17 = null;
let timeoutfun18 = null;
let timeoutfun19 = null;
let timeoutfun20 = null;
let timeoutfun21 = null;
let timeoutfun22 = null;
let timeoutfun23 = null;
let timeoutfun24 = null;
let timeoutfun25 = null;
let timeoutfun26 = null;
let timeoutfun27 = null;
let timeoutfun28 = null;
let timeoutfun29 = null;
let timeoutfun30 = null;
let timeoutfun31 = null;
let timeoutfun32 = null;
let timeoutfun33 = null;
let timeoutfun34 = null;
let timeoutfun35 = null;
let timeoutfun36 = null;
let timeoutfun37 = null;
let timeoutfun38 = null;
let timeoutfun39 = null;
let timeoutfun40 = null;
let timeoutfun41 = null;
let timeoutfun42 = null;
let timeoutfun43 = null;
let timeoutfun44 = null;
let timeoutfun45 = null;
let timeoutfun46 = null;
let timeoutfun47 = null;
let timeoutfun48 = null;
let timeoutfun49 = null;
let timeoutfun50 = null;
let timeoutfun51 = null;
let timeoutfun52 = null;
let timeoutfun53 = null;
let timeoutfun54 = null;
let timeoutfun55 = null;
let timeoutfun56 = null;
let timeoutfun57 = null;
let timeoutfun58 = null;
let timeoutfun59 = null;
let timeoutfun60 = null;
let timeoutfun61 = null;
let timeoutfun62 = null;
let timeoutfun63 = null;
let timeoutfun64 = null;
let timeoutfun65 = null;
let timeoutfun66 = null;
let timeoutfun67 = null;
let timeoutfun68 = null;
let timeoutfun69 = null;
let timeoutfun70 = null;
let timeoutfun71 = null;
let timeoutfun72 = null;
let timeoutfun73 = null;
let timeoutfun74 = null;
let timeoutfun75 = null;
let timeoutfun76 = null;
let timeoutfun77 = null;
let timeoutfun78 = null;
let timeoutfun79 = null;
let timeoutfun80 = null;
let timeoutfun81 = null;
let timeoutfun82 = null;
let timeoutfun83 = null;
let timeoutfun84 = null;
let timeoutfun85 = null;
let timeoutfun86 = null;
let timeoutfun87 = null;
let timeoutfun88 = null;
let timeoutfun89 = null;
let timeoutfun90 = null;
let timeoutfun91 = null;
let timeoutfun92 = null;
let timeoutfun93 = null;
let timeoutfun94 = null;
let timeoutfun95 = null;
let timeoutfun96 = null;
let timeoutfun97 = null;
let timeoutfun98 = null;
let timeoutfun99 = null;
let timeoutfun100 = null;
let bgFlag = null;

document.addEventListener('DOMContentLoaded', function (e) {
	highscore = Number(localStorage.getItem('high-score--one'));
	document.querySelector('.current--high-score--one').textContent = highscore;
	bgFlag = localStorage.getItem('backgroundFlag');
	// txFlag = localStorage.getItem('textFlag');
});

// click Function

allBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const classList = e.target.classList;

		const clickedBtn = classList.toString().split('--').pop();
		if (Number(clickedBtn) - 1 === chosenNumber) {
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = '#60b347';
			});
			score++;
		} else {
			allBtns.forEach((btn) => {
				btn.style.backgroundColor = 'red';
			});

			document.querySelector('.current--score-one').textContent = 0;

			score = 0;

			timeoutfun1 = setTimeout(() => {
				halfReset();
			}, 1000);

			return;
		}

		timeoutfun1 = setTimeout(() => {
			halfReset();
		}, 1000);

		currentScore.innerHTML = score;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.current--high-score--one').textContent =
				highscore;
			localStorage.setItem('high-score--one', highscore);
		}
	});
});

// 0 for 1
// document.querySelector('.btn--1').addEventListener('click', function () {
// 	if (chosenNumber === 0) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});

// 		score++;
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		score = 0;

// 		timeoutfun1 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);

// 		return;
// 	}

// 	timeoutfun1 = setTimeout(() => {
// 		halfReset();
// 	}, 1000);

// 	const guess = btnOne;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// 1 for 2
// document.querySelector('.btn--2').addEventListener('click', function () {
// 	if (chosenNumber === 1) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun2 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun2 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnTwo;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// 2 for 3
// document.querySelector('.btn--3').addEventListener('click', function () {
// 	if (chosenNumber === 2) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun3 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun3 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnThree;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// // 3 for 4
// document.querySelector('.btn--4').addEventListener('click', function () {
// 	if (chosenNumber === 3) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun4 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun4 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnFour;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// // 4 for 5
// document.querySelector('.btn--5').addEventListener('click', function () {
// 	if (chosenNumber === 4) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun5 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun5 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnFive;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// // 5 for 6
// document.querySelector('.btn--6').addEventListener('click', function () {
// 	if (chosenNumber === 5) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun6 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun6 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnSix;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// 6 for 7
// document.querySelector('.btn--7').addEventListener('click', function () {
// 	if (chosenNumber === 6) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun7 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun7 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnSeven;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// // 7 for 8
// document.querySelector('.btn--8').addEventListener('click', function () {
// 	if (chosenNumber === 7) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun8 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun8 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnEight;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// 8 for 9
// document.querySelector('.btn--9').addEventListener('click', function () {
// 	if (chosenNumber === 8) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun9 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun9 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnNine;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// // 9 for 10
// document.querySelector('.btn--10').addEventListener('click', function () {
// 	if (chosenNumber === 9) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun10 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun10 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnTen;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// // 10 for 11
// document.querySelector('.btn--11').addEventListener('click', function () {
// 	if (chosenNumber === 10) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun11 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun11 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnEleven;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// // 11 for 12
// document.querySelector('.btn--12').addEventListener('click', function () {
// 	if (chosenNumber === 11) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun12 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun12 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnTwelve;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// // 12 for 13
// document.querySelector('.btn--13').addEventListener('click', function () {
// 	if (chosenNumber === 12) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun13 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun13 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnThirteen;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// // 13 for 14
// document.querySelector('.btn--14').addEventListener('click', function () {
// 	if (chosenNumber === 13) {
// 		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
// 		// document.querySelector('body').style.backgroundColor = '#60b347';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = '#60b347';
// 		});
// 		score++;
// 		timeoutfun14 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 	} else {
// 		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
// 		// document.querySelector('body').style.backgroundColor = 'red';
// 		allBtns.forEach((btn) => {
// 			btn.style.backgroundColor = 'red';
// 		});

// 		document.querySelector('.current--score-one').textContent = 0;

// 		timeoutfun14 = setTimeout(() => {
// 			halfReset();
// 		}, 1000);
// 		score = 0;
// 		return;
// 	}
// 	const guess = btnFourteen;

// 	currentScore.innerHTML = score;

// 	if (score > highscore) {
// 		highscore = score;
// 		document.querySelector('.current--high-score--one').textContent = highscore;
// 		localStorage.setItem('high-score--one', highscore);
// 	}
// });

// 14 for 15
document.querySelector('.btn--15').addEventListener('click', function () {
	if (chosenNumber === 14) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun15 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun15 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFifteen;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 15 for 16
document.querySelector('.btn--16').addEventListener('click', function () {
	if (chosenNumber === 15) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun16 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun16 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixteen;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 16 for 17
document.querySelector('.btn--17').addEventListener('click', function () {
	if (chosenNumber === 16) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun17 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun17 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventeen;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 17 for 18
document.querySelector('.btn--18').addEventListener('click', function () {
	if (chosenNumber === 17) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun18 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun18 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEighteen;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 18 for 19
document.querySelector('.btn--19').addEventListener('click', function () {
	if (chosenNumber === 18) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun19 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun19 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNineteen;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 19 for 20
document.querySelector('.btn--20').addEventListener('click', function () {
	if (chosenNumber === 19) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun20 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun20 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTwenty;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 20 for 21
document.querySelector('.btn--21').addEventListener('click', function () {
	if (chosenNumber === 20) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun21 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun21 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTwentyOne;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 21 for 22
document.querySelector('.btn--22').addEventListener('click', function () {
	if (chosenNumber === 21) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun22 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun22 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTwentyTwo;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 22 for 23
document.querySelector('.btn--23').addEventListener('click', function () {
	if (chosenNumber === 22) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun23 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun23 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTwentyThree;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 23 for 24
document.querySelector('.btn--24').addEventListener('click', function () {
	if (chosenNumber === 23) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun24 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun24 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTwentyFour;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 24 for 25
document.querySelector('.btn--25').addEventListener('click', function () {
	if (chosenNumber === 24) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun25 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun25 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTwentyFive;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 25 for 26
document.querySelector('.btn--26').addEventListener('click', function () {
	if (chosenNumber === 25) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun26 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun26 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTwentySix;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 26 for 27
document.querySelector('.btn--27').addEventListener('click', function () {
	if (chosenNumber === 26) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun27 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun27 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTwentySeven;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 27 for 28
document.querySelector('.btn--28').addEventListener('click', function () {
	if (chosenNumber === 27) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun28 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun28 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTwentyEight;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 28 for 29
document.querySelector('.btn--29').addEventListener('click', function () {
	if (chosenNumber === 28) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun29 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun29 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTwentyNine;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 29 for 30
document.querySelector('.btn--30').addEventListener('click', function () {
	if (chosenNumber === 29) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun30 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun30 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnThirty;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 30 for 31
document.querySelector('.btn--31').addEventListener('click', function () {
	if (chosenNumber === 30) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun31 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun31 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnThirtyOne;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 31 for 32
document.querySelector('.btn--32').addEventListener('click', function () {
	if (chosenNumber === 31) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun32 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun32 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnThirtyTwo;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 32 for 33
document.querySelector('.btn--33').addEventListener('click', function () {
	if (chosenNumber === 32) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun33 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun33 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnThirtyThree;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 33 for 34
document.querySelector('.btn--34').addEventListener('click', function () {
	if (chosenNumber === 33) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun34 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun34 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnThirtyFour;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 34 for 35
document.querySelector('.btn--35').addEventListener('click', function () {
	if (chosenNumber === 34) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun35 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun35 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnThirtyFive;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 35 for 36
document.querySelector('.btn--36').addEventListener('click', function () {
	if (chosenNumber === 35) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun36 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun36 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnThirtySix;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 36 for 37
document.querySelector('.btn--37').addEventListener('click', function () {
	if (chosenNumber === 36) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun37 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun37 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnThirtySeven;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 37 for 38
document.querySelector('.btn--38').addEventListener('click', function () {
	if (chosenNumber === 37) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun38 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun38 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnThirtyEight;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 38 for 39
document.querySelector('.btn--39').addEventListener('click', function () {
	if (chosenNumber === 38) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun39 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun39 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnThirtyNine;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 39 for 40
document.querySelector('.btn--40').addEventListener('click', function () {
	if (chosenNumber === 39) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun40 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun40 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFourty;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 40 for 41
document.querySelector('.btn--41').addEventListener('click', function () {
	if (chosenNumber === 40) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun41 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun41 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFourtyOne;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 41 for 42
document.querySelector('.btn--42').addEventListener('click', function () {
	if (chosenNumber === 41) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun42 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun42 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFourtyTwo;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 42 for 43
document.querySelector('.btn--43').addEventListener('click', function () {
	if (chosenNumber === 42) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun43 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun43 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFourtyThree;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 43 for 44
document.querySelector('.btn--44').addEventListener('click', function () {
	if (chosenNumber === 43) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun44 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun44 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFourtyFour;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 44 for 45
document.querySelector('.btn--45').addEventListener('click', function () {
	if (chosenNumber === 44) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun45 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun45 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFourtyFive;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 45 for 46
document.querySelector('.btn--46').addEventListener('click', function () {
	if (chosenNumber === 45) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun46 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun46 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFourtySix;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 46 for 47
document.querySelector('.btn--47').addEventListener('click', function () {
	if (chosenNumber === 46) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun47 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun47 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFourtySeven;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 47 for 48
document.querySelector('.btn--48').addEventListener('click', function () {
	if (chosenNumber === 47) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun48 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun48 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFourtyEight;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 48 for 49
document.querySelector('.btn--49').addEventListener('click', function () {
	if (chosenNumber === 48) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun49 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun49 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFourtyNine;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 49 for 50
document.querySelector('.btn--50').addEventListener('click', function () {
	if (chosenNumber === 49) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun50 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun50 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFifty;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 50 for 51
document.querySelector('.btn--51').addEventListener('click', function () {
	if (chosenNumber === 50) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun51 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun51 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFiftyOne;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 51 for 52
document.querySelector('.btn--52').addEventListener('click', function () {
	if (chosenNumber === 51) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun52 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun52 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFiftyTwo;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 52 for 53
document.querySelector('.btn--53').addEventListener('click', function () {
	if (chosenNumber === 52) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun53 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun53 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFiftyThree;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 53 for 54
document.querySelector('.btn--54').addEventListener('click', function () {
	if (chosenNumber === 53) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun54 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun54 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFiftyFour;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 54 for 55
document.querySelector('.btn--55').addEventListener('click', function () {
	if (chosenNumber === 54) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun55 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun55 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFiftyFive;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 55 for 56
document.querySelector('.btn--56').addEventListener('click', function () {
	if (chosenNumber === 9) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun10 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun10 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnTen;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 56 for 57
document.querySelector('.btn--57').addEventListener('click', function () {
	if (chosenNumber === 56) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun57 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun57 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFiftySeven;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 57 for 58
document.querySelector('.btn--58').addEventListener('click', function () {
	if (chosenNumber === 57) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun58 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun58 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFiftyEight;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 58 for 59
document.querySelector('.btn--59').addEventListener('click', function () {
	if (chosenNumber === 58) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun59 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun59 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnFiftyNine;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 59 for 60
document.querySelector('.btn--60').addEventListener('click', function () {
	if (chosenNumber === 59) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun60 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun60 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixty;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 60 for 61
document.querySelector('.btn--61').addEventListener('click', function () {
	if (chosenNumber === 60) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun61 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun61 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixtyOne;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 61 for 62
document.querySelector('.btn--62').addEventListener('click', function () {
	if (chosenNumber === 61) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun62 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun62 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixtyTwo;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 62 for 63
document.querySelector('.btn--63').addEventListener('click', function () {
	if (chosenNumber === 62) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun63 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun63 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixtyThree;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 63 for 64
document.querySelector('.btn--64').addEventListener('click', function () {
	if (chosenNumber === 63) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun64 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun64 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixtyFour;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 64 for 65
document.querySelector('.btn--65').addEventListener('click', function () {
	if (chosenNumber === 64) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun65 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun65 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixtyFive;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 65 for 66
document.querySelector('.btn--66').addEventListener('click', function () {
	if (chosenNumber === 65) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun66 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun66 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixtySix;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 66 for 67
document.querySelector('.btn--67').addEventListener('click', function () {
	if (chosenNumber === 66) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun67 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun67 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixtySeven;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 67 for 68
document.querySelector('.btn--68').addEventListener('click', function () {
	if (chosenNumber === 67) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun68 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun68 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixtyEight;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 68 for 69
document.querySelector('.btn--69').addEventListener('click', function () {
	if (chosenNumber === 68) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun69 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun69 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSixtyNine;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 69 for 70
document.querySelector('.btn--70').addEventListener('click', function () {
	if (chosenNumber === 69) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun70 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun70 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventy;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 70 for 71
document.querySelector('.btn--71').addEventListener('click', function () {
	if (chosenNumber === 70) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun71 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun71 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventyOne;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 71 for 72
document.querySelector('.btn--72').addEventListener('click', function () {
	if (chosenNumber === 71) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun72 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun72 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventyTwo;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 72 for 73
document.querySelector('.btn--73').addEventListener('click', function () {
	if (chosenNumber === 72) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun73 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun73 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventyThree;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 73 for 74
document.querySelector('.btn--74').addEventListener('click', function () {
	if (chosenNumber === 73) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun74 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun74 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventyFour;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 74 for 75
document.querySelector('.btn--75').addEventListener('click', function () {
	if (chosenNumber === 74) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun75 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun75 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventyFive;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 75 for 76
document.querySelector('.btn--76').addEventListener('click', function () {
	if (chosenNumber === 75) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun76 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun76 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventySix;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 76 for 77
document.querySelector('.btn--77').addEventListener('click', function () {
	if (chosenNumber === 76) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun77 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun77 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventySeven;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 77 for 78
document.querySelector('.btn--78').addEventListener('click', function () {
	if (chosenNumber === 77) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun78 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun78 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventyEight;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 78 for 79
document.querySelector('.btn--79').addEventListener('click', function () {
	if (chosenNumber === 78) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun79 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun79 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnSeventyNine;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 79 for 80
document.querySelector('.btn--80').addEventListener('click', function () {
	if (chosenNumber === 79) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun80 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun80 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEighty;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 80 for 81
document.querySelector('.btn--81').addEventListener('click', function () {
	if (chosenNumber === 80) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun81 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun81 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEightyOne;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 81 for 82
document.querySelector('.btn--82').addEventListener('click', function () {
	if (chosenNumber === 81) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun82 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun82 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEightyTwo;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 82 for 83
document.querySelector('.btn--83').addEventListener('click', function () {
	if (chosenNumber === 82) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun83 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun83 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEightyThree;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 83 for 84
document.querySelector('.btn--84').addEventListener('click', function () {
	if (chosenNumber === 83) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun84 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun84 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEightyFour;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 84 for 85
document.querySelector('.btn--85').addEventListener('click', function () {
	if (chosenNumber === 84) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun85 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun85 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEightyFive;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 85 for 86
document.querySelector('.btn--86').addEventListener('click', function () {
	if (chosenNumber === 85) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun86 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun86 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEightySix;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 86 for 87
document.querySelector('.btn--87').addEventListener('click', function () {
	if (chosenNumber === 86) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun87 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun87 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEightySeven;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 87 for 88
document.querySelector('.btn--88').addEventListener('click', function () {
	if (chosenNumber === 87) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun88 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun88 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEightyEight;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 88 for 89
document.querySelector('.btn--89').addEventListener('click', function () {
	if (chosenNumber === 88) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun89 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun89 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnEightyNine;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 89 for 90
document.querySelector('.btn--90').addEventListener('click', function () {
	if (chosenNumber === 89) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun90 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun90 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNinety;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 90 for 91
document.querySelector('.btn--91').addEventListener('click', function () {
	if (chosenNumber === 90) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun91 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun91 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNinetyOne;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 91 for 92
document.querySelector('.btn--92').addEventListener('click', function () {
	if (chosenNumber === 91) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun92 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun92 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNinetyTwo;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 92 for 93
document.querySelector('.btn--93').addEventListener('click', function () {
	if (chosenNumber === 92) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun93 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun93 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNinetyThree;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 93 for 94
document.querySelector('.btn--94').addEventListener('click', function () {
	if (chosenNumber === 93) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun94 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun94 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNinetyFour;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 94 for 95
document.querySelector('.btn--95').addEventListener('click', function () {
	if (chosenNumber === 94) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun95 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun95 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNinetyFive;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 95 for 96
document.querySelector('.btn--96').addEventListener('click', function () {
	if (chosenNumber === 95) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun96 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun96 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNinetySix;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 96 for 97
document.querySelector('.btn--97').addEventListener('click', function () {
	if (chosenNumber === 96) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun97 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun97 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNinetySeven;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 97 for 98
document.querySelector('.btn--98').addEventListener('click', function () {
	if (chosenNumber === 97) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun98 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun98 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNinetyEight;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 98 for 99
document.querySelector('.btn--99').addEventListener('click', function () {
	if (chosenNumber === 98) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun99 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun99 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnNinetyNine;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

// 99 for 100
document.querySelector('.btn--100').addEventListener('click', function () {
	if (chosenNumber === 99) {
		// document.querySelector('.main-1-100').style.backgroundColor = '#60b347';
		// document.querySelector('body').style.backgroundColor = '#60b347';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = '#60b347';
		});
		score++;
		timeoutfun100 = setTimeout(() => {
			halfReset();
		}, 1000);
	} else {
		// document.querySelector('.main-1-100').style.backgroundColor = 'red';
		// document.querySelector('body').style.backgroundColor = 'red';
		allBtns.forEach((btn) => {
			btn.style.backgroundColor = 'red';
		});

		document.querySelector('.current--score-one').textContent = 0;

		timeoutfun100 = setTimeout(() => {
			halfReset();
		}, 1000);
		score = 0;
		return;
	}
	const guess = btnOneHundred;

	currentScore.innerHTML = score;

	if (score > highscore) {
		highscore = score;
		document.querySelector('.current--high-score--one').textContent = highscore;
		localStorage.setItem('high-score--one', highscore);
	}
});

function halfReset() {
	chosenNumber = Math.floor(0 + Math.random() * (99 - 0 + 1));

	if (bgFlag === 'simple') {
		setSimple();
	} else if (bgFlag === 'vibrant') {
		setVibrant();
	} else if (bgFlag === 'premium') {
		setPremimum();
	} else {
		document.querySelector('body').style.backgroundColor = '#222';
	}

	// document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.main-1-100').style.backgroundColor = '#222';
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
	clearTimeout(timeoutfun11);
	clearTimeout(timeoutfun12);
	clearTimeout(timeoutfun13);
	clearTimeout(timeoutfun14);
	clearTimeout(timeoutfun15);
	clearTimeout(timeoutfun16);
	clearTimeout(timeoutfun17);
	clearTimeout(timeoutfun18);
	clearTimeout(timeoutfun19);
	clearTimeout(timeoutfun20);
	clearTimeout(timeoutfun21);
	clearTimeout(timeoutfun22);
	clearTimeout(timeoutfun23);
	clearTimeout(timeoutfun24);
	clearTimeout(timeoutfun25);
	clearTimeout(timeoutfun26);
	clearTimeout(timeoutfun27);
	clearTimeout(timeoutfun28);
	clearTimeout(timeoutfun29);
	clearTimeout(timeoutfun30);
	clearTimeout(timeoutfun31);
	clearTimeout(timeoutfun32);
	clearTimeout(timeoutfun33);
	clearTimeout(timeoutfun34);
	clearTimeout(timeoutfun35);
	clearTimeout(timeoutfun36);
	clearTimeout(timeoutfun37);
	clearTimeout(timeoutfun38);
	clearTimeout(timeoutfun39);
	clearTimeout(timeoutfun40);
	clearTimeout(timeoutfun41);
	clearTimeout(timeoutfun42);
	clearTimeout(timeoutfun43);
	clearTimeout(timeoutfun44);
	clearTimeout(timeoutfun45);
	clearTimeout(timeoutfun46);
	clearTimeout(timeoutfun47);
	clearTimeout(timeoutfun48);
	clearTimeout(timeoutfun49);
	clearTimeout(timeoutfun50);
	clearTimeout(timeoutfun51);
	clearTimeout(timeoutfun52);
	clearTimeout(timeoutfun53);
	clearTimeout(timeoutfun54);
	clearTimeout(timeoutfun55);
	clearTimeout(timeoutfun56);
	clearTimeout(timeoutfun57);
	clearTimeout(timeoutfun58);
	clearTimeout(timeoutfun59);
	clearTimeout(timeoutfun60);
	clearTimeout(timeoutfun61);
	clearTimeout(timeoutfun62);
	clearTimeout(timeoutfun63);
	clearTimeout(timeoutfun64);
	clearTimeout(timeoutfun65);
	clearTimeout(timeoutfun66);
	clearTimeout(timeoutfun67);
	clearTimeout(timeoutfun68);
	clearTimeout(timeoutfun69);
	clearTimeout(timeoutfun70);
	clearTimeout(timeoutfun71);
	clearTimeout(timeoutfun72);
	clearTimeout(timeoutfun73);
	clearTimeout(timeoutfun74);
	clearTimeout(timeoutfun75);
	clearTimeout(timeoutfun76);
	clearTimeout(timeoutfun77);
	clearTimeout(timeoutfun78);
	clearTimeout(timeoutfun79);
	clearTimeout(timeoutfun80);
	clearTimeout(timeoutfun81);
	clearTimeout(timeoutfun82);
	clearTimeout(timeoutfun83);
	clearTimeout(timeoutfun84);
	clearTimeout(timeoutfun85);
	clearTimeout(timeoutfun86);
	clearTimeout(timeoutfun87);
	clearTimeout(timeoutfun88);
	clearTimeout(timeoutfun89);
	clearTimeout(timeoutfun90);
	clearTimeout(timeoutfun91);
	clearTimeout(timeoutfun92);
	clearTimeout(timeoutfun93);
	clearTimeout(timeoutfun94);
	clearTimeout(timeoutfun95);
	clearTimeout(timeoutfun96);
	clearTimeout(timeoutfun97);
	clearTimeout(timeoutfun98);
	clearTimeout(timeoutfun99);
	clearTimeout(timeoutfun100);
}

/********************************************/

function setVibrant() {
	document.querySelector('body').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,33,89,1) 0%, rgba(142,191,78,1) 52%, rgba(0,212,255,1) 71%)';

	document.querySelector('.main-1-100').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(194,33,89,1) 0%, rgba(142,191,78,1) 52%, rgba(0,212,255,1) 71%)';
}

function setSimple() {
	document.querySelector('body').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,66,41,1) 100%, rgba(142,191,78,1) 100%, rgba(0,212,255,1) 100%)';

	document.querySelector('.main-1-100').style.background =
		'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,66,41,1) 100%, rgba(142,191,78,1) 100%, rgba(0,212,255,1) 100%)';
}

function setPremimum() {
	document.querySelector('body').style.backgroundImage =
		'radial-gradient(#ffffff 1.75px, transparent 1.75px), radial-gradient(#ffffff 1.75px, #000000 1.75px)';
	document.querySelector('body').style.backgroundSize = '70px 70px';
	document.querySelector('body').style.backgroundPosition = '0 0,35px 35px';

	document.querySelector('.main-1-100').style.backgroundImage =
		'radial-gradient(#ffffff 1.75px, transparent 1.75px), radial-gradient(#ffffff 1.75px, #000000 1.75px)';
	document.querySelector('.main-1-100').style.backgroundSize = '70px 70px';
	document.querySelector('.main-1-100').style.backgroundPosition =
		'0 0,35px 35px';
}

/********************************************/

// function setExcess() {
// 	document.querySelector('body').style.fontFamily = 'Bowlby One', cursive;
// }

// function setElderly() {
// 	document.querySelector('body').style.background = 'Rubik Moonrocks', cursive;
// }

// function setNuclear() {
// 	document.querySelector('body').style.backgroundImage = 'Monoton', cursive;
// }

///////// Go to winpage /////////////

function goToWin(score) {
	if ((score) => 3) {
		window.location.href = 'win.html';
	}
}
