// Import task functions
import { addTask, getAllTasks, completeTask } from './task.js';

// 1. Add some tasks
let task1 = addTask("gam", "Low", "2026-08-08");
console.log(task1);

let task2 = addTask("sleeping", "High", "2026-09-09"); 
console.log(task2);

// 2. Display all tasks
let allTasks = getAllTasks();   
console.log(allTasks);

// 3. Complete a task (by index)
let completed = completeTask(0); 
console.log(completed);

// 4. Display all tasks again
console.log(getAllTasks());
