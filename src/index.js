import './style.css';

const Tasks = [
  {
    description: "Drag 'n drop to reorder your list",
    completed: false,
    index: 3,
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
displayTasks(Tasks);