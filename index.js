const missionDetails = document.querySelector('#')


const containerDiv = document.createElement('div')
containerDiv.style.height = "400px"
document.body.appendChild(containerDiv)

const missionDetails = {
    details : inputDetails,
    date : missionDate,
    hour : missionHour,
}

const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
e.preventDefault();

const task = document.createElement('div')
task.style.backgroundImage = "url('notebg.png')";
task.style.scale = ""
const taskContent = document.createElement('div')
taskContent.style.padding = "7%"
task.appendChild(taskContent)
task.style.display = "inline-block"
task.style.height = "55%"
task.style.width = "10%"
task.style.margin = "2%"
task.id = Date.now();


const deleteButtonDiv = document.createElement('div')
deleteButtonDiv.innerHTML = `
<button class="btn btn-primary">press me</button>`
task.appendChild(deleteButtonDiv)

const taskTextDiv = document.createElement('div')
taskTextDiv.innerHTML = ""

const taskButton = document.createElement('button');
taskButton.type = "submit"

// task.style.marginTop = "20%"
task.style.padding = "0.8%"
containerDiv.appendChild(task)


})

