document.addEventListener("DOMContentLoaded", () => {
 // 1. Elements we want listening for events
const toDoList = new toDoList();

//access elementById for each form component
const newToDo = document.getElementById('create-todo-form');
const newDescription = document.getElementById('todo-description');
     
const toDoUl = document.getElementById("todos");

 newToDoForm.addEventListener("submit, createnewToDo");
});

const createNewToDo = event => {
    event.preventDefault();

     const newDescription = document.getElementById("new-todo-description");
     const newToDo = document.createElement("li");
     newToDo.innerText = newDescription.value;

     appendNewToDo(newToDo);
     event.target.reset();
};

const appendnewToDo = todo => {
    document.getElementById("todos").appendChild(todo);
};
