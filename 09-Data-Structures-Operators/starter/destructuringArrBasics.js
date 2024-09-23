// Destructuring array
// getting peices from a array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [first, second] = restaurant.categories;
console.log(first, second);

// Switching variables (mutated variables)
[second, first] = [first, second];
console.log(first, second);

// Recieve 2 return values from a function
const [starter, mainMenu] = restaurant.order(2, 0);
console.log(starter, mainMenu);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

const [i, , [j, k]] = nested;
console.log(i, j, k);
