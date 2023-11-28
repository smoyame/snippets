// script.js
let list = [];
let id = -1;
function store(value) {
	id++;
	let item = {
		id: id,
		complete: false,
		value: value
	}
	list.push(item);
}

const listNode = document.querySelector('.todo-list');
function add() {
	let todoText = document.querySelector('#todo').value.match(/[^\s](?:.*)(?=\b)/g) ? document.querySelector('#todo').value : null;
	if (todoText) {
		let valueNode = document.createTextNode(todoText);

		let li = document.createElement("li");
		let label = document.createElement("label");
		let span = document.createElement("span");
		let input = document.createElement("input");

		li.classList.add("todo-item")
		label.classList.add("label")
		label.classList.add("todo-item-wrapper")
		span.classList.add("todo-text")
		input.classList.add("todo-checkbox")
		input.setAttribute("type", "checkbox")
		input.setAttribute("name", "todo")

		span.appendChild(valueNode);
		label.appendChild(input);
		label.appendChild(span);
		li.appendChild(label);

		listNode.appendChild(li)
		store(todoText, false)

		document.querySelector('#todo').value = ''
	}
}