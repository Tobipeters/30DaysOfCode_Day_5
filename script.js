//////Declaration of variables
let day = document.getElementById('day');
let dayNumber = document.getElementById('day-no');
let monthAndYear = document.getElementById('month-and-year');
let date = new Date;
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()]
let year = date.getFullYear();

let getTime = document.getElementById('get-time');
let getTitle = document.getElementById('get-title');
let list = document.getElementById('list');

dayNumber.innerHTML = date.getDate();
day.innerHTML = days[date.getDay()];
monthAndYear.innerHTML = `${month}, ${year}`
let allTasks = JSON.parse(localStorage.getItem('task'));;

////////Pop up for entering task and time 
toggle = () => {
    let dialog = document.getElementById('dialog_box');
    dialog.showModal();
}
//////closing modal function
closeModal = () => {
    let dialog = document.getElementById('dialog_box');
    dialog.close();
}


///////function to  add task
addTask = () => {
    let taskName = document.getElementById('task').value;
    let taskTime = document.getElementById('time').value;
    if (taskTime !== "" && taskName !== "") {
        const listOfTask = {
            task: taskName,
            time: taskTime
        }
        console.log(listOfTask)
        allTasks.push(listOfTask);
        localStorage.setItem('task', JSON.stringify(allTasks));
        taskName = '';
        taskTime = '';
        displayTask();
        closeModal();
    } else {
        error();
    }
}

////////To display each task created

displayTask = () => {

    let section = document.querySelector('section')
    let innerHTmL = ''
    console.log(allTasks)
    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];

        innerHTmL += `  <div class="list" id="list">
    <small class="todo-time" id="get-time"> ${element.time} </small>
    <div class="todo">
        <p class="todo-title" id="get-title"> ${element.task} </p>
      
    </div>
    <div class="action">
        <span class="delete" onclick="deleteTask(${i})">
            &#10006;
        </span>
        <span class="check" id="check" onclick="checkedTask(${i})">
            &#10004;
        </span>
    </div>
</div>`
    }
    section.innerHTML = innerHTmL;
}

//To delete each task
deleteTask = (i) => {
    allTasks.splice(i, 1)
    localStorage.setItem('task', JSON.stringify(allTasks))
    displayTask();

}
///////To check already done task
checkedTask = (i) => {
    
    check = document.getElementById('check');
    check.classList.replace('check', 'checked')
}



///////Eroor message when input field not filled
error = () => {
    error = document.getElementById('error')
    error.innerHTML = 'Enter task and time'
    //Make Error message visible
    error.style.display = 'block'
}





