const formEl = document.querySelector('#form')

const containerDiv = document.createElement('div')
containerDiv.className = "containerDiv"
document.body.appendChild(containerDiv)

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const missionDetails = {
        details: formEl.details.value,
        date: formEl.date.value,
        hour: formEl.hour.value,
    }

    createTask(missionDetails)
})

const createTask = (missionDetails) => {
    const task = document.createElement('div')
    task.className = "task"
    task.style.height = "59%"
    task.style.width = "10%"
    task.style.margin = "2%"
    task.style.padding = "0.8%"
    task.id = Date.now();

    const deleteButtonDiv = document.createElement('div')
    deleteButtonDiv.innerHTML = `
    <button class="btn btn-primary">press me</button>`
    task.appendChild(deleteButtonDiv)

    const taskTextDiv = document.createElement('div')
    taskTextDiv.innerHTML = missionDetails.details;
    taskTextDiv.style.flex = "1"
    taskTextDiv.style.overflowY = "auto"
    taskTextDiv.style.flexDirection = 'column'
    taskTextDiv.style.flexWrap = "nowrap"
    task.appendChild(taskTextDiv)

    const taskDateDiv = document.createElement('div')
    taskDateDiv.className = "taskDateDiv"
    if (!missionDetails.date || !missionDetails.hour || !missionDetails.details) {
        alert('missing parameters')
        return
    }
    else {

        taskDateDiv.innerHTML = missionDetails.date + ' / ' + missionDetails.hour;
    }
    task.appendChild(taskDateDiv)

    containerDiv.appendChild(task)
}