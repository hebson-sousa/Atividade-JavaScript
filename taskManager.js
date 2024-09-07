export default class TaskManager {
  constructor() {
    this.tasks = [];
    this.taskId = 0;
  }

  addTask(taskName) {
    const newTask = {
      id: ++this.taskId,
      name: taskName,
    };
    this.tasks = [...this.tasks, newTask];
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}