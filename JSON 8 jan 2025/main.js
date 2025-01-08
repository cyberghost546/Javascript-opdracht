console.log('hello world');

fetch('https://dummyjson.com/users/1')
.then(userJSON => userJSON.json())
.then(jsonUser  => showUsers(jsonUser));


function showUsers(jsonUser) {
    console.log(jsonUser);
     console.log('name: ' + jsonUser.firstName);
     console.log('Bloedgroep: ' + jsonUser.bloodGroup);
     console.log('Company departement: ' + jsonUser.company.department)

}



fetch('https://dummyjson.com/users/')
.then(dataJSON => dataJSON.json())
.then(data  => showUsersData(data));

function showUsersData(data) {
    const users =  data.users;
    console.log(users);
    for(let i = 0; i < users.length; i++){
    console.log('name: ' + users[i].firstName);
    console.log('Bloedgroep: ' +  users[i].bloodGroup);
    console.log('Company departement: ' +  users[i].company.department);
    }
}
showUsersData();




