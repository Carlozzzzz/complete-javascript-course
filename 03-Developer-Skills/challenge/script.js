// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Problem
// We need to create a function that will display temperature on specific days

// 1) Understanding the problem
// -  Display temp perday
// - how many days do I need to display

// 2) Breaking up into sub-problems
// - Create a function with arr parameter
// - loop for each value and display it as you loop on it

const printForecast = function (arr) {
  let tempArr = '... ';
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    tempArr += ` ${arr[i]}°C in ${i + 1} days ... `;
  }

  return tempArr;
};

const tempArr = [17, 21, 23];
// const tempArr = [12, 5, -5, 0, 4];

console.log(printForecast(tempArr));
