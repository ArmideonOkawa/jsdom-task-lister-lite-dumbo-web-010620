document.addEventListener("DOMContentLoaded", () => {
 // 1. Elements we want listening for events
const errandList = new errandList();

//access elementById for each form component
const newErrand = document.getElementById('create-task-form');
const newDescription = document.getElementById('task-description');
     
const errandUl = document.getElementById("errands");

newErrandForm.addEventListener("submit, createnewerrand");
});

const createNewErrand = event => {
    event.preventDefault();

     const newDescription = document.getElementById("new-task-description");
     const newErrand = document.createElement("li");
     newErrand.innerText = newDescription.value;

     appendNewErrand(newerrand);
     event.target.reset();
};

const appendNewErrand = errand => {
    document.getElementById("errands").appendChild(errand);
};
