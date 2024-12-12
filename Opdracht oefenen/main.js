console.log('Hello World!')

const nameInput = document.querySelector('.name');
const ageInput = document.querySelector('.age');
const niveauInput = document.querySelector('.niveau'); 
const addBtn = document.querySelector('.add-btn');
const userCardsContainer = document.querySelector('#user-cards-container');

const userArray = [];

addBtn.addEventListener('click', () => {
    const name = nameInput.value
    const age = ageInput.value
    const niveau = niveauInput.value

    
    if (!name || !age || !niveau) {
        alert('Please fill in all fields.');
        return;
    }

    const userObject = {
        name: name,
        age: age,
        niveau: niveau,
    };

    console.log(userObject);

    userArray.push(userObject);

    createCard(userObject);

   
    nameInput.value = '';
    ageInput.value = '';
    niveauInput.value = '';

   userArray.innerHTML = '';
   
});




function createCard(user) {
    const userCard = document.createElement('div');
    userCard.innerHTML = `
        <h3>Naam: ${user.name}</h3>
        <p>Leeftijd: ${user.age}</p>
        <p>Niveau: ${user.niveau}</p>
    `;

    
}

