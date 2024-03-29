let Boutons = document.getElementsByClassName('boutonsRouge');
let buttonA = document.getElementById('buttonA');
let buttonB = document.getElementById('buttonB');
let up = document.getElementById('arrow-Up');
let left = document.getElementById('arrow-Left');
let right = document.getElementById('arrow-Right');
let down = document.getElementById('arrow-Down');
let buttonSelect = document.getElementById('select');
let buttonStart = document.getElementById('buttonStart');

let screen = document.getElementById('screen');
let displayCenter = document.getElementById('displayCenter');
let displays = document.getElementsByClassName('displayScreen');
let displayTop = document.getElementById('displayTop');
let display1 = document.getElementById('display1');
let display2 = document.getElementById('display2');
let display3 = document.getElementById('display3');
let displayBot = document.getElementById('displayBot');
let active;
let currentActive = 1;
let mod;
let compteurUser = 0;
let compteurComputer = 0;
let inputUser = "";
let inputComputer = "";
let winScore = 3;
let result= '';

let audio_Battle = new Audio('../sounds/battle.wav');
audio_Battle.loop = true;
let audio_musicMystery = new Audio('../sounds/musicMystery.mp3');
audio_musicMystery.loop = true;
let audio_Music = new Audio('../sounds/music.mp3');
audio_Music.loop = true;
let audio_Enter = new Audio('../sounds/enter.wav');
let audio_Back = new Audio('../sounds/back.wav');
let audio_Navigate = new Audio('../sounds/updown.wav');
let audio_Hit = new Audio('../sounds/hit.wav');
let audio_Defeat = new Audio('../sounds/defeat.wav');
let audio_Victory = new Audio('../sounds/victory.wav');
let audio_Music_HotPotatoe = new Audio('../sounds/musicHotPotatoe.mp3');
let audio_Switch = new Audio('../sounds/switch.wav');
let audio_Explosion = new Audio('../sounds/explosion.wav');


let getActive = () => {

	active = document.getElementsByClassName('displayActive');
	for (var i = 0; i < active.length; i++) {
		let current = active[i].id;
		current = parseInt(current.slice(-1));
		for (var i = 0; i < displays.length; i++) {
			displays[i].classList.remove('displayActive');
		}
		switch(current) {
			case 1 :
			display1.classList.add('displayActive');
			inputUser = display1.innerText;
			break;
			case 2:
			display2.classList.add('displayActive');
			inputUser = display2.innerText;	
			break;
			case 3:
			display3.classList.add('displayActive');
			inputUser = display3.innerText;
			break;
		}
	}
}
let moveUp3 = () => {
	audio_Navigate.play();
	inputUser = '';
	active = document.getElementsByClassName('displayActive');
	for (var i = 0; i < active.length; i++) {
		let current = active[i].id;
		current = parseInt(current.slice(-1));
		for (var i = 0; i < displays.length; i++) {
			displays[i].classList.remove('displayActive');
		}
		switch(current) {
			case 1 :
			display3.classList.add('displayActive');
			inputUser = display3.innerText;
			break;
			case 2:
			display1.classList.add('displayActive');
			inputUser = display1.innerText;	
			break;
			case 3:
			display2.classList.add('displayActive');
			inputUser = display2.innerText;
			break;
		}
	}
}

let moveDown3 = () => {
	audio_Navigate.play();
	active = document.getElementsByClassName('displayActive');
	for (var i = 0; i < active.length; i++) {
		let current = active[i].id;
		current = parseInt(current.slice(-1));
		for (var i = 0; i < displays.length; i++) {
			displays[i].classList.remove('displayActive');
		}
		switch(current) {
			case 1 :
			display2.classList.add('displayActive');
			inputUser = display2.innerText;
			break;
			case 2:
			display3.classList.add('displayActive');
			inputUser = display3.innerText;	
			break;
			case 3:
			display1.classList.add('displayActive');
			inputUser = display1.innerText;
			break;
		}
	}
}

/* Title Screen */

let home = () => {
	display1.innerHTML = "ULTIMATE";
	display1.style.fontSize = "0.8rem";
	display2.innerHTML = "MINI GAMES";
	display2.style.fontSize = "1.2rem";
	display3.innerHTML = "TOURNAMENT";
	display3.style.fontSize = "0.8rem";
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	screen.style.backgroundColor = "rgb(10, 10, 10)";
	display1.style.color = "#9B9F4E";
	display2.style.backgroundColor = "#9B9F4E";
	display2.style.color = "rgb(10, 10, 10)";
	display3.style.color = "#9B9F4E";
}

/* First Menu */

let title = () => {
	inputUser = '';
	getActive();
	clean();
	display1.innerHTML = "MYSTERY NUMBER";
	display2.innerHTML = "ROCK PAPER SCISSORS";
	display3.innerHTML = "HOT POTATOE";
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	display2.classList.add('displayActive');
}




/****************************** ROCK PAPER SCISSORS *********************************/


/* Mod Selection Menu */

let menuRPS = () => {
	getActive();
	clean();
	active = document.getElementsByClassName('displayActive');
	display1.innerHTML = "PLAYER VS AI";
	display2.innerHTML = "AI VS AI";
	display3.innerHTML = "EXIT";
	for (var i = 0; i < active.length; i++) {
		inputUser = active[i].innerText;
	}
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	display2.classList.add('displayActive');
	inputUser = '';
}

/* Rock|Paper|Scissors choice */

let playing = () => {
	clean();
	audio_Music.pause()
	audio_Battle.play();
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	displayTop.innerHTML = compteurUser + " - " + compteurComputer;
	display1.innerHTML = "<p>ROCK</p>";
	display2.innerHTML = "<p>PAPER</p>";
	display3.innerHTML = "<p>SCISSORS</p>";
	display1.classList.add('displayActive');
	getActive();
}

/* Result Display */

let show = () => {
	clean();
	// if (mod = "AI VS AI") {
	// 	inputUser = "SHOWAI";
	// }
	// if (mod = "PLAYER VS AI") {
	// 	inputUser = "SHOWPVE";
	// }
	inputUser = "SHOW";
	displayTop.innerHTML = compteurUser + " - " + compteurComputer;
	display1.innerHTML = playerName + ' - ' + compteurUser;
	display2.innerHTML = "";
	display3.innerHTML = "AI - " + compteurComputer;
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	
}

/* Duel resolve */

var choice = function() {
	playerName = "Player";
	coeffUser = '';
	if (mod == "AI VS AI") {
		coeffUser = Math.floor((Math.random() * 3)) + 1;
		playerName = "Player Auto";
		switch(coeffUser) {
			case 1 :
			inputUser = "ROCK";
			break;
			case 2 :
			inputUser = "PAPER";
			break;
			case 3 :
			inputUser = "SCISSORS";
			break;
		}
	} else {
		for (var i = 0; i < active.length; i++) {
			inputUser = active[i].innerText;
		}
	}
	coeff = Math.floor((Math.random() * 3)) + 1;
	switch(coeff) {
		case 1 :
		inputComputer = "ROCK";
		break;
		case 2 :
		inputComputer = "PAPER";
		break;
		case 3 :
		inputComputer = "SCISSORS";
		break;
	}
	switch(inputUser) {

		case 'ROCK' :

		if (inputComputer == "ROCK") {
			result = 'Draw, try again !';
		}
		if (inputComputer == "PAPER") {
			result = 'Computer scores !';
			compteurComputer++;
		}
		if (inputComputer == "SCISSORS") {
			result = playerName + ' scores !';
			compteurUser++;
		}
		break;

		case 'PAPER' :

		if (inputComputer == "ROCK") {
			result = playerName + ' scores !';
			compteurUser++;
		}
		if (inputComputer == "PAPER") {
			result = 'Draw, try again !';
		}
		if (inputComputer == "SCISSORS") {
			result = 'Computer scores !';
			compteurComputer++;
		}
		break;

		case 'SCISSORS':

		if (inputComputer == "ROCK") {
			result = 'Computer scores !';
			compteurComputer++;
		}
		if (inputComputer == "PAPER") {
			result = playerName + ' score !';
			compteurUser++;
		}
		if (inputComputer == "SCISSORS") {
			result = 'Draw, try again !';
		}
		break;

	}
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	audio_Hit.play();
	display2.classList.add('displayActive');
	displayTop.innerHTML = compteurUser + " - " + compteurComputer;
	display1.innerHTML = playerName + ' ' + inputUser;
	display2.innerHTML = result;
	display3.innerHTML = 'AI ' + inputComputer;

	inputUser = "ROUND";

	/* Victory Condition */

	if (compteurUser == winScore){
		audio_Victory.play();
		screen.style.backgroundColor = "rgb(10, 10, 10)";
		display1.style.color = "#9B9F4E";
		display2.style.backgroundColor = "#9B9F4E";
		display2.style.fontSize = "1.5rem";
		display3.style.color = "#9B9F4E";
		result = 'VICTORY';
		scorePlayer =  playerName + ' - ' + compteurUser;
		scoreOrdinateur = "AI - " + compteurComputer;
		compteurUser = 0;
		compteurComputer = 0;
		mod = '';
		for (var i = 0; i < displays.length; i++) {
			displays[i].classList.remove('displayActive');
		}
		display1.innerHTML = scorePlayer;
		display2.innerHTML = result;
		display3.innerHTML = scoreOrdinateur;
		audio_Battle.pause();
		audio_Battle.currentTime = 0;
		audio_musicMystery.pause();
		audio_musicMystery.currentTime = 0;
		audio_Music.play();
		inputUser = "ROCK PAPER SCISSORS";
	}

	/* Defeat Condition */

	if (compteurComputer == winScore) {
		audio_Defeat.play();
		screen.style.backgroundColor = "rgb(10, 10, 10)";
		display1.style.color = "#9B9F4E";
		display2.style.backgroundColor = "#9B9F4E";
		display2.style.fontSize = "1.5rem";
		display3.style.color = "#9B9F4E";
		result = 'DEFEAT';
		scorePlayer = playerName + ' - ' + compteurUser;
		scoreOrdinateur = "AI - " + compteurComputer;
		compteurUser = 0;
		compteurComputer = 0;
		mod = '';
		for (var i = 0; i < displays.length; i++) {
			displays[i].classList.remove('displayActive');
		}
		display1.innerHTML = scorePlayer;
		display2.innerHTML = result;
		display3.innerHTML = scoreOrdinateur;
		audio_Battle.pause();
		audio_Battle.currentTime = 0;
		audio_Music.play();
		inputUser = "ROCK PAPER SCISSORS";
	}
}


/****************************** MYSTERY NUMBER **************************************/
let target;
let replace;
let userSubmission = '';
let tempFail = 0;
let affichageFail = '';
let maxFail = 8;
let temp1;
let temp2;
let temp3;
let generateRandom = () =>{
	let max = 1000; 
	target = Math.trunc(Math.random()*Math.floor(max));
}
const guessNumber = () =>{
	userSubmission = display1.innerText + display2.innerText + display3.innerText;
	clean();
	affichageFail = '';
	for (var i = 0; i < tempFail + 1; i++) {
		affichageFail += "X ";
	}
	displayTop.innerHTML = affichageFail;
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	if (userSubmission < target) {
		displayCenter.classList.remove('row');
		displayCenter.classList.add('col');
		display2.innerHTML = "Too low !"
		audio_Hit.play();
		tempFail++;
		inputUser = "NEXTGUESS";
	} else if (userSubmission > target) {
		displayCenter.classList.remove('row');
		displayCenter.classList.add('col');
		display2.innerHTML = "Too high !"
		audio_Hit.play();
		tempFail++;
		inputUser = "NEXTGUESS";
	} else {
		displayCenter.classList.remove('row');
		displayCenter.classList.add('col');
		display3.style.backgroundColor = "rgb(10, 10, 10)";
		display3.style.color = "#9B9F4E";
		display1.innerHTML = "Well done";
		audio_Victory.play();
		audio_Music.play()
		audio_musicMystery.pause();
		audio_musicMystery.currentTime = 0;
		display2.innerHTML = "Mystery number was"
		display3.innerHTML = target;
		up.removeEventListener('click', moveUp421);
		down.removeEventListener('click', moveDown421);
		left.removeEventListener('click', moveLeftMystery);
		right.removeEventListener('click', moveRightMystery);
		up.addEventListener('click', moveUp3);
		down.addEventListener('click', moveDown3);
		inputUser = "";
	}
	if (tempFail == maxFail) {
		displayCenter.classList.remove('row');
		displayCenter.classList.add('col');
		display3.style.backgroundColor = "rgb(10, 10, 10)";
		display3.style.color = "#9B9F4E";
		display1.innerHTML = "GAME OVER";
		audio_Defeat.play();
		audio_Music.play()
		audio_musicMystery.pause();
		audio_musicMystery.currentTime = 0;
		display2.innerHTML = "Mystery number was"
		display3.innerHTML = target;
		up.removeEventListener('click', moveUp421);
		down.removeEventListener('click', moveDown421);
		left.removeEventListener('click', moveLeftMystery);
		right.removeEventListener('click', moveRightMystery);
		up.addEventListener('click', moveUp3);
		down.addEventListener('click', moveDown3);
		inputUser = "";
	}
}

const nextGuess = () =>{
	clean();
	displayCenter.classList.remove('col');
	displayCenter.classList.add('row');
	displayTop.innerHTML = affichageFail;
	display1.innerText = temp1;
	display2.innerText = temp2;
	display3.innerText = temp3;
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	displays[currentActive].classList.add('displayActive');
	audio_Hit.play();
	inputUser = "GUESS";
	up.addEventListener('click', moveUp421);
	down.addEventListener('click', moveDown421);
}

let moveUp421 = () => {
	replace = '';
	audio_Navigate.play();
	active = document.getElementsByClassName('displayActive');

	for (var i = 0; i < active.length; i++) {
		let current = active[i].id;
		current = parseInt(current.slice(-1));
		switch(current) {
			case 1:
			replace = parseInt(display1.innerText)+1;
			if (replace > 9) {
				replace = 0;
			}
			display1.innerText = replace;	
			break;
			case 2:
			replace = parseInt(display2.innerText)+1;
			if (replace > 9) {
				replace = 0;
			}
			display2.innerText = replace;	
			break;
			case 3:
			replace = parseInt(display3.innerText)+1;
			if (replace > 9) {
				replace = 0;
			}
			display3.innerText = replace;
			break;
		}
		inputUser = "GUESS"
		temp1 = display1.innerText;
		temp2 = display2.innerText;
		temp3 = display3.innerText;
		userSubmission = display1.innerText + display2.innerText + display3.innerText;
	}

}
let moveDown421 = () => {
	replace ='';
	audio_Navigate.play();
	active = document.getElementsByClassName('displayActive');

	for (var i = 0; i < active.length; i++) {
		let current = active[i].id;
		current = parseInt(current.slice(-1));
		switch(current) {
			case 1:
			replace = parseInt(display1.innerText)-1;
			if (replace < 0) {
				replace = 9;
			}
			display1.innerText = replace;	
			break;
			case 2:
			replace = parseInt(display2.innerText)-1;
			if (replace < 0) {
				replace = 9;
			}
			display2.innerText = replace;	
			break;
			case 3:
			replace = parseInt(display3.innerText)-1;
			if (replace < 0) {
				replace = 9;
			}
			display3.innerText = replace;
			break;
		}
		inputUser = "GUESS"
		temp1 = display1.innerText;
		temp2 = display2.innerText;
		temp3 = display3.innerText;
		userSubmission = display1.innerText + display2.innerText + display3.innerText;
	}
}

let moveRightMystery = () => {
	audio_Navigate.play();
	active = document.getElementsByClassName('displayActive');
	for (var i = 0; i < active.length; i++) {
		let current = active[i].id;
		current = parseInt(current.slice(-1));
		for (var i = 0; i < displays.length; i++) {
			displays[i].classList.remove('displayActive');
		}
		switch(current) {
			case 1 :
			display2.classList.add('displayActive');
			currentActive = 2;
			break;

			case 2:
			display3.classList.add('displayActive');
			currentActive = 3;
			break;

			case 3:
			display1.classList.add('displayActive');
			currentActive = 1;
			break;
		}
	}
	inputUser = "GUESS"
}
let moveLeftMystery = () => {
	audio_Navigate.play();
	active = document.getElementsByClassName('displayActive');
	for (var i = 0; i < active.length; i++) {
		let current = active[i].id;
		current = parseInt(current.slice(-1));
		for (var i = 0; i < displays.length; i++) {
			displays[i].classList.remove('displayActive');
		}
		switch(current) {
			case 1 :
			display3.classList.add('displayActive');
			currentActive = 3;
			break;
			
			case 2:
			display1.classList.add('displayActive');
			currentActive = 1;
			break;

			case 3:
			display2.classList.add('displayActive');
			currentActive = 2;
			break;
		}
	}
	inputUser = "GUESS"
}

let initMystery = () => {
	audio_Music.pause()
	audio_musicMystery.play();
	clean();
	tempFail = ''
	temp1 = "0";
	temp2 = "0";
	temp3 = "0";
	displayCenter.classList.remove('col');
	displayCenter.classList.add('row');
	display1.innerText = "0";
	display2.innerText = "0";
	display3.innerText = "0";
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	audio_Hit.play();
	display1.classList.add('displayActive');
	up.removeEventListener('click', moveUp3);
	down.removeEventListener('click', moveDown3);
	right.addEventListener('click', moveRightMystery);
	left.addEventListener('click', moveLeftMystery);
	generateRandom();
	inputUser = "GUESS";
	up.addEventListener('click', moveUp421);
	down.addEventListener('click', moveDown421);
	userSubmission = display1.innerText + display2.innerText + display3.innerText;
}


/****************************** HOT POTATOE *********************************/
let timer;
let countTimer;
let countdownThrow;
let computerTimer;
let throwMin = 1;
let throwMax = 3;
let activeBomb;
let winner;

let initPotatoe = () => {
	audio_Music.pause();
	audio_Music_HotPotatoe.play();
	countTimer = 0;
	countdownThrow = 0;
	let min = 5;
	let max = 30;
	timer = Math.floor(Math.random() * ((max - min) + 1) + min);
	clean();
	up.removeEventListener('click', moveUp3);
	down.removeEventListener('click', moveDown3);
	displayTop.innerHTML = "00:00";
	display2.innerHTML = "PASS IT";
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	display2.backgroundColor = "#9B9F4E";
	display2.color = "rgb(10, 10, 10)";
	display1.style.backgroundColor = "rgb(10, 10, 10)";
	display3.style.backgroundColor = "rgb(10, 10, 10)";
	inputUser = "FIRST PASS IT";
	activeBomb = "PLAYER";
}

let countdown = () => {
	countTimer++;
	if (countTimer < 10) {
		displayTop.innerHTML = "00:0" + countTimer;
	} else {
		displayTop.innerHTML = "00:" + countTimer;
	}
	if (countTimer == timer || inputUser == "CATCH") {
		audio_Explosion.play();
		switch(activeBomb) {
			case "AI":
				winner = "Player";
				break;
			case "PLAYER":
				winner = "AI";
				break;
			case "SOON":
				winner = "AI";
				break;
		}
		displayTop.innerHTML = winner + " wins !";
		display2.innerHTML = "BOOM";
		audio_Music_HotPotatoe.pause();
		audio_Music_HotPotatoe.currentTime = 0;
		clearTimerComputerIncrement();
		clearStart();
		inputUser = "";
	}
}

let start = () => {
	hotPotatoeStart = setInterval(countdown, 1000);
}

var clearStart = function() {
	clearInterval(hotPotatoeStart);
}

let timerComputer = () => {
	countdownThrow++;
	console.log(countdownThrow);
	if (countdownThrow == computerTimer) {
		throwBomb();
	}
}

let timerComputerIncrement = () => {
	incrementComputer = setInterval(timerComputer, 1000);
}

var clearTimerComputerIncrement = function() {
	clearInterval(incrementComputer);
}

let computerPassIt = () => {
	audio_Switch.play();
	countdownThrow = 0;
	computerTimer = Math.floor(Math.random() * ((throwMax - throwMin) + 1) + throwMin);
	timerComputerIncrement();
	activeBomb = "AI";
	inputUser = "CATCH IT";
	display2.innerHTML = "CATCH IT";
	
}

let throwBomb = () => {
	audio_Switch.play();
	clearTimerComputerIncrement();
	activeBomb = "PLAYER";
	inputUser = "PASS IT";
	display2.innerHTML = "PASS IT";
}



/*************************************** INIT DE LA PAGE **********************/


/* Move Arrow Up and Arrow Down */
let beforePreviousPage;
let previousPage;

let pressA = () => {
	audio_Enter.play();
	switch(inputUser) {
		case "" :
		title();
		getActive();
		up.addEventListener('click', moveUp3);
		down.addEventListener('click', moveDown3);
		break;

		case "MYSTERY NUMBER":
		initMystery();
		break;

		case "ROCK PAPER SCISSORS":
		menuRPS();
		up.addEventListener('click', moveUp3);
		down.addEventListener('click', moveDown3);
		getActive();
		break;

		case "AI VS AI":
		mod = "AI VS AI";
		audio_Music.pause()
		up.removeEventListener('click', moveUp3);
		down.removeEventListener('click', moveDown3);
		audio_Battle.play();
		choice();
		break;

		case "PLAYER VS AI":
		mod = "PLAYER VS AI";
		playing();
		break;

		case "ROCK":
		up.removeEventListener('click', moveUp3);
		down.removeEventListener('click', moveDown3);
		choice();
		break;

		case "PAPER":
		up.removeEventListener('click', moveUp3);
		down.removeEventListener('click', moveDown3);
		choice();
		break;

		case "SCISSORS":
		up.removeEventListener('click', moveUp3);
		down.removeEventListener('click', moveDown3);
		choice();
		break;

		case "ROUND":
		show();
		break;

		case "SHOW":
		inputUser = mod;
		up.addEventListener('click', moveUp3);
		down.addEventListener('click', moveDown3);
		buttonA.click();
		break;

		case "HOT POTATOE":
		initPotatoe();
		getActive();
		break;

		case "FIRST PASS IT":
		start();
		computerPassIt();
		break;

		case "PASS IT":
		computerPassIt();
		break;

		case "CATCH IT":
		countdown();
		break;

		case "GUESS":
		guessNumber();
		break;

		case "NEXTGUESS":
		nextGuess();
		break;

		case "EXIT":
		inputUser = "";
		buttonA.click();
		break;
	}
}

let pressB = () => {
	audio_Back.play();
	// switch(inputUser) {
	// 	case "": 
	// 	title();
	// 	break;

	// 	case "AI VS AI":
	// 	mod = "";
	// 	audio_Music.pause()
	// 	audio_Battle.play();
	// 	menuRPS();
	// 	break;

	// 	case "PLAYER VS AI":
	// 	mod = "";
	// 	audio_Music.pause()
	// 	audio_Battle.play();
	// 	menuRPS();
	// 	break;
}

let pressSelect = () =>{
	if (audio_Music.volume == 1) {

		audio_Battle.volume = 0;
		audio_Defeat.volume = 0;
		audio_Enter.volume = 0;
		audio_Hit.volume = 0;
		audio_Music.volume = 0;
		audio_Navigate.volume = 0;
		audio_Victory.volume = 0;
		audio_musicMystery.volume = 0;
		audio_Back.volume = 0;
		audio_Music_HotPotatoe.volume = 0;
		audio_Explosion.volume = 0;
		audio_Switch.volume = 0;
	} else {
		audio_Battle.volume = 1;
		audio_Defeat.volume = 1;
		audio_Enter.volume = 1;
		audio_Hit.volume = 1;
		audio_Music.volume = 1;
		audio_Navigate.volume = 1;
		audio_Victory.volume = 1;
		audio_musicMystery.volume = 1;
		audio_Back.volume = 1;
		audio_Music_HotPotatoe.volume = 1;
		audio_Explosion.volume = 1;
		audio_Switch.volume = 1;
	}
}

let pressStart = () =>{
	home();
	clearTimerComputerIncrement();
	clearStart();
	clean();
	displayCenter.classList.remove('row');
	displayCenter.classList.add('col');
	inputUser = '';
	audio_Battle.pause();
	audio_Battle.currentTime = 0;
	audio_musicMystery.pause();
	audio_musicMystery.currentTime = 0;
	audio_Music_HotPotatoe.pause();
	audio_Music_HotPotatoe.currentTime = 0;
	audio_Music.play();
	up.removeEventListener('click', moveUp421);
	down.removeEventListener('click', moveDown421);
	up.addEventListener('click', moveUp3);
	down.addEventListener('click', moveDown3);

}

/* Buttons press and release animations */

var push = function() {
	this.style.backgroundColor = "rgb(180, 0, 130)";
	this.style.borderColor = "rgb(204, 201, 201)";
}

var release = function() {
	this.style.backgroundColor = "";
	this.style.borderColor = "";
}

var pushArrow = function() {
	this.style.backgroundColor = "rgb(20, 20, 20)";
	this.style.borderColor = "rgb(204, 201, 201)";
}

var releaseArrow = function() {
	this.style.backgroundColor = "";
	this.style.borderColor = "";
}

for (var i = 0; i < Boutons.length; i++) {
	Boutons[i].addEventListener('mousedown', push);
	Boutons[i].addEventListener('mouseup', release);
}

/* Restore all display function */

let clean = () => {
	screen.style.backgroundColor = "";
	displayTop.style.backgroundColr = "";
	display1.style.backgroundColor = "";
	display2.style.backgroundColor = "";
	display3.style.backgroundColor = "";
	displayBot.style.backgroundColor = "";
	displayTop.style.fontSize = "";
	display1.style.fontSize = "";
	display2.style.fontSize = "";
	display3.style.fontSize = "";
	displayBot.style.fontSize = "";
	displayTop.style.color = "";
	display1.style.color = "";
	display2.style.color = "";
	display3.style.color = "";
	displayBot.style.color = "";
	displayTop.innerHTML = "";
	display1.innerHTML = "";
	display2.innerHTML = "";
	display3.innerHTML = "";
}

/* Buttons animation assignation */

up.addEventListener('mousedown', pushArrow);
up.addEventListener('mouseup', releaseArrow);
left.addEventListener('mousedown', pushArrow);
left.addEventListener('mouseup', releaseArrow);
right.addEventListener('mousedown', pushArrow);
right.addEventListener('mouseup', releaseArrow);
down.addEventListener('mousedown', pushArrow);
down.addEventListener('mouseup', releaseArrow);
buttonA.addEventListener('click', pressA);
buttonB.addEventListener('click', pressB);
buttonSelect.addEventListener('click', pressSelect);
buttonStart.addEventListener('click', pressStart);
up.addEventListener('click', moveUp3);
down.addEventListener('click', moveDown3);

/* Keyboard Listener */

document.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 38) {
		up.click();
		audio_Navigate.play();
	}
	if (event.keyCode === 37) {
		left.click();
		audio_Navigate.play();
	}
	if (event.keyCode === 39) {
		right.click();
		audio_Navigate.play();
	}
	if (event.keyCode === 40) {
		down.click();
		audio_Navigate.play();
	}
	if (event.keyCode === 13) {
		buttonA.click();
		audio_Enter.play();
	}
});

/* Static gameboy element positioning */

let selSta = document.getElementsByClassName('boutonsSelSta');
for (var i = 0; i < selSta.length; i++) {
	selSta[i].style.transform = "rotate(-35deg)";
}

let rotateRed = document.getElementsByClassName('rotateRed');
for (var i = 0; i < rotateRed.length; i++) {
	rotateRed[i].style.transform = "rotate(-35deg)";
}

let son = document.getElementById('barreDeSon');
son.style.transform = "rotate(50deg)";





/* Init the game */

home();
audio_Music.play();
audio_Battle.volume = 1;
audio_Defeat.volume = 1;
audio_Enter.volume = 1;
audio_Hit.volume = 1;
audio_Music.volume = 1;
audio_Navigate.volume = 1;
audio_Victory.volume = 1;
audio_musicMystery.volume = 1;
audio_Back.volume = 1;
