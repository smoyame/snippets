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

function newLi() {
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
	label.appendChild(input);

	let itemInfo = { li: li, span: span, label: label }
	return (itemInfo)
}

const listNode = document.querySelector('.todo-list');
function add(text = '', complete = false) {
	let todoText = document.querySelector('#todo').value.match(/[^\s](?:.*)(?=\b)/g) ? document.querySelector('#todo').value : text ? text : null;
	let valueNode = document.createTextNode(todoText);
	if (todoText) {
		let item = newLi();
		item.span.appendChild(valueNode);
		item.label.appendChild(item.span);
		item.li.appendChild(item.label);
		listNode.appendChild(item.li);

		store(todoText)

		document.querySelector('#todo').value = ''
	}
}

function remove() {
	let items = document.querySelectorAll('[name="todo"]:checked');
	items.forEach((element) => {
		element.parentElement.parentElement.remove();
		list.delete(element.parentElement.parentElement.innerText);
	});
}