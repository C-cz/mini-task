const taskInput = document.querySelector(".task-input input");
const addButton = document.querySelector(".task-input button");

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("p");
    taskItem.textContent = taskText;
    taskItem.addEventListener("click", function () {
    taskItem.remove();
});

    document.querySelector(".task-app").appendChild(taskItem);

    taskInput.value = "";
});
