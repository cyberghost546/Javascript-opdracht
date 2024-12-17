console.log("hello world");

const person = {
    name: "chris",
    age: 22,
    hobbie: ["lezen manga", "programmer", "slapen"]
};

const personJSON = JSON.stringify(person);
console.log(personJSON);



const jsonString = '{"name": "chris", "age": 22, "hobbie": ["lezen manga", "programmer", "slapen"]}'

const parsedPerson = JSON.parse(jsonString);

console.log(parsedPerson);
console.log(parsedPerson.name);
console.log(parsedPerson.hobbie[1]);

localStorage.setItem("person", personJSON);


const storedPersonJSON = localStorage.getItem("person");
console.log(storedPersonJSON);

const storedPerson = JSON.parse(storedPersonJSON);
console.log(storedPerson);


console.log(storedPerson.name);
console.log(storedPerson.hobbie);

const tasks =[
    {
        id: 1, 
        description: "Boodschaapen doen",
        completed: false
    },
    {
        id: 2, 
        description: "Code scrijven", 
        completed: false
    },
    {
        id: 3, 
        description: "Sporten", 
        completed: false
    },
    
];

const tasksJSON = JSON.stringify(tasks);
localStorage.setItem("tasks", tasksJSON);


const storedTasksJSON = localStorage.getItem("tasks");
const storedTasks = JSON.parse(storedTasksJSON);
console.log(storedTasks);

storedTasks.forEach(task => console.log(task.description));

localStorage.removeItem("person");

localStorage.clear();