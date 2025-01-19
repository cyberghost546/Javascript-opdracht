console.log('---main---');

//trainning 1
let auticated = false;
const wachtwoord = 'goed';
let userInput;

while(!auticated){
    userInput = prompt('vul je password in');
    if(userInput === wachtwoord){
        alert('voltooid');
        auticated = true;
    }else{
        alert('fout');
    }
}

/////////////

const cars = ["Mercedes", "Volkswagen", "Tesla", "Toyota", "Honda"];

for(let i = 0; i < cars.length; i++){
    const merken = cars[i];
    if(cars[i] === "Tesla"){
        continue;
    }
    console.log(cars[i]);

    const myCars = document.querySelector('.ul');
     myCars.innerHTML += `<ul> ${cars[i]} </ul>`
}

///////////

const main = document.querySelector('main');
console.log(main);

const button = document.querySelector('.button')
button.addEventListener("click", function () {
    alert("Button was clicked!");
});

function createPost(message){
    const post = 
    `<div class ='post'>
    <p>${message}</p>
    </div>`;
    main.innerHTML += post;
}

createPost('hello world');
createPost('christopher');

//////////////


const school = [
    {
        opleidig: "elektrotechniek",
        niveau: "HBO",
        duur: 4
    },
    {
        opleidig: "ict",
        niveau: "MBO",
        duur: 3
    }
]

for(let i = 0; i < school.length; i++){
    const mySchool = school[i];
    console.log(mySchool);
}

const card = document.querySelector('.card');
console.log()

function showSchool(school){
 for(let i = 0; i < school.length; i++){
    const card = `
    <div class='card'>
    <li>${school[i].opleidig}</li>
    <li>${school[i].niveau}</li>
    <li>${school[i].duur}</li>
    <br>
    </div>`;
    card.innerhtml += card;
 }
    
}

showSchool(school);




