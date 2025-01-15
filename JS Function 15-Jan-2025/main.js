console.log("!!!");

//opdracht 1
const hello = 'Hello World';

function sayHello(hello){
   console.log(hello)
}

sayHello(hello)

//opdracht 2
function rekenSom(a, b){
    return a + b
}

console.log(rekenSom(5, 10))

//opdracht 3 
let naam = 'Anna';


function verwelkom(naam){
    return  'welkom'+ ' ' + naam;
}
console.log(verwelkom(naam))

//opdracht 4

function vermenigvuldig(a, b){
    return a * b

}
console.log(vermenigvuldig(4, 5))

//odracht 5
function vermenigvuldig(a, b){
    const vermenigvuldig = (a, b) => a * b;
    console.log(vermenigvuldig(4, 5))
    return a * b

}

//opdracht 6

const numberArray = [1, 2, 3, 4, 5];

numberArray.forEach( function(number) {
    console.log(number);
});


//opdracht 7

function withLogs(functionToRun) {
   console.log("Function: yourFunction")
}
withLogs(sayHello)

//opdracht 8

function berekenVerschill(a, b){
    return a - b
}

console.log(berekenVerschill(10, 4));


// opdracht 9
const gradenCelcius = [0, 10, 20, 30, 40, 50];
function celciusToFahrenheit(celcius) {
    return celcius * 9/5 + 32;
}
const fahrenheit = gradenCelcius.map(celciusToFahrenheit);
console.log(fahrenheit); // [32, 50, 68, 86, 104, 122]
