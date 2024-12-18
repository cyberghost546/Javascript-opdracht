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
    // check of er wel een waarde is.
    if(tasksJSON) {
        // zet de bestaande JSON taken om in een array
    return JSON.parse(tasksJSON); 
    } else {
        // maak een lege array en geef deze terug
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