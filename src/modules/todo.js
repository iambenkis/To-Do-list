

class myTodo {
    constructor() {
        this.tasks = [];
    }

    addTask = (description) => {
        const myTask = {
            description,
            completed : false,
            index : this.tasks.length + 1
        }
        this.tasks.push(myTask)
    }
    remove = (index) => {
        this.tasks.forEach((task,id) => {
            if(task.index === index) {
                this.tasks
                .splice(this.task[id],1);
            }
        });
    }
    template = (task) => `
        <div class="task">
            <div class="t-left">
                <input type="checkbox" name="Drag" class="checkboxes"> 
                <label for="" class="task-label">${task}</label>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i> 
        </div>
    `;
}