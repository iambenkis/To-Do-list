// import './style.css';
import myTodo from "./modules/todo.js";
const Tasks = [
  {
    description: "Drag 'n drop to reorder your list",
    completed: false,
    index: 0,
  },
  {
    description: 'Manage all your lists in one place',
    completed: false,
    index: 1,
  },
  {
    description: 'Resync to clear out the old',
    completed: false,
    index: 2,
  },
];
const taskContainer = document.querySelector('.task-container');
const taskEntered = document.querySelector('.in-task');
const submitTask = document.querySelector('.fa-left-long');
const form = document.querySelector('form'); 
const todoList = new myTodo();
todoList.displayTasks();

const confirmInput = () => {
  if (taskEntered.value.trim()) { 
    todoList.addTask(taskEntered.value);
    taskEntered.value = '';
    taskContainer.innerHTML = ''; 
    todoList.displayTasks();  
  }
}
submitTask.addEventListener('click', (e) => {
  e.preventDefault();
  confirmInput();
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  confirmInput(); 
})
