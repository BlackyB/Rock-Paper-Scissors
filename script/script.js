let Boutons = document.getElementsByClassName('boutonsRouge');
let buttonA = document.getElementById('buttonA');
let buttonB = document.getElementById('buttonB');
let up = document.getElementById('arrow-Up');
let left = document.getElementById('arrow-Left');
let right = document.getElementById('arrow-Right');
let down = document.getElementById('arrow-Down');

let screen = document.getElementById('screen');
let displays = document.getElementsByClassName('displayScreen');
let display1 = document.getElementById('display1');
let display2 = document.getElementById('display2');
let display3 = document.getElementById('display3');
let active;
let mod;
let compteurUser = 0;
let compteurComputer = 0;
let inputUser;
let inputComputer;
let winScore = 3;
let result= '';

let audio_Battle = new Audio('../sounds/battle.wav');
let audio_Music = new Audio('../sounds/music.mp3');
let audio_Enter = new Audio('../sounds/enter.wav');
let audio_Back = new Audio('../sounds/back.wav');
let audio_Navigate = new Audio('../sounds/updown.wav');
let audio_Hit = new Audio('../sounds/hit.wav');
let audio_Defeat = new Audio('../sounds/defeat.wav');
let audio_Victory = new Audio('../sounds/victory.wav');

/* Move Arrow Up and Arrow Down */

let moveUp2 = () => {
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
			case 2:
			display3.classList.add('displayActive');
			inputUser = display3.innerText;	
			break;
			case 3:
			display2.classList.add('displayActive');
			inputUser = display2.innerText;
			break;
		}
	}
}

let moveDown2 = () => {
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
			case 2:
			display3.classList.add('displayActive');
			inputUser = display3.innerText;	
			break;
			case 3:
			display2.classList.add('displayActive');
			inputUser = display2.innerText;
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
	display2.innerHTML = "ROCK PAPER SCISSORS";
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
	buttonA.addEventListener('click', reset);
	buttonA.removeEventListener('click', menu);
	buttonB.addEventListener('click', reset);
	buttonB.removeEventListener('click', home);
}

/* First Menu */

let reset = () => {
	audio_Enter.play();
	clean();
	mod = '';
	display2.innerHTML = "PLAY";
	display3.innerHTML = "EXIT";
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	display2.classList.add('displayActive');
	up.addEventListener('click', moveUp2);
	down.addEventListener('click', moveDown2);
	up.removeEventListener('click', moveUp3);
	down.removeEventListener('click', moveDown3);
	buttonA.removeEventListener('click', reset);
	buttonA.removeEventListener('click', playing);
	buttonA.addEventListener('click', menu);
	buttonB.removeEventListener('click', reset);
	buttonB.addEventListener('click', home);
}

/* Mod Selection Menu */

let menu = () => {
	audio_Enter.play();
	clean();
	active = document.getElementsByClassName('displayActive');
	up.removeEventListener('click', moveUp2);
	down.removeEventListener('click', moveDown2);
	up.addEventListener('click', moveUp3);
	down.addEventListener('click', moveDown3);
	buttonA.removeEventListener('click', menu);
	buttonA.addEventListener('click', playing);
	buttonB.removeEventListener('click', menu);
	buttonB.removeEventListener('click', home);
	buttonB.addEventListener('click', reset);
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
	if (inputUser == "EXIT") {
		home();
	}
	inputUser = '';
}

/* Rock|Paper|Scissors choice */

let playing = () => {
	clean();
	audio_Battle.play();
	audio_Enter.play();
	up.addEventListener('click', moveUp3);
	down.addEventListener('click', moveDown3);
	for (var i = 0; i < Boutons.length; i++) {
		Boutons[i].removeEventListener('mousedown', playing);
	}
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	buttonA.addEventListener('click', choice);
	display1.innerHTML = "<p>Rock</p>";
	display2.innerHTML = "<p>Paper</p>";
	display3.innerHTML = "<p>Scissors</p>";
	display1.classList.add('displayActive');
	buttonB.removeEventListener('click', reset);
	buttonA.removeEventListener('click', playing);
	if (inputUser == "PLAYER VS AI" || mod == "PVE"){
		mod = "PVE";
		audio_Music.pause();
	} else if (inputUser == "AI VS AI"  || inputUser == "" || mod == "AI") {
		mod = "AI";
		audio_Music.pause();
		choice();
	} else if (inputUser == "EXIT") {
		reset();
	}
}

/* Result Display */

let show = () => {
	clean();
	buttonA.removeEventListener('click', show);
	buttonA.addEventListener('click', playing);
	display1.innerHTML = playerName + ' - ' + compteurUser;
	display2.innerHTML = "";
	display3.innerHTML = "AI - " + compteurComputer;
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	
}

/* Duel resolve */

var choice = function() {
	buttonA.removeEventListener('click', choice);
	active = document.getElementsByClassName('displayActive');
	playerName = "Player";
	coeffUser = '';
	if (mod == "AI") {
		coeffUser = Math.floor((Math.random() * 3)) + 1;
		playerName = "Player Auto";
		switch(coeffUser) {
			case 1 :
			inputUser = "Rock";
			break;
			case 2 :
			inputUser = "Paper";
			break;
			case 3 :
			inputUser = "Scissors";
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
		inputComputer = "Rock";
		break;
		case 2 :
		inputComputer = "Paper";
		break;
		case 3 :
		inputComputer = "Scissors";
		break;
	}
	switch(inputUser) {

		case 'Rock' :

		if (inputComputer == "Rock") {
			result = 'Draw, try again !';
		}
		if (inputComputer == "Paper") {
			result = 'Computer scores !';
			compteurComputer++;
		}
		if (inputComputer == "Scissors") {
			result = playerName + ' scores !';
			compteurUser++;
		}
		break;

		case 'Paper' :

		if (inputComputer == "Rock") {
			result = playerName + ' scores !';
			compteurUser++;
		}
		if (inputComputer == "Paper") {
			result = 'Draw, try again !';
		}
		if (inputComputer == "Scissors") {
			result = 'Computer scores !';
			compteurComputer++;
		}
		break;

		case 'Scissors':

		if (inputComputer == "Rock") {
			result = 'Computer scores !';
			compteurComputer++;
		}
		if (inputComputer == "Paper") {
			result = playerName + ' score !';
			compteurUser++;
		}
		if (inputComputer == "Scissors") {
			result = 'Draw, try again !';
		}
		break;

	}
	up.removeEventListener('click', moveUp3);
	down.removeEventListener('click', moveDown3);
	for (var i = 0; i < displays.length; i++) {
		displays[i].classList.remove('displayActive');
	}
	audio_Hit.play();
	display2.classList.add('displayActive');
	display1.innerHTML = playerName + ' ' + inputUser;
	display2.innerHTML = result;
	display3.innerHTML = 'AI ' + inputComputer;
	buttonA.addEventListener('click', show);

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
		buttonA.removeEventListener('click', show);
		audio_Battle.pause();
		audio_Battle.currentTime = 0;
		audio_Music.play();
		buttonA.addEventListener('click', menu);
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
		buttonA.removeEventListener('click', show);
		audio_Battle.pause();
		audio_Battle.currentTime = 0;
		audio_Music.play();
		buttonA.addEventListener('click', menu);
	}
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
	display2.style.backgroundColor = "";
	display1.style.fontSize = "";
	display2.style.fontSize = "";
	display3.style.fontSize = "";
	display1.style.color = "";
	display2.style.color = "";
	display3.style.color = "";
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

/* Keyboard Listener */

document.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 38) {
		up.click();
	}
	if (event.keyCode === 37) {
		buttonB.click();
	}
	if (event.keyCode === 39) {
		buttonA.click();
	}
	if (event.keyCode === 40) {
		down.click();
	}
	if (event.keyCode === 13) {
		buttonA.click();
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

