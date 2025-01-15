console.log("Live!!!");

// //Object
const users = [
    {
        name: "Chris",
        age: 22,
        countryOfOrigin: "Curacao",
        expirence: function(){
            return this.age * 3;
        }
    },
    {
        name: "isa",
        age: 11,
        countryOfOrigin: "China",
        expirence: function(){
            return this.age * 3;
        }

    }
];
 
for(let i = 0; i < users.length; i++){
    const user = users[i];
    if(user.name === 'chris'){
        console.log(user.expirence());
        user.age = 20
        console.log(user.expirence());

    }
    if(user.age > 20){
        console.log(`name: ${user.name}, age: ${user.age}, country of origin: ${user.countryOfOrigin}`);
    }
}



// localStorage.setItem('totalVisited', 1)

//console.log(localStorage.setItem('totalVisited', 1));

let totalVisited = localStorage.getItem('totalVisited');

if(!totalVisited){
    totalVisited = 0;
}

totalVisited++;
console.log(totalVisited);

localStorage.setItem('totalVisited', totalVisited);

// localStorage.getItem()

const usersJSON = JSON.stringify(users);
console.log(users)
console.log(usersJSON);


localStorage.setItem('user', usersJSON);
// JSON.parse