const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  doneList = document.querySelector(".js-doneList");

const TODOS_LS = "PENDING",
  DONES_LS = "FINISHED";

const toDos = [],
  dones = [];

function paintToDo(text) {
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    doneBtn = document.createElement("button"),
    span = document.createElement("span");
  const newId = toDos.length;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  doneBtn.innerText = "✔";
  doneBtn.addEventListener("click", doneToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const clean = parseInt(li.id);
  toDoList.removeChild(li);
  toDos.splice(clean, 1);
  toDos.forEach((toDo) => (toDo.id > clean ? (toDo.id -= 1) : null));
  toDoList.childNodes.forEach((toDo) =>
    parseInt(toDo.id) > clean ? (toDo.id = `${parseInt(toDo.id) - 1}`) : null
  );
  saveToDos();
}

function doneToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const clean = parseInt(li.id);
  const text = li.querySelector("span").innerText;
  toDoList.removeChild(li);
  toDos.splice(clean, 1);
  toDos.forEach((toDo) => (toDo.id > clean ? (toDo.id -= 1) : null));
  toDoList.childNodes.forEach((toDo) =>
    parseInt(toDo.id) > clean ? (toDo.id = `${parseInt(toDo.id) - 1}`) : null
  );
  paintDone(text);
  saveToDos();
  saveDones();
}

function paintDone(text) {
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    backBtn = document.createElement("button"),
    span = document.createElement("span");
  const newId = dones.length;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteDone);
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click", backDone);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  li.id = newId;
  doneList.appendChild(li);
  const doneObj = {
    text: text,
    id: newId
  };
  dones.push(doneObj);
  saveDones();
}

function deleteDone(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const clean = parseInt(li.id);
  doneList.removeChild(li);
  dones.splice(clean, 1);
  dones.forEach((done) => (done.id > clean ? (done.id -= 1) : null));
  doneList.childNodes.forEach((done) =>
    parseInt(done.id) > clean ? (done.id = `${parseInt(done.id) - 1}`) : null
  );
  saveDones();
}

function backDone(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const back = parseInt(li.id);
  const text = li.querySelector("span").innerText;
  doneList.removeChild(li);
  dones.splice(back, 1);
  dones.forEach((done) => (done.id > back ? (done.id -= 1) : null));
  doneList.childNodes.forEach((done) =>
    parseInt(done.id) > back ? (done.id = `${parseInt(done.id) - 1}`) : null
  );
  paintToDo(text);
  saveToDos();
  saveDones();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveDones() {
  localStorage.setItem(DONES_LS, JSON.stringify(dones));
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => paintToDo(toDo.text));
  }
}

function loadDones() {
  const loadedDones = localStorage.getItem(DONES_LS);
  if (loadedDones !== null) {
    const parsedDones = JSON.parse(loadedDones);
    parsedDones.forEach((done) => paintDone(done.text));
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  loadDones();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();