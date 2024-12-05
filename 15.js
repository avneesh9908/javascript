// const array = [1, 2, 3, 4, 2, 3, 5];
// const uniqueArray = [...new Set(array)];

// console.log(uniqueArray); // [1, 2, 3, 4, 5]




// const array = [1, 2, 6,6,6, 4, 2, 3, 5];
// const uniqueArray = array.filter((value, index) => array.indexOf(value) === index);

// console.log(uniqueArray); // [1, 2, 3, 4, 5]


// const array = [1, 2, 3, 4, 2, 3, 5];
// const uniqueArray = array.reduce((acc, value) => {
//   if (!acc.includes(value)) {
//     acc.push(value);
//   }
//   return acc;
// }, []);

// console.log(uniqueArray); // [1, 2, 3, 4, 5]




// const array = [1, 2, 3, 4, 2, 3, 5];
// const frequency = {};
// const uniqueArray = [];

// for (const value of array) {
//   if (!frequency[value]) {
//     frequency[value] = 1;
//     uniqueArray.push(value);
//   }
// }

// console.log(uniqueArray); // [1, 2, 3, 4, 5]



// const array = [1, 2, 3, 4, 2, 3, 5];
// const map = new Map();
// const uniqueArray = array.filter(value => !map.has(value) && map.set(value, true));

// console.log(uniqueArray); // [1, 2, 3, 4, 5]




// const array = [1, 2, 3, 4, 2, 3, 5];
// const uniqueArray = [];

// for (let i = 0; i < array.length; i++) {
//   if (uniqueArray.indexOf(array[i]) === -1) {
//     uniqueArray.push(array[i]);
//   }
// }

// console.log(uniqueArray); // [1, 2, 3, 4, 5]



// const array = [1, 2, 3, 4, 2, 3, 5];
// const sortedArray = array.sort((a, b) => a - b);
// const uniqueArray = sortedArray.reduce((acc, value) => {
//   if (acc.length === 0 || acc[acc.length - 1] !== value) {
//     acc.push(value);
//   }
//   return acc;
// }, []);

// console.log(uniqueArray); // [1, 2, 3, 4, 5]


// const array = [1, 2, 3, 4, 2, 3, 5];
// const uniqueArray = [];

// array.forEach(value => {
//   if (!uniqueArray.some(el => el === value)) {
//     uniqueArray.push(value);
//   }
// });

// console.log(uniqueArray); // [1, 2, 3, 4, 5]


// Summary of Methods:
// Set: Simplest and efficient for most use cases.
// Filter + indexOf: Works for small arrays, not the most efficient.
// Reduce + includes: Similar to filter, but more readable in functional programming style.
// Object frequency count: Good for more advanced operations like counting occurrences.
// Map: Provides constant-time lookups, more efficient for large arrays.
// Nested loop: Classical but inefficient.
// Sort + Reduce: Good if sorting makes sense for other operations.
// ForEach + some: Another functional programming alternative.







