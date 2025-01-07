console.log('Hello World!!!!');

let tasks = [];

console.log(tasks);

function makeTask(){
    const discription = prompt('create your taks');
    return{
        id: Date.now(),
        discription: discription,
        complete: false
    };
}

const task = makeTask();
console.log(task);

const newTask = makeTask();
tasks.push(newTask);
console.log(tasks);


function displayTasks(tasks) {
    for (let i = 0; i < tasks.length; i++){
        console.log(`ID: ${tasks[i].id}, Beschrijving: ${tasks[i].description}, voltiood: ${tasks[i].complete}`);
    }
}

displayTasks(tasks);

function saveTasks(tasks) {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksJSON);
}

function loadTasks(){
    const tasksJSON = localStorage.getItem("tasks");

    if(tasksJSON) {
       
    return JSON.parse(tasksJSON); 
    } else {
        
      return[]; 
    }
}

tasks = loadTasks();
console.log(tasks);

function completeTask(tasks, id){
    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].id === id) { 
            tasks[i].completed = true;
            break; 
        } 
    }
}

saveTasks(tasks);

function deleteTasks(tasks, id){
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks.splice(i, 1);
            break;
        }
           
    }
};

const tasksIdRemove = parseInt(prompt('verwijder'));


deleteTasks(tasks, tasksIdRemove);
console.log(tasks);