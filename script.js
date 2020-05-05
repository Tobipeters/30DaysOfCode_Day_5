let taskHolder = [];
let getTask = [];
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
    let getTime = document.getElementById('get-time');
    let getTitle = document.getElementById('get-title');

    for (let i = 0; i < taskHolder.length; i++) {
        const element = taskHolder[i];
        // console.log(element)
    }
    const listOfTask = {
        task: taskName,
        time: taskTime
    }

    taskHolder.push(listOfTask)

    localStorage.setItem('tasks', JSON.stringify(taskHolder));
    let allTask= JSON.parse(localStorage.getItem('tasks'));
    getTask.push(allTask)

    console.log(getTask)
    closeModal();
    for (let i = 0; i < getTask.length; i++) {
        getTime.innerHTML = getTask[i].time;
        getTitle.innerHTML =getTask[i].task;

    }
}

allTasks = () =>{
    getTask = JSON.parse(localStorage.getItem('tasks'));
}
