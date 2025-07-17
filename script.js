function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete when clicking the task (not the icon)
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Create delete button with icon
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'; // Trash icon
  deleteBtn.onclick = function (event) {
    event.stopPropagation(); // Prevent toggle on delete click
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
