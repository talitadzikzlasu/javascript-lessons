const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = taskInput.value;
  if (taskName) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
            <span class='task-name'>${taskName}</span>
            <div class="task-actions">
                <button class="complete-button">Zakończone</button>
                <button class="delete-button">Usuń</button>
            </div>
        `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("complete-button")) {
    const taskItem = e.target.closest(".task-item");
    taskItem.classList.toggle("completed");
  } else if (e.target.classList.contains("delete-button")) {
    const taskItem = e.target.closest(".task-item");
    taskList.removeChild(taskItem);
  }
});


