
// Version 1 answer
const mark = 'Mark';
const massMark = 78;
const heightMark = 1.69;

const john = 'Mark';
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);
const markHigherBMI = BMIMark > BMIJohn;
// const BMI2 = mass / (height * height);
console.log(BMIMark)
console.log(BMIJohn)
console.log(markHigherBMI);

// Version 2 with user interaction

// const myName = prompt('Enter your name: ');
// const mass = prompt('Enter your weight in (kg): ');
// const height = prompt('Enter your height in (m): ');

// // calculating BMI
// const calculateBMI = mass / height ** 2;
// const calculateBMI2 = mass / (height * height);

// const outputData = `HI ${myName} your BMI is ${calculateBMI}`;
// console.log(outputData)