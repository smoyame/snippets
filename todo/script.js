// script.js
let list = localStorage.list ? new Map(JSON.parse(localStorage.list)) : new Map();

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

const pendingList = document.querySelector('.pending .todo-list');
const completedList = document.querySelector('.complete .todo-list');
const todoInput = document.querySelector('#todo');
const timestampAttr = "data-timestamp";
function add(timestamp = 0, value = { text: '', complete: false }) {

	const now = timestamp ? timestamp : Date.now();
	let completed = value.complete == true;
	let listNode = value.complete ? completedList : pendingList;
	let todoText = todoInput.value.match(/[^\s].*[^\s]/g) ? todoInput.value.match(/[^\s].*[^\s]/g)[0] : value.text ? value.text : '';
	let valueNode = document.createTextNode(todoText);

	if (todoText) {
		let item = newLi();
		item.span.appendChild(valueNode);
		item.label.appendChild(item.span);
		item.li.appendChild(item.label);
		item.li.querySelector('input').checked = completed;
		item.li.setAttribute(timestampAttr, now);
		listNode.appendChild(item.li);

		let itemObj = { text: todoText, complete: completed };
		list.set(now, itemObj);
		localStorage.list = JSON.stringify(Array.from(list));
		todoInput.value = '';
	}
}

function move(target) {
	let currentLi = target.parentElement.parentElement;
	const key = Number(currentLi.attributes[timestampAttr].value);
	let text = currentLi.innerText;
	let completed;

	if (target.checked) {
		completedList.appendChild(currentLi);
		completed = true;
		list.set(key, { text: text, complete: completed });
	} else {
		pendingList.appendChild(currentLi);
		completed = false;
		list.set(key, { text: text, complete: completed });
	}
	localStorage.list = JSON.stringify(Array.from(list));
}

function remove() {
	let completedItems = document.querySelectorAll('.complete li');
	console.log(completedItems);
	completedItems.forEach((element) => {
		const key = Number(element.attributes[timestampAttr].value);
		element.remove();
		list.delete(key);
		localStorage.list = JSON.stringify(Array.from(list));
	})
}

if (localStorage.list) {
	JSON.parse(localStorage.list).forEach((item) => {
		let key = item[0];
		let value = item[1];
		add(key, value);
	});
}