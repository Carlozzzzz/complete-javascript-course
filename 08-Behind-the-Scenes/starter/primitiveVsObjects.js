'use strict';

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'carlos',
  age: 30,
};

const friend = me;

friend.age = 21;

console.log(friend);

// Primitive Types
let lastName = 'Maralit';
let oldLastName = lastName;
lastName = 'Portugal';

console.log(lastName, oldLastName);

// Referrence Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log('Before marriage: ', jessica);
console.log('after marriage: ', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica2',
  lastName: 'Williams2',
  age: 27,
  family: ['Carlos', 'Leng'],
};

/**
 * completely copying object
 * 1.) but only shallow copy(1st level only)
 * 2.) completely new clone
 */
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'maralit';
console.log('Before marriage: ', jessica2);
console.log('after marriage: ', jessicaCopy);

jessicaCopy.family.push('Marry');
jessicaCopy.family.push('John');
console.log('Before marriage: ', jessica2);
console.log('after marriage: ', jessicaCopy);
