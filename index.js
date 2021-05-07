const formEl = document.querySelector("#form");
const hourInput = document.querySelector('#hourInput')
const dateInput = document.querySelector('#dateInput')
const detailsInput = document.querySelector('#detailsInput')
const containerDiv = document.createElement("div");
containerDiv.className = "containerDiv";
containerDiv.style.display = "flex";
document.body.appendChild(containerDiv);

const storageValue = 'notes'

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const missionDetails = {
    details: formEl.details.value,
    date: formEl.date.value,
    hour: formEl.hour.value,
    id: Date.now(),
  };
  if (!missionDetails.date || !missionDetails.hour || !missionDetails.details) {
    alert("missing parameters bruh");
    return;
  }
  saveToLocalStorage(missionDetails)
  loadFromLocalStorage()

  hourInput.value = ""
  dateInput.value = ""
  detailsInput.value = ""
});


const createTask = (missionDetails) => {
  console.log(missionDetails)
  const task = document.createElement("div");
  task.className = "task";
  task.style.height = "59%";
  task.style.width = "10%";
  task.style.margin = "2%";
  task.style.padding = "0.8%";
  task.id = missionDetails.id;

  const deleteButtonDiv = document.createElement("div");
  deleteButtonDiv.className = "deleteButtonDiv"

  task.appendChild(deleteButtonDiv);

  const taskTextDiv = document.createElement("div");
  taskTextDiv.innerHTML = missionDetails.details;
  taskTextDiv.style.flex = "1";
  taskTextDiv.style.overflow = "hidden auto";
  taskTextDiv.style.maxWidth = "100%";
  task.appendChild(taskTextDiv);

  const taskDateDiv = document.createElement("div");
  taskDateDiv.className = "taskDateDiv";
  taskDateDiv.innerHTML = missionDetails.date + " / " + missionDetails.hour;
  task.appendChild(taskDateDiv);

  const deleteButton = document.createElement('button')
  deleteButton.className = "glyphicon glyphicon-remove"
  deleteButton.id = "deleteButton"

  deleteButton.addEventListener('click', () => removeTask(missionDetails.id))
  deleteButtonDiv.appendChild(deleteButton)

  return task;

};

function loadFromLocalStorage() {
  containerDiv.innerHTML = ""
  const data = JSON.parse(localStorage.getItem(storageValue)) || [];
  console.log(data)
  data.forEach(task => {
    containerDiv.appendChild(createTask(task))
  })
}
function saveToLocalStorage(data) {
  let exisitingData = JSON.parse(getLocalStorageItem(storageValue))
  if (exisitingData) {
    exisitingData.push(data)
  }
  else {
    exisitingData = [data]
  }

  localStorage.setItem(storageValue, JSON.stringify(exisitingData))
}

function removeTask(id) {
  console.log(id)
  const taskToDelete = document.getElementById(id)
  removeFromLocalStorage(id)
  taskToDelete.remove()
}
loadFromLocalStorage()

function removeFromLocalStorage(id) {
  const existingData = JSON.parse(getLocalStorageItem(storageValue)) || [];
  for (let i = 0; i < existingData.length; i++) {
    if (existingData[i].id == id)
      existingData.splice(i, 1)
  }
  // existingData.forEach(task => {
  //   if(task.id == id){
  //     existingData.splice(index, 1)
  //   }
  // })
  localStorage.setItem(storageValue, JSON.stringify(existingData))
}

function getLocalStorageItem(item) {
  return localStorage.getItem(item)
}