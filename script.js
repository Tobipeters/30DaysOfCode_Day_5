let taskHolder = [];
let day = document.getElementById('day');
let dayNumber = document.getElementById('day-no');
let monthAndYear = document.getElementById('month-and-year');
let date = new Date ;
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()]
let year = date.getFullYear();

let getTime = document.getElementById('get-time');
let getTitle = document.getElementById('get-title');
let list = document.getElementById('list');

dayNumber.innerHTML = date.getDate();
day.innerHTML = days[date.getDay()];
monthAndYear.innerHTML = `${month} ${year}`

//load initial storage items
// initialLoad = () =>{
//     if (taskHolder.length <= 0 && localStorage.task ){
//         console.log(localStorage.task);
//         taskHolder.JSON.parse(localStorage.task);
//         const items = taskHolder.map((elem)=>{
//             list.append(...items);
//         })
//     }
//     displayTask(items)
// }

// initialLoad();
addTask = () =>{
    let taskName = document.getElementById('task').value;
    let taskTime = document.getElementById('time').value;
    const listOfTask = {
        task: taskName,
        time: taskTime
    }
    taskHolder.push(listOfTask);
    localStorage.task = JSON.stringify(taskHolder);
    displayTask();
}

displayTask = () =>{
    let task = []
    allTasks = JSON.parse(localStorage.task)
   console.log(allTasks)
}
displayTask();

deletTask =>{

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
