const containerDiv = document.createElement('div')
containerDiv.className = "containerDiv"
document.body.appendChild(containerDiv)

const detailsInput = document.querySelector('#detailsInput')
const dateInput = document.querySelector('#dateInput')
const hourInput = document.querySelector('#hourInput')


const main = () => {

}

const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const task = document.createElement('div')
    task.className = "task"
   
    // const taskContent = document.createElement('div')
    // taskContent.style.padding = "7%"
    // task.appendChild(taskContent)
    task.style.height = "59%"
    task.style.width = "10%"
    task.style.margin = "2%"
    task.style.padding = "0.8%"
    task.id = Date.now();
    
    const missionDetails = {
        // 'details' : inputDetails,
        details : form.details.value,
        date : form.date.value,
        hour : form.hour.value,
    
    }

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
console.log(missionDetails.details)
task.appendChild(taskTextDiv)

const taskDateDiv = document.createElement('div')
if(!missionDetails.date || !missionDetails.hour || !missionDetails.details ) {
    alert('missing parameters')
    return
}
else {

    taskDateDiv.innerHTML = missionDetails.date + ' / ' + missionDetails.hour;
}
taskDateDiv.className = "taskDateDiv"
task.appendChild(taskDateDiv)

// task.style.marginTop = "20%"

containerDiv.appendChild(task)


})

