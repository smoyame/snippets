// script.js
let list = new Map();
let id = -1;
function store(value) {
	id++;
	list.set(value, { complete: false });
}

function move(target) {
	let currentItem = target.parentElement.parentElement;
	let pendingList = document.querySelector('.pending .todo-list');
	let completedList = document.querySelector('.complete .todo-list');
	let instance = list.get(currentItem.innerText)
	if (target.checked) {
		completedList.appendChild(currentItem)
		instance.complete = true;
	} else {
		pendingList.appendChild(currentItem)
		instance.complete = false;
	}
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
		input.setAttribute("onclick", 'move(this)')

		span.appendChild(valueNode);
		label.appendChild(input);
		label.appendChild(span);
		li.appendChild(label);

		listNode.appendChild(li)
		store(todoText)

		document.querySelector('#todo').value = ''
	}
}

function remove(target) {
	let items = document.querySelectorAll('[name="todo"]:checked');
	items.forEach((element) => { element.parentElement.parentElement.remove() })
}