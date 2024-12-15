console.log("Hello Wolrd!!");

// Opdracht 1
const myName = "Christopher Molina!";
const myAge = 25;
const mySchool = "ROC Mondriaan";
const myCourse = "Software Developer";
const myClass = "B1J";
const myTeacher = "De lang";

function showDetials(){
    console.log("Hello World! Ik ben " + myName + " en ik ben " + myAge + " jaar oud.");
};

showDetials();

function showSchoolDetails(){
    console.log("Ik volg de opleiding " + myCourse + " op " + mySchool + ". Ik zit in klas " + myClass + " bij " + myTeacher + ".");
};

showSchoolDetails();

function ShowFullDescription(){
    console.log(showDetials + showSchoolDetails);
    
};

ShowFullDescription();

//Opdracht 2
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

console.log(3 + 5);
console.log(7 - 2);
console.log(20 / 5);
console.log(8 * 4);
console.log(19 + 42);
console.log(18 / 3);
console.log(17 - 7);
console.log(18 + 22);
console.log(((18 + 22) * (19 - 2)/ 34)*3);