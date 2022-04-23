var form = document.getElementById('form-list');
var taskList = document.getElementById('tasks');

//cAPTURA OS DADOS DIGITADOS NO INPUT E RESETA O INPUT
form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('input');
    addTask(inputField.value);
    form.reset();
};

// CRIAR OS ELEMENTOS NO CAMPO DA TASK LIST
function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}


