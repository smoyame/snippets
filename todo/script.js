// script.js

const listNode = document.querySelector('.todo-list');
let list = [];

function addToList() {
	let todoText = document.querySelector('#todo').value
	list.push(todoText);
}