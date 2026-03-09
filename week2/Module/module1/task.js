import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = []; 

// 1. Add new task
function addTask(title, priority, dueDate) {
  if (
    validateTitle(title) === "valid" &&
    validateDueDate(dueDate) === "valid" &&
    validatePriority(priority) === "valid"
  ) {
    tasks.push({ title, priority, dueDate, completed: false });
    return tasks;
  }
  return "not valid";
}

// 2. Get all tasks
function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  const task = tasks[taskId];
  if (task) {
    task.completed = true;
    console.log("marked as complete:", taskId);
    return task;
  }
  return "not found";
}

export { addTask, getAllTasks, completeTask };
