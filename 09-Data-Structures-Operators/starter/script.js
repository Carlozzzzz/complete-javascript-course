'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    // returning multiple values
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log('Main ingredient: ', mainIngredient)
    console.log('other ingredients: ', otherIngredients)
  }
};

/**
 * Destructuring Objects
 */
restaurant.orderDelivery({
  time: '22:30',
  address: 'San Jose, 222',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Bigain 1, 224',
  starterIndex: 1,
});
//************************* */

// Default Values
const {
  name: restaurantName = [],
  openingHours: hours = [],
  categories: tags = [],
} = restaurant;
console.log(restaurantName, hours, tags);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const { fri } = tags;
console.log(fri);

/**Spread Operator */

const mainMenuCopy = [...restaurant.mainMenu];
const menu = ['Abysal Spicy Kantont', 'Spicy Sisib', 'Kkanor Tamarinb'];

const newArr = [...mainMenuCopy, ...menu];
console.log(newArr);

// Iterables: arrays, strings, maps, sets. Not objects

const str = 'Carlos';
const letters = [...str, '', 'z'];
console.log(letters);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
  // prompt("Let's make pasta! Ingredient 4?"),
];

restaurant.orderPasta(...ingredients);

// ... in objects
const newRestaurant = { foundedIn: 2000, ...restaurant, founder: 'Carlasss' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Carlosheezzz Ristorante';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Rest Pattern ====================================
// -- packed elements into array
// -- collect elements from unused destructured elements

console.log('Rest Pattern...............')
/** 1. Destructuring */
// this one is using spread pattern
const arr = [1, 2, ... [3,4]];

console.log(arr)

// rest pattern here
const [c, d, ...others] = [1, 2, 3, 4, 5]
console.log(c,d, others)

// trying the rest pattern
const [otherMain, ...secondMain] = [[...restaurant.mainMenu], [...restaurant.starterMenu], ...[2,3,1]];
console.log(otherMain)
console.log(secondMain)

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays)


/** 2. Functions */
const add = function(...numbers) {
  
  // calculating the sum
  let sum = 0;
  
  for(let i=0;i<numbers.length;i++){
    sum += numbers[i];
  }
  
  console.log(sum)
}

const [...y] = [...[2,3,4]];

add(...y)


console.log('Short Cuircuting......')
// Short Circutting (&& and ||) ============================
// or operator - user any data type, return ANY data type, short-circuting. 

console.log(3 || 'Jonas'); // if truety value => return the 3

// trying with the actual example with restaurant OBJ
// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1)

const guest2 = restaurant.numGuests || 11;
console.log(guest2)

console.log('____AND____')
// if its truety, evaluation continues and the last value returned
console.log(0 && 'Carlos')
console.log(7 && 'Carlos')

if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinnach')
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach')


/** Nullish  operator ============================ */ 
// null and undefined will return falsy value (NOT 0 or '' => this will return true)
const guestCorrect = restaurant.numGuests ?? 10;
console.log('guestCorrect: ', guestCorrect)


/** Logical Assignment Operators
  
*/
console.log('\nLogical Assignment Operator')
const rest1 = {
  name: 'Capri',
  numGuests: 0,
}

const rest2 = {
  name: 'La Pizaaa',
  owner: 'Carlos Romulo'
}

rest1.numGuests = rest1.numGuests ?? 10;
rest1.owner &&= '<ANONYMOUS>';
rest2.numGuests ||= 10;
rest2.owner &&= '<ANONYMOUS>';


console.log(rest1)
console.log(rest2)


/** Looping Arrays: for-of loop=============== */
console.log('Looping Arrays: for-of loop===================')
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu2) console.log(item);

for (const [i, el] of menu2.entries()) {
  console.log(`${i} : ${el}`)
}

// console.log([...menu2.entries()])

/** Enhanced Object Literals */
// restaurant is object literal
console.log('Enhanced object literals=====================')
const weekdays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours2 = {
  // ES6 allows the property names to be computable
  [weekdays2[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays2[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays2[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant2 = {
  // ES 6 Object literals
  openingHours2,
  
  // ES 6 new way of function inside Object literals
  order(starterIndex, mainIndex) {
    // returning multiple values
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log('Main ingredient: ', mainIngredient)
    console.log('other ingredients: ', otherIngredients)
  }
}

console.log(restaurant2)


/** Optional Chaining=============== */
// mostly used with  operators
console.log('Optional Chaining===============')
if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// with Optional Chaining
console.log(restaurant.openingHours?.mon?.open)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
  // using the computable property
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // || wont work on sat, because 0 is falsy value, refer to  operators
  console.log(`On ${day}, we open at ${open}`)
}

// Methods
console.log(restaurant.orderssss?.(0,1) ?? 'Method does not exists');
console.log(restaurant.orderCalami?.(0,1) ?? 'Method does not exists');


/** Looping Objects: Objects Keys, Values, and Entries */
// refer to the destructing lecture to visualize things
console.log('Looping Objects=====================')

// Property Names
const properties = Object.keys(openingHours2);
console.log(properties)

let openStr = `We are open on ${properties.length} days.`;

for (const day of Object.keys(openingHours2)) {
  openStr += ` ${day}`
}
console.log(openStr)

// Prorperty Values
const values = Object.values(openingHours2);
console.log('Values: ', values);


// Entire object
const entries = Object.entries(openingHours2);
console.log('Entries: ', entries);

// we can do [key, value] here...
for(const [key, {open, close}] of entries) { // destructuring objects
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


