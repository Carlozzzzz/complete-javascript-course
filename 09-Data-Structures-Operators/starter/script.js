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


/** Sets */
// can never have any duplicates
console.log('Set=====================')
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto']);

console.log(ordersSet.size)
console.log(new Set('Jamess'))
console.log(ordersSet.has('Pasta'))
ordersSet.add('Garlix Sugar')
ordersSet.add('Garlix Sugar')
ordersSet.delete('Pizza')
console.log(ordersSet)


// example 
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size)
console.log(new Set('carlosromulomaralit').size);


/** New Operator to Make Sets Useful */
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
])

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// contain all the elements that are similar in both sets
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods, [...commonFoods])

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion) // display the all elements without redundant data

// With array combination
console.log(new Set([...italianFoods, ...mexicanFoods]))

// Unique Values -- remove the common element, output items from italianFoods 
// only output the elements from the left side
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Unique Italian Foods: ', uniqueItalianFoods)

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Unique Mexican Foods: ', uniqueMexicanFoods)

// will not include the similar element from each set
const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods)

// Check set if similar to other
console.log('Is similar: ', italianFoods.isDisjointFrom(mexicanFoods))


/** Maps */
// DSA with key values, keys can have any type
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Batangas');
rest.set(2, 'Lisbon, Batanes');

console.log(rest.set(2, 'lisbon, Test'))

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))


const time = 9;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // a practical example

// check if a map contains a certain key
console.log(rest.has('categories'))
rest.delete(2);
// rest.clear();
const arr2 = [1,2]; // using array as map keys
rest.set(arr2, 'Test')
console.log(rest.get(arr2));
rest.set(document.querySelector('h1'), 'Heading'); // using html elements as keys
console.log(rest);
console.log(rest.size);

/** Maps Iteration */
// populating maps

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎁'],
  [false, 'Try again! 🤞'],
]);

console.log(question)

//Convert Object to map
console.log(Object.entries(openingHours2))
const hoursMap = new Map(Object.entries(openingHours2));
console.log(hoursMap)
console.log(hoursMap.get('thu'))

// back to question map
console.log(question.get('question'))
for (const [key, value] of question) { // destruring with iteration
  if(typeof key === 'number') console.log(`Answer ${key} : ${value}`)
}
// const answer = Number(prompt('Your answer: '))
const answer = 3
console.log(answer)
console.log(question.get(question.get('correct') === answer))

// Converting map to array
console.log([...question])
console.log([...question.keys()])
console.log([...question.values()])


/** Which DSA to use */
console.log('Which DSA to used? =================')
/**
  Source of data
    - from the program itself
    - from the UI
    - from external source : API (fetch from here) ex: recepi currency, weather update and so on...

  Collection of data => DSA
    - array / set : values without desc
    - objects / maps : key value (JSON data)

  Other built-in
    - WeakMap
    - WeakSet
    
  Non-Built IN DSA in JavaScript
    - stacks
    - queues
    - linked lists
    - trees
    - hash tables
    
  When to use JS DSA
  
    - arrays : use when need values in order, manipulate data
    - sets : only with unique values, high performance, removes duplicates
    
    - objects : traditional key => value, easier to write
        : working with JSON
        : when include FUNCTIONS
    - maps : better performance, can have any data type, easy to iterate
        : keys that are not strings
        
*/



/** Working with Strings Part #1 */

console.log('\n\nWorking with STRINGS==============================')
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log('B&37'[0])

console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // case sensitive

// Slicing or extracting indexes
console.log(airline.slice(4)); // Will start in A
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')))

console.log(airline.slice(-2)); // start extracting from the end
console.log(airline.slice(1, -1)); // start extracting from the end

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  
  if(s === 'B' || s ==='E') console.log('You got the middle one 😂')
  else console.log('You got lucky 🤞')
  console.log(s);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


// Capitalize
const passenger = 'cArlOs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passenger.slice(1).toLowerCase();

console.log(passengerCorrect)

// Check | Comparing Emails
const email = 'hello@carlos.io';
const loginEmail = '   hEllo@carLos.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(email);
console.log(normalizedEmail)
console.log(email === normalizedEmail)

// Replacing parts of string
const priceGB = '288,87€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS)

const announcement = 'All passengers come o barding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// Regular expressions
console.log(announcement.replace(/door/g, 'gate')); // case sensitive, g for global

// Booleans
const plane2 = 'Air A320neo';
console.log(plane2.includes('A320'))
console.log(plane2.includes('csss'))
console.log(plane2.startsWith('Air'))

if(plane2.startsWith('Air') && plane2.endsWith('neo')) {
  console.log('New airbus fam.')
}


// Practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  
  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board.')
  } else {
    console.log('Welcome aboard!')
  }
}

checkBaggage('I have some laptop, some food and a pocket knife');
checkBaggage('Socks and dildo.');
checkBaggage('Got new baby with money.');

// Dividing string
// split and join
console.log('a+boka+eme+taina'.split('+'));
console.log('Carlos maralit'.split(' '))

const [firstName, lastName] = 'Carlos maralit'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName)

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];
  
  for(const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); 
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  
  console.log(namesUpper.join(' '));
};

capitalizeName('carlos romulo p. maralit III');
capitalizeName('diana rose panganiban');


// Padding a string 
// add number of characters on the string

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'))
console.log('carlos'.padStart(20, '+').padEnd(30, '+'))
console.log('Carlos'.padEnd(10, '+'))

// example
const maskCreditCard = function(number) {
  const str = number.toString();
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}

console.log(maskCreditCard(23912931923));
console.log(maskCreditCard(12314142323))

// Repeat with string padding
const message2 = 'Bad weather... All Departures delated...';
console.log(message2.repeat(4))

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`)
}

planesInLine(5);
planesInLine(2);