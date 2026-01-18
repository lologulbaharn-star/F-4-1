const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const home = document.getElementById("home");
const about = document.getElementById("about");

const todoInput = document.getElementById("todoInput");
const addTodo = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");
const total = document.getElementById("total");

let todos = JSON.parse(localStorage.getItem("todos")) || [];


function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "todo-item";
    div.innerHTML = `
      <span>${item}</span>
      <button onclick="removeTodo(${index})">×</button> `;
    todoList.appendChild(div);
  });

  total.textContent = todos.length;
  localStorage.setItem("todos", JSON.stringify(todos));
}


addTodo.onclick = () => {
  const value = todoInput.value.trim();
  if (!value) return;

  todos.push(value);
  todoInput.value = "";
  renderTodos();
};


function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}


homeBtn.onclick = () => {
  home.classList.remove("hidden");
  about.classList.add("hidden");
  homeBtn.classList.add("active");
  aboutBtn.classList.remove("active");
};

aboutBtn.onclick = () => {
  about.classList.remove("hidden");
  home.classList.add("hidden");
  aboutBtn.classList.add("active");
  homeBtn.classList.remove("active");
};


renderTodos();
