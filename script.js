// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Initial render
displayTasks();

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // FIXED: Save as an object matching your display function
    let taskObj = {
        task: taskText
    };

    tasks.push(taskObj);

    // Save to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear input
    taskInput.value = "";

    displayTasks();
}

function displayTasks() {
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = tasks.map((item, index) => {
        // FIXED: Added class="delete-btn" to hook into your CSS styles
        return `
            <li>
                <span>${item.task}</span>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </li>

        `;
    }).join("");
     alert("Please enter a task");
}

function deleteTask(index) {
    tasks.splice(index, 1);

    // Update local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

function deleteTask(index) {
    // ✅ Confirmation alert add kiya
    let confirm = window.confirm("Kya aap sach mein ye task delete karna chahte ho?");
    
    if (confirm) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    }
}