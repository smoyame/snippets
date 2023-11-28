// script.js

let list = [];
let todoText;

function addToList() {
	todoText = document.querySelector('#todo').value
	list.push(todoText);
}