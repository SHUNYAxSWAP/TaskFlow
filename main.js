function closeModal() {
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".modal").classList.add("inactive");
}

let target;
document.querySelectorAll(".addTaskBtn").forEach((element) => {
  element.addEventListener("click", () => {
    target = element.id;
    document.querySelector(".modal").classList.add("active");
    document.querySelector(".modal").classList.remove("inactive");
  });
});

document.querySelector("#submitTask").addEventListener("click", () => {
  addTask();
  closeModal();
});
let c = 0;
function addTask() {
  let task_list = document.querySelector("#todo");

  let task = document.createElement("div");
  task.setAttribute("class", "task");
  task.setAttribute("draggable", "true");
  task.setAttribute("id", c);


  let h3 = document.createElement("h3");
  h3.setAttribute("class", "task-title");
  h3.innerText = document.querySelector("#newTask").value;

  let p = document.createElement("p");
  p.setAttribute("class", "task-desc");
  p.innerText = document.querySelector("#desc").value;

  let task_meta = document.createElement("div");
  task_meta.setAttribute("class", "task-meta");
  let span1 = document.createElement("span");
  span1.setAttribute(
    "class",
    "task-priority " + document.querySelector("#priority").value
  );
  span1.innerText = document.querySelector("#priority").value;
  let span2 = document.createElement("span");
  span2.setAttribute("class", "task-date");
  span2.innerText = document.querySelector("#date").value;
  task_meta.appendChild(span1);
  task_meta.appendChild(span2);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-regular", "fa-trash");  

  task.appendChild(h3);
  task.appendChild(p);
  task.appendChild(task_meta);
  task.appendChild(deleteIcon);
  task_list.appendChild(task);

  document.querySelectorAll(".task").forEach((element) => {
    element.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id);
    });
  });
  document.querySelectorAll(".task-list").forEach((element) => {
    element.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  });
  document.querySelectorAll(".task-list").forEach((element) => {
    element.addEventListener("drop", (e) => {
      const id = e.dataTransfer.getData("text/plain");
      const task = document.getElementById(id);
      console.log(task)
      element.appendChild(task);
    });
  });
  c++;
}
