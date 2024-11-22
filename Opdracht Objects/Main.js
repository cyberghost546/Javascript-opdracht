const myBtn = document.querySelector('.add-users');
myBtn.addEventListener('click', function(){
    console.log('De Knop Werkt!')
    question()
});

function question(){
    const voorName = prompt('Wat is je voorname');
    const achterName = prompt('wat is je achtername');
    const leefTijd = prompt('wat is je leeftijd');
    console.log(question)  

};

function getFullName(name, lastName, age) {
    return {
        firstName: name,
        lastName: lastName,
        age: age,
        
    };
}

console.log(getFullName)