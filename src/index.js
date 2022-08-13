import './style.css';
import MyTodo from './modules/todo.js';

const taskContainer = document.querySelector('.task-container');
const taskEntered = document.querySelector('.in-task');
const submitTask = document.querySelector('.fa-left-long');
const form = document.querySelector('form');
const deleteTaskes = document.querySelector('.delete');
const todoList = new MyTodo();
todoList.displayTasks();

const confirmInput = () => {
  if (taskEntered.value.trim()) {
    todoList.addTask(taskEntered.value);
    taskEntered.value = '';
    taskContainer.innerHTML = '';
    todoList.displayTasks();
  }
};
submitTask.addEventListener('click', (e) => {
  e.preventDefault();
  confirmInput();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  confirmInput();
});

deleteTaskes.addEventListener('click', () => {
  todoList.cleanCompleted();
  todoList.displayTasks();
});
