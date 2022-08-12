const taskContainer = document.querySelector('.task-container');

export default class myTodo {
    constructor() {
        this.tasks = [];
    }

    addTask = (description) => {
        const myTask = {
            description,
            completed : false,
            index : this.tasks.length + 1
        }
        //nthis.resetIndex();
        this.tasks.push(myTask);
    }
    remove = (id) => {
        this.tasks.forEach((task) => {
            if(task.index === id + 1) {
                this.tasks 
                .splice(this.tasks[id],1);
                console.log('in');
            }
        });
    }
    resetIndex = () => {
        let initialIndex = 1;
        this.tasks.forEach((task) => {
          task.index = initialIndex;
          initialIndex += 1;
        });
    }

    cleanCompleted = () => {
        this.tasks = this.tasks.filter((task) => task.completed === false);
    }

    taskTemplate = (task) => `
        <div class="task">
            <div class="t-left" id=${task.index}>
                <input type="checkbox" name="Drag" class='checkbox' ${task.completed ? 'checked' : ''} id=${task.index}> 
                <label for="" class=${task.completed ? 'line task-label' : 'task-label'}>${task.description}</label>
            </div>
            <p class="deleteTask" id=${task.index}>Delete</p> 
        </div>`;

    displayTasks = () => {
        this.tasks 
        .forEach((task) => taskContainer.insertAdjacentHTML('beforeend', this.taskTemplate(task)));
        const checkboxes = document.querySelectorAll('.checkbox');
        const taskLabel = taskContainer.querySelectorAll('.task-label');
        checkboxes.forEach((checkbox,id) => {
            checkbox.addEventListener('change', () => {
            if (checkbox.checked) { 
                console.log(taskLabel, "checked ", id)
                taskLabel[id]?.classList.add('line'); 
                this.tasks = this.tasks.map((task) => {
                    if(task.index === parseInt(checkbox.parentElement.id,10)){
                        task.completed = true; 
                    }
                   // console.log(taskLabel, "checked ", id)
                   return task;
                    
                });  
            } else { 
                taskLabel[id]?.classList.remove('line');
                this.tasks = this.tasks.map(task => {
                    if(task.index === parseInt(checkbox.parentElement.id,10)){
                        task.completed = false;
                    }
                    //console.log(task, "unchecked")
                    return  task;
                });  
            }
            });
        });

         let deleteBtn = document.querySelectorAll('.deleteTask');
         deleteBtn.forEach((btn,index) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const id = e.currentTarget.id;
                this.remove(index);
                taskContainer.innerHTML = '';
                this.displayTasks(this.tasks);
                console.log('deleted',index , id);
            });
        });
        
    }
    setStorage = () => {
        const formData = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', formData);
      };
    
    getStorage = () => {
        if (localStorage.getItem('tasks')) {
          this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
      };
}