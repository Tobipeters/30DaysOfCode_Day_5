let taskHolder = [];
let getTask = [];
let day = document.getElementById('day');
let dayNumber = document.getElementById('day-no');
let monthAndYear = document.getElementById('month-and-year');
let date = new Date ;
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()]
let year = date.getFullYear();


dayNumber.innerHTML = date.getDate();
day.innerHTML = days[date.getDay()];
monthAndYear.innerHTML = `${month} ${year}`

//Function for adding task to localStorage

addTask = () => {
    let taskName = document.getElementById('task').value;
    let taskTime = document.getElementById('time').value;
    let getTime = document.getElementById('get-time');
    let getTitle = document.getElementById('get-title');

    for (let i = 0; i < taskHolder.length; i++) {
        const element = taskHolder[i];
        console.log(element)
    }
    const listOfTask = {
        task: taskName,
        time: taskTime
    }
    taskHolder.push(listOfTask)
    localStorage.setItem('tasks', JSON.stringify(taskHolder));
    

}
//function to get task from loclStorage
allTasks = () => {
    let getTime = document.getElementById('get-time');
    let getTitle = document.getElementById('get-title');
    let list = document.getElementById('list');
    getTask = JSON.parse(localStorage.getItem('tasks'));
    let allTask = JSON.parse(localStorage.getItem('tasks'));



    // getTask.push(allTask)
    // console.log(getTask);
    // for (let i = 0; i < getTask.length; i++) {
    //     console.log(getTask[i])
    //     list.innerHTML = getTask[i].time;
    //     list.innerHTML = getTask[i].task;
    // }
}


toggle = () => {
    let dialog = document.getElementById('dialog_box');
    dialog.showModal();

}
/////////closing modal function
closeModal = () => {
    let dialog = document.getElementById('dialog_box');
    dialog.close();
}
