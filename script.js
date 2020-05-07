
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

toggle = () => {
    let dialog = document.getElementById('dialog_box');
    dialog.showModal();
}
/////////closing modal function
closeModal = () => {
    let dialog = document.getElementById('dialog_box');
    dialog.close();
}




addTask = () => {
    let taskName = document.getElementById('task').value;
    let taskTime = document.getElementById('time').value;
    const listOfTask = {
        task: taskName,
        time: taskTime
    }
    allTasks.push(listOfTask);
    localStorage.setItem('task', JSON.stringify(allTasks));

    displayTask();
    closeModal();
}

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
        <span class="check">
            &#10004;
        </span>
    </div>
</div>`
    }
    section.innerHTML = innerHTmL;
}

deleteTask = (i) => {
 allTasks.splice(i, 1)
 localStorage.setItem('task', JSON.stringify(allTasks))
  displayTask();

}





