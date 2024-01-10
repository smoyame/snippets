// script.js
let list = new Map();

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
function add(text = '', complete = "false") {
	let listNode = complete == "false" ? pendingList : completedList;
	let todoText = todoInput.value.match(/[^\s].*[^\s]/g) ? todoInput.value.match(/[^\s].*[^\s]/g) : null;
	let valueNode = document.createTextNode(todoText);
	if (todoText) {
		let item = newLi();
		item.span.appendChild(valueNode);
		item.label.appendChild(item.span);
		item.li.appendChild(item.label);
		item.li.querySelector('input').checked = complete == "true" ? true : false;
		listNode.appendChild(item.li);

		list.set(todoText, complete);
		localStorage[todoText] = complete;
		todoInput.value = ''
	}
}

function move(target) {
	let currentItem = target.parentElement.parentElement;
	if (target.checked) {
		completedList.appendChild(currentItem)
		list.set(currentItem.innerText, true);
		localStorage.setItem(currentItem.innerText, true)
	} else {
		pendingList.appendChild(currentItem)
		list.set(currentItem.innerText, false);
		localStorage.setItem(currentItem.innerText, false)
	}
}

function remove() {
	let items = document.querySelectorAll('[name="todo"]:checked');
	items.forEach((element) => {
		let li = element.parentElement.parentElement
		li.remove();
		list.delete(li.innerText);
		localStorage.removeItem(li.innerText);
	});
}

if (localStorage.length) {
	Object.entries(localStorage).forEach((item) => {
		list.set(item[0], item[1]);
		add(item[0], item[1]);
	})
}