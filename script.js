let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



const taskInput = document.querySelector(".task-input input");
const addButton = document.querySelector(".task-input button");

tasks.forEach(function (taskText) {
    const taskItem = document.createElement("p");
    taskItem.textContent = taskText;

    taskItem.addEventListener("click", function () {
    tasks = tasks.filter(function (task) {
        return task !== taskText;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskItem.remove();
});
    

    document.querySelector(".task-app").appendChild(taskItem);
});

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }
    
    tasks.push(taskText);
localStorage.setItem("tasks", JSON.stringify(tasks));

    const taskItem = document.createElement("p");
    taskItem.textContent = taskText;
   taskItem.addEventListener("click", function () {
    tasks = tasks.filter(function (task) {
        return task !== taskText;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskItem.remove();
});

    document.querySelector(".task-app").appendChild(taskItem);

    taskInput.value = "";
});
