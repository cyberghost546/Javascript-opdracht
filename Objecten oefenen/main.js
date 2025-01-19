console.log('Hello World!')


const cars =  [
 {
  name: 'toyota',
  color: 'blue',
  door: 4,
  price: 100
 },

 {
  name: 'B.M.W',
  color: 'black',
  door: 4,
  price: 1000
 },

 {
  name: 'Audi',
  color: 'wit',
  door: 4,
  price: 4000
 },

 {
  name: 'ferari',
  color: 'red',
  door: 2,
  price: 5000
 },

];

// console.log(cars);

for(let i = 0; i < cars.length; i++) {
 console.log(cars[i].price);
 const sale = cars[i].price * 9;
 //if(sale > 99 ){
 // alert('is niet waar')
 //}
}

const main = document.querySelector('.main');
console.log()



function showCars(cars){
 for(let i = 0; i < cars.length; i++) {
  const post = `
  <div class='main'>
  <li>${cars[i].name}</li>
  <li>${cars[i].color}</li>
  <li>${cars[i].door}</li>
  <li>${cars[i].price}</li>
  <br>
  </div>`;

  main.innerHTML += post;
 }
}

showCars(cars);
