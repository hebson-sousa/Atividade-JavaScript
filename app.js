import TaskManager from "./taskManager.js";

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

const taskManager = new TaskManager();

addTaskButton.addEventListener("click", () => {
  const taskName = taskInput.value;
  if (taskName) {
    taskManager.addTask(taskName);
    updateTaskList();
    taskInput.value = "";
  }
});

const updateTaskList = () => {
  taskList.innerHTML = "";
  taskManager.tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${task.name} 
            <button onclick="removeTask(${task.id})">Remover</button>
        `;
    taskList.appendChild(listItem);
  });
};

window.removeTask = (taskId) => {
  taskManager.removeTask(taskId);
  updateTaskList();
};