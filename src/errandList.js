class toDoList {
    constructor(){
    this.toDos = [];
    }

    createNewTodo(description){
        const newToDo = new toDo(description);
        this.toDos.push(newToDo);
    }
    
    renderToDos(){
        return this.toDos.map((todo)=> toDo.render()).join("");
    }

    deleteTodo(description) {
        this.toDos = this.toDos.filter((todo) => todo.description !== description);
    }
}