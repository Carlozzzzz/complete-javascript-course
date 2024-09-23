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
];

restaurant.orderPasta(...ingredients);

// ... in objects
const newRestaurant = { foundedIn: 2000, ...restaurant, founder: 'Carlasss' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Carlosheezzz Ristorante';
console.log(restaurantCopy.name);
console.log(restaurant.name);
