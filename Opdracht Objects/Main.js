const addButton = document.querySelector('.add-users');
const userList = document.querySelector('.all-users');
console.log(addButton);

addButton.addEventListener('click', function(){
  console.log('De Knop Werkt!')
  question()
});

const users = [];

function addUser() {
  const firstName = prompt('Wat is je voornaam?').trim();
  const lastName = prompt('Wat is je achternaam?').trim();
  const age = prompt('Wat is je leeftijd?').trim();
  
  if (!firstName || !lastName || !age) {
    alert('Alle velden moeten ingevuld worden!');
    return;
  }
  if (isNaN(age) || age <= 0) {
    alert('Leeftijd moet een geldig getal zijn!');
    return;
  }

 
  const user = {
    firstName,
    lastName,
    age,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };

  
  users.push(user);

  
  displayUsers();
}


function displayUsers() {
  
  userList.innerHTML = '';

  
  users.forEach((user, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${user.getFullName()} (${user.age})`;

    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Verwijderen';
    removeButton.className = 'remove-btn';
    removeButton.addEventListener('click', () => removeUser(index));

    listItem.appendChild(removeButton);
    userList.appendChild(listItem);
  });
}


function removeUser(index) {
  users.splice(index, 1);
  displayUsers();
}


addButton.addEventListener('click', addUser);