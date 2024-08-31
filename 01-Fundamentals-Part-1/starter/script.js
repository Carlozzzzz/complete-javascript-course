/**
 *
let js = 'amazing';

console.log(40 + 8 + 23);

// Variables == create a variable that describe your values
let firstName = 'Romulo';

console.log(firstName);
console.log(firstName);
console.log(firstName);


let PI = 3.1415;
console.log(PI)

 *  */





/**
 *
 * variable typeof
 *
 * let javascriptIsFun = true;

    console.log(typeof true)
    console.log(typeof 'Carlos')
    console.log(typeof 21)

    javascriptIsFun = 'Yes';

    console.log(typeof javascriptIsFun)

    //undefined is not yet has a value

    let year;
    console.log(year)
    console.log(typeof year)

    year = 2015;
    console.log(year)

    console.log(null)
    console.log(typeof null)

 */




/**
 * Let
 * Const
 * var
 */

/*
// reassigning value, mutated variable
let age = 30;
age = 20;

// cannot be assigned, immutable
const birthYear = 1991;
// birthYear = 2000;

// old way of defining variables
var job = 'programmer';
job = 'teacher';

*/


//=========================================================

/**
 * Basic Operators
 *  ** == 2 power of 3
 */

// Math operators
// const now = 2000;

// const ageJonas = now - 89;
// console.log(ageJonas)

// const ageSarah = now - 201;
// console.log(ageSarah, ageJonas)

// console.log(ageJonas / 2, 2 ** 2);

// const firstName = 'Carlos';
// const lastName = 'Maralit';
// console.log(firstName + ' ' + lastName); // can use template string

// // assignment operator '=' '+=' '-=' '*=' '/=' '++' '--'
// let x = 10 - 5;
// x /= 2; // x = x + 2
// x++;
// console.log(x)

// // Comparison Operators > < >= <=
// console.log(ageJonas > ageSarah);



// =======================================
// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// const now = 2037;
// const ageJonas = now = 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018)


// =======================================
// Strings and Template Literals

// const firstName = 'Carlos';
// const job = 'content moderator';
// const birthYear = 2000;
// const year = 2024;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas)

// // template literals here =>
// const carlosNew = `I'm ${firstName}, a ${year - birthYear} years old, and I am a ${job}.`;
// console.log(carlosNew);

// console.log(`String with \n\
// multiple \n\
// lines`);
// console.log('String');


// =======================================
/**
 * Decisions `if statements`
 */

// const age = 14;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//    console.log('Matanda ka na! mag bago ka na 🤣'); // win + .
// } else {
//    const yearsLeft = 18 - age;
//    console.log('Enjoy life habang bata ka pa.');
//    console.log(`${yearsLeft} years pa before the true life starts.`)
// }


// =======================================
/**
 * Type Conversion
 */

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

console.log(Number('Carlos')); // not convertable `Nan` invalid number or not a number
console.log(typeof NaN);

console.log(String(23), 23);
console.log();

/**
 * Type Coercion
 */
