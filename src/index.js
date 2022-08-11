import './style.css';

const Tasks = [
  {
    description: "Drag 'n drop to reorder your list",
    completed: false,
    index: 1,
  },
  {
    description: 'Manage all your lists in one place',
    completed: false,
    index: 2,
  },
  {
    description: 'Resync to clear out the old',
    completed: false,
    index: 3,
  },
];
const taskContainer = document.querySelector('.task-container');
const taskEntered = document.querySelector('.in-task');
const submitTask = document.querySelector('.fa-left-long');
const taskTemplate = (task) => `
    <div class="task">
        <div class="t-left">
            <input type="checkbox" name="Drag" class="checkbox"> 
            <label for="">${task}</label>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i> 
    </div>
`;

const displayTasks = (arr) => {
  arr.sort((a, b) => b.index - a.index);
  arr.map((task) => taskContainer.insertAdjacentHTML('afterbegin', taskTemplate(task.description)));
};

const addFunction = () => {
  if(taskEntered.value !== '') {
    Tasks.unshift({
      description: taskEntered.value,
      completed: false,
      index: Tasks.length + 1,
    })
    taskContainer.innerHTML = '';
    displayTasks(Tasks); 
    taskEntered.value = '';
  }
}

const addTask = () => {
  submitTask.addEventListener('click', (e) => {
    addFunction();
  })
  document.querySelector('form').addEventListener('submit', (e) => {
    addFunction();
  })
};

displayTasks(Tasks);
addTask();