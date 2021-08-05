/*
const squad = document.querySelectorAll('.squad')

setTimeout(function() {	// setTimeout(function() {}, 10);
	squad.classList.remove('squad')
	squad.classList.add('imgSquad')
}, 0);


console.log(squad)
============================================================
	version 0.1.






// descriptionSquad, imgSquad
const squad = document.querySelector('.squad')
// squad.classList.remove('squad')


const imgSquad = document.querySelector('img')
// squad.classList.add('imgSquad')


console.log(imgSquad)
console.log(squad)






function imgSquad() {

}
*/





const shadow = document.querySelector('.shadow')
const buttonShadow = document.querySelector('.buttonShadow')

buttonShadow.onclick = function() {
	shadow.classList.toggle('shadow')
	shadow.classList.toggle('dontShadow')
}

console.log(shadow)
console.log(buttonShadow)


const background = document.querySelector('.background')
const buttonBackground = document.querySelector('.buttonBackground')

buttonBackground.onclick = function() {
	background.classList.toggle('background')
	background.classList.toggle('dontBackground')
}

console.log(background)
console.log(buttonBackground)