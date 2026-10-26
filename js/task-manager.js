let myTasks = [];
let nextID = 1;

function logAllTasks() {
    console.log(JSON.stringify(myTasks));
}

function styleTasks(task, taskNode) {
    const textNode = taskNode.querySelector(".task-text");

    if (task.isImportant) {
        taskNode.style.color = "white";
        taskNode.style.backgroundColor = "#000000";
        taskNode.style.fontWeight = "bold";
    } else {
        taskNode.style.color = "";
        taskNode.style.backgroundColor = "";
        taskNode.style.fontWeight = "bold";
    }

    if (task.isCompleted) {
        textNode.style.textDecoration = "line-through";
    } else {
        textNode.style.textDecoration = "none";
    }
}

function addTask(taskName, taskPriority, important) {
    const task = {
        id: nextID,
        name: taskName,
        priority: taskPriority,
        isImportant: important,
        isCompleted: false
    };
    myTasks.push(task);
    nextID++;

    const taskList = document.getElementById("task-list");

    const taskNode = document.createElement("div");
    taskNode.id = "task-" + task.id;

    taskNode.className = "task-item priority-" + task.priority.toLowerCase();

    const textNode = document.createElement("span");
    textNode.className = "task-text";
    textNode.textContent =
        task.name +
        " | Priority: " + task.priority +
        " | Important: " + (task.isImportant ? "Yes" : "No");

    const completeBtn = document.createElement("button");
    completeBtn.type = "button";
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function () {
        completeTask(task.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        deleteTask(task.id);
    });

    taskNode.append(textNode, completeBtn, deleteBtn);
    styleTasks(task, taskNode);
    taskList.append(taskNode);

    logAllTasks();
}

function completeTask(id) {
    const task = myTasks.find(function (t) { return t.id === id; });
    if (!task) return;

    task.isCompleted = !task.isCompleted;
    styleTasks(task, document.getElementById("task-" + id));
    logAllTasks();
}

function deleteTask(id) {
    myTasks = myTasks.filter(function (t) { return t.id !== id; });
    document.getElementById("task-" + id).remove();
    logAllTasks();
}

function deleteTaskList() {
    myTasks = [];
    document.getElementById("task-list").innerHTML = "";
    logAllTasks();
}
document.getElementById("task-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const taskName = nameInput.value.trim();
    if (taskName === "") return;

    addTask(
        taskName,
        document.getElementById("priority").value,
        document.getElementById("is-important").checked
    );

    nameInput.value = "";
    document.getElementById("is-important").checked = false;
    nameInput.focus();
});

document.getElementById("delete-tasks").addEventListener("click", deleteTaskList);