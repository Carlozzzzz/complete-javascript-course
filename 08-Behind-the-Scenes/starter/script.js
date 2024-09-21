'use strict';

/**
 * There are 3 type of scopes
 * Global scope can access throught this file
 * function scope = can access throught this function
 * block scope = can access throught this block like the if() statement
 *
 * note: var is a function scope, so that even it is declared inside the block scope in specific function, you can still access this variable inside the current function.
 */

/**
 * scoping ask where is the variables located/live
 * there are 3 types of scope
 *
 */

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 <= 1996) {
      const str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }

  printAge();
  return age;
}

const firstName = 'Carlos';
calcAge(1991);

/**
 * Variable environment
 *
 * makes some types of variabless accesible/usable in the code before the are atually declared.
 *
 * function variables == yes
 * var variables == yes
 * let and const variables == no
 *
 * Temporal Dead Zone == we cnant access the variable before the initialization
 * */
if (true) {
  //   console.log(name); // temporal dead zone
  const name = 'carlos';
}

/**
 * This keyword
 *
 * special variable for every excution context(every object calling the method)
 */

// this one has the owner which is carlos, thus we can use `this` here
const carlos = {
  name: 'Carlos',
  year: 1989,
  calcAge: function () {
    console.log(2028 - this.year);
  },
};

// console.log(this);
// const calcAge2 = function (birthYear) {
//   console.log(2035 - birthYear);
//   console.log(this);
// };
// calcAge2(2000);

// // this will point to window, because arrow function doesnt have its own thing eme
// const calcAge2Arrow = birthYear => {
//   console.log(2035 - birthYear);
//   console.log(this);
// };
// calcAge2Arrow(2000);

const matilda = {
  year: 2017,
};

matilda.calcAge = carlos.calcAge;
matilda.calcAge();

/**
 * Regular functions Vs. Arrow functions
 */
