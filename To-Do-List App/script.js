const inputBox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');
const todoApp = document.getElementById('todo-app');
function addTask(){
	if(inputBox.value === ''){
		alert('Please enter a task');
	} else {
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		listcontainer.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
	}
	saveData();
	inputBox.value = '';
}
listcontainer.addEventListener('click', function(e) {
	if(e.target.tagName === 'LI'){
		e.target.classList.toggle('checked');
	}
	else if(e.target.tagName === 'SPAN'){
		e.target.parentElement.remove();
	}
	saveData();
}, false);
function saveData(){
	localStorage.setItem("data", listcontainer.innerHTML)
}
function showData(){
	listcontainer.innerHTML = localStorage.getItem("data");
}
showData();

const addDate = document.getElementById('date');
const addedDate = new Date();
addDate.innerHTML = addedDate.toLocaleString();
// console.log(addedDate.toISOString());

