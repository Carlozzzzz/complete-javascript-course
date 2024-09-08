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

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;

//     return `${firstName} retires in ${retirement} years.`;

// };

// const calcAge = function (birthYear) {

//     // current year;
//     const currentYear = 2024;
//     return currentYear - birthYear;
// }

// function yearsUntilRetirementFunction(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retires.`);
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirementFunction(2000, 'Carlos'));
// console.log(yearsUntilRetirementFunction(1950, 'Jara'));

// // 3 types of function

// // function declaration - can be used before i't declared
// function calcAge2(birthYear) {
//     return 2024 - birthYear;
// }

// // function expression - essentially function value stired in a variable
// const calcAge3 = function (birthYear) {
//     return 2024 - birthYear;
// }

// // arrow function - one line code
// const calcAge4 = (birthYer) => 2024 - birthYer;



// ================================================
/**
 * Introduction to Arrays
 *
 */

// const friend1 = 'Carloz';
// const friend2 = 'Chen';

// const friends = ['Michael', 'Chelshy', 'John'];
// console.log(friends);



// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jonny Sins';
// console.log(friends);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }

// const years = [1990, 1997, 2002, 2010, 2013];

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);



// ================================================
/**
 * Basic Array Operations (Methods)
 */

// const friends = ['Micheal', 'Carlos', 'Romulo'];
// friends.push('Jara'); // add elements at the end
// console.log(friends);

// friends.unshift('Michael1'); // add elements at the beggining
// console.log(friends)

// friends.pop(); // remove last element
// const popped = friends.pop(); // remove last element
// console.log(friends, popped);

// friends.shift(); // remove first element
// console.log(friends);

// console.log(friends.indexOf('Carlos')); // finding the index of this value
// console.log(friends.indexOf('Micheal')); // finding the index of this value

// console.log(friends.includes('Bov')); // check if the value exists on the array

// if (friends.includes('Petter')) {
//     console.log('You have a friend called Peter');
// }



// ================================================
/**
 * Introduction to Objects
 * use object for more unstructured data
 *
 * dot notation => when looking for specific property through concatination
 * bracket notation => cleaner and easier to use
 */

// // array format
// const jonasArray = [
//     'Carlos',
//     'Romulo',
//     'Maralit'
// ];

// // object format => consist of key:value pair
// // object literal syntax ->
// const carlos = {
//     firstName: 'Carlos',
//     lastName: 'Maralit',
//     age: 2024 - 2000,
//     job: 'teacher',
//     friends: ['Jara', 'Mark', 'Rhom']
// }

// // dot notation
// console.log(carlos.lastName);
// console.log(carlos['lastName']);

// const nameKey = 'Name';

// // bracket notaion
// console.log(carlos['first' + nameKey]);
// console.log(carlos['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about carlos? Choose between firstName, lastName, age, job, friends');

// if (carlos[interestedIn]) {
//     console.log(carlos[interestedIn]);
// } else {
//     console.log('Property not found.')
// }

// // adding properties to the object
// carlos.location = 'Philippines';
// carlos['twitter'] = '@carloz05';

// console.log(carlos);



// console.log(`${carlos.firstName} has ${carlos.friends.length} friends, and his best friend is ${carlos.friends[2]}`);



// ================================================
/**
 * Objects Methods
 * 
 * use this to reference the method itself 
 * it can only be used inside the object itself
 * 
 */

const person = {
    firstName: 'Carlos',
    lastName: 'Maralit',
    birthYear: 2000,
    job: 'teacher',
    friends: ['Jara', 'Mark', 'Rhom'],
    hasDriversLiscense: true,
    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }
    // calcAge: function () {
    //     return 2024 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    getDetails: function () {
        let text = this.hasDriversLiscense ? 'a' : 'no';

        return `${this.firstName} is a ${this.calcAge()} old teacher, and he has ${text} driver's liscense.`;
    }
}
console.log(person.calcAge());
console.log(person.getDetails());

console.log(person)

console.log(person.age);
console.log(person.age);
console.log(person.age);