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

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 10);

// console.log(Number('Carlos')); // not convertable `Nan` invalid number or not a number
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log();

/**
 * Type Coercion
 * wherever there number + string, js automatically convert numbers to string
 * string can be converted to numbers as well (reverse conversion)
 */

// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3)


// =======================================
/**
 * Equality Operators: == vs. ===
 */

// const age = 18;
// if (age === 18) {
//    console.log('this is equal.')
// }

// const favorite = Number(prompt('whats the u fav num: '));
// console.log(favorite);

// if (favorite === 24) console.log('U guess my age.')
// else if (favorite === 7) console.log('underage')
// else console.log('u are not allowed here')


// =======================================
/**
 * Boolean Logic
 * and
 * or
 * not
 */

// // a and b
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// // console.log('This person is able to drive.');
// // } else {
// //    console.log('Someone else should drive.')
// // }

// const isTired = false; // c
// console.log(hasDriversLicense || hasGoodVision && isTired)

// // I want sarah to drive if she is applicable to drive
// if (hasDriversLicense && hasGoodVision && !isTired) {
//    console.log('This person is able to drive.');
// } else {
//    console.log('Someone else should drive.');
// }


// =======================================
/**
 * The switch Statement
 *
 */

// const day = 'sunday';

// switch (day) {
//    case 'monday': // using strict equllity way
//       console.log('Today is monday');
//       break;
//    case 'tuesday': // using strict equllity way
//       console.log('Preparing for first day of work');
//       break;
//    case 'wednesday': // using strict equllity way
//       console.log('3 day of work, 2 more days to go.');

//       break;
//    case 'thursday': // using strict equllity way
//       console.log('2nd day of work, 3 more days to go.');
//    case 'friday':
//       console.log('1 more day to rest.');
//       break;
//    case 'saturday':
//       console.log('Last day!!!!');
//    case 'sunday':
//       console.log('Bebe time');
//       break;
//    default:
//       console.log('Theres no valid date.');
// }

// doing this with if else

// if (day === 'monday') {
//    console.log('Today is monday');
// } else if (day === 'tuesday') {
//    console.log('Preparing for first day of work');
// } else if (day === 'wednesday') {
//    console.log('2nd day of work, 3 more days to go.');
// } else if (day === 'thursday') {
//    console.log('3 day of work, 2 more days to go.');
// } else if (day === 'friday') {
//    console.log('1 more day to rest.');
// } else if (day === 'saturday') {
//    console.log('Last day!!!!');
// } else if (day === 'sunday') {
//    console.log('Bebe time');
// } else {
//    console.log('Theres no valid date.');
// }



// =======================================
/**
 * Expressions
 * 1 + 3 is expression
 *  below is statement
 * if (23 > 10 ) {
      const str = '23 is bigger';
   }
 */

// 3 + 3;
// 1991;
// true && false && !false

// if (23 > 10 ) {
//    const str = '23 is bigger';
// }



// =======================================
/**
 * The conditional (Ternary) Operator
 * ?
 * 
 */

const age = 93;
age >= 18 ? console.log("I like to drike wine") : console.log("I like to drink water");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
   drink2 = 'wine';
} else {
   drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);