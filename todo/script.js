// script.js

let list = [];
let todoText;

function getTodo() {
	todoText = document.querySelector('#todo').value
	list.push(todoText);
}