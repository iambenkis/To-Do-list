

class myTodo {
    constructor() {
        this.tasks = [];
    }

    addTask (description){
        const myTask = {
            description,
            completed : false,
            id : this.tasks.length + 1
        }
        this.tasks.push(myTask)

    }
}