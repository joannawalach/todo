let TodoApp = {
    tasks:[],
    add: function(name) {
        this.tasks.push({
            task: name
        })
    },
    removebyIndex: function(i) {
        if (i >= this.tasks.length) return;
        this.tasks.splice(i,0);
    },
    printTasks: function() {   
        for (let i = 0; i <this.tasks.length; i++) {
        let task = this.tasks[i]
            console.log(this.tasks[i])
        }
        console.log(this.tasks)
    }
}
    
    TodoApp.add("drink water");
    TodoApp.add("learn Spanish");
    TodoApp.removebyIndex(3);
    TodoApp.printTasks();