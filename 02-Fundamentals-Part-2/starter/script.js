'use strict';

/**
 * forbids us to do certain things
 * create visible errors in certain errors
 *
 * may help you when you type undefined variables
 * wont allow u use the future reserve keywords
 */

// let hasDriversLicense = false;
// const passTest = true;


// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive now. ');

// const interface = 'Audio';


// ================================================
/**
 * Functions;
 *
 * fundamental building blocks
 * variable hold a value but function holds more complex lines of codes
 * can return data
 * can reuse code
 */

// function logger() {
//     // function body
//     console.log('My name is Carlos.');
// }

// // invoking / running / calling function
// logger();


// // parameter are only specif for this function that we create
// // represent the input data for this function
// function fruitProcessor(apples, oranges) {

//     // simulating the variables
//     const juice = `Juice with ${apples} apples and ${oranges} orages.`;
//     return juice;
// }

// // now when you call the function, the parameters become arguments.
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// const num = Number('2');


// ================================================
/**
 * Functions Declarations vs. Expressions
 * hoisting
 *
 * can call function function declation before defining it
 * cant call the expresion before defining it
 */

// function calcAge1(birthYear) {
//     const age = 2024 - birthYear;
//     return age;
// }

// const age1 = calcAge1(2000);
// console.log(age1);

// // anonymous function / an expression
// const calAge2 = function (birthYear) {
//     return 2024 - birthYear;
// }

// const age2 = calAge2(2000);
// console.log(age2);


// ================================================
/**
 * Arrow function
 *
 * shorter and faster to right
 */

// // arrow function here ->
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;

//     return `${firstName} retires in ${retirement} years.`;

// };

// console.log(yearsUntilRetirement(2000, 'Carlos'));
// console.log(yearsUntilRetirement(1999, 'Romulo'));


// ================================================
/**
 * Function Calling other Functions
 *
 */

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     // simulating the variables
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orages.`;
//     return juice;
// }

// console.log(fruitProcessor(6, 3));


// ================================================
/**
 * Reviewing Functions
 * 
 */

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years.`;

};

const calcAge = function (birthYear) {

    // current year;
    const currentYear = 2024;
    return currentYear - birthYear;
}

function yearsUntilRetirementFunction(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retires.`);
        return -1;
    }

    // return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirementFunction(2000, 'Carlos'));
console.log(yearsUntilRetirementFunction(1950, 'Jara'));

// 3 types of function

// function declaration - can be used before i't declared
function calcAge2(birthYear) {
    return 2024 - birthYear;
}

// function expression - essentially function value stired in a variable
const calcAge3 = function (birthYear) {
    return 2024 - birthYear;
}

// arrow function - one line code
const calcAge4 = (birthYer) => 2024 - birthYer;