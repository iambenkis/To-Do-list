// import './style.css';

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
const deleteBtn  = document.querySelector('.delete');
const taskTemplate = (task) => `
    <div class="task">
        <div class="t-left">
            <input type="checkbox" name="Drag" class="checkboxes"> 
            <label for="" class="task-label">${task}</label>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i> 
    </div>
`;

class List {
  constructor(){
    this.myTask = [];
  }
}

const displayTasks = (arr) => {
  arr.sort((a, b) => b.index - a.index);
  arr.map((task) => taskContainer.insertAdjacentHTML('afterbegin', taskTemplate(task.description)));
  const taskLabel = taskContainer.querySelectorAll('.task-label');
  const checkboxes = taskContainer.querySelectorAll('.checkboxes');
  checkboxes.forEach((checkbox,index) => {
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      taskLabel[index].classList.add('line');
    } else {
      taskLabel[index].classList.remove('line');
    }
  });
});
  deleteFunc();
};

const deleteFunc = () => {
  deleteBtn.addEventListener('click',(e)=> {
    e.preventDefault();
    const checkboxes = taskContainer.querySelectorAll('.checkboxes');
    checkboxes.forEach((checkbox,index) => {
        if (checkbox.checked){  
          Tasks.splice(index - 1, 1);
          console.log(Tasks , index);
          resetIndex();
          taskContainer.innerHTML = '';
          displayTasks(Tasks);  
          checkbox.checked = false;
        }
      });
  })
};

const addFunction = () => { 
  if(taskEntered.value !== '') {
    Tasks.unshift({
      description: taskEntered.value,
      completed: false,
      index: 1,
    });
    resetIndex();
    taskContainer.innerHTML = '';
    displayTasks(Tasks); 
    taskEntered.value = '';
  }
}

const resetIndex = () => {
  let initialIndex = 1;
    Tasks.forEach((task) => {
      task.index = initialIndex;
      initialIndex += 1;
    });
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