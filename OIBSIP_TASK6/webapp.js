const taskTitleInput = document.getElementById('taskTitleInput');
const taskDescriptionInput = document.getElementById('taskDescriptionInput');
const saveTaskButton = document.getElementById('saveTaskButton');
const deleteTaskButton = document.getElementById('deleteTaskButton');
const taskTitleElement = document.getElementById('taskTitle');
const taskDescriptionElement = document.getElementById('taskDescription');
const allTasksTab = document.getElementById('allTasksTab');
const allTasksList = document.getElementById('allTasksList');

// Array to store tasks
let tasks = [];
let selectedTaskIndex = -1;

// Function to render tasks
function renderTasks() {
  allTasksList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.title;
    listItem.addEventListener('click', () => displayTaskDetails(index));

    if (task.completed) {
      listItem.classList.add('completed');
    }

    allTasksList.appendChild(listItem);
  });

  clearTaskDetails();
}

// Function to add a task
function addTask() {
  const title = taskTitleInput.value.trim();
  const description = taskDescriptionInput.value.trim();

  if (title !== '') {
    const task = {
      title: title,
      description: description,
      completed: false,
      created: new Date()
    };
    tasks.push(task);
    renderTasks();
    clearTaskInput();
  }
}

// Function to display task details
function displayTaskDetails(index) {
  selectedTaskIndex = index;

  const task = tasks[index];
  taskTitleElement.textContent = task.title;
  taskDescriptionElement.textContent = task.description;

  deleteTaskButton.style.display = 'inline';
}

// Function to clear task details
function clearTaskDetails() {
  selectedTaskIndex = -1;
  taskTitleElement.textContent = '';
  taskDescriptionElement.textContent = '';

  deleteTaskButton.style.display = 'none';
}

// Function to delete a task
function deleteTask() {
  if (selectedTaskIndex !== -1) {
    tasks.splice(selectedTaskIndex, 1);
    renderTasks();
  }
}

// Event listeners
saveTaskButton.addEventListener('click', addTask);
deleteTaskButton.addEventListener('click', deleteTask);

// Initial rendering
renderTasks();
