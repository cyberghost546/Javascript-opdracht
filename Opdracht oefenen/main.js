console.log('Hello World!')

const nameInput = document.querySelector('.name');
const ageInput = document.querySelector('.age');
const niveauInput = document.querySelector('.age');
const addbtn = document.querySelector('.add-btn');

const userArray = [];

addbtn.addEventListener('click', addUser());
    

function addUser(name, age, niveau){
    const userObject = {
        name: name,
        age: age,
        niveau: niveau,
    };
    const naam = nameInput.value;
    const leeftijd = ageInput.value;
    const level = niveauInput.value;
    
    console.log(userObject)
    
}




let userCard = addUser.innerHtml;

function createCard(name, age, niveau){
    for (let i = 0; i < userObject.length; i++) {
        text += userObject[i];
    }
    

    const listCard = `
    <h3>Naam:${name.name}</h3>
    <p>Leeftijd:${age.age}</p>
    <p>Niveau:${niveau.niveau}</p>
    `
    
    return createCard;

}