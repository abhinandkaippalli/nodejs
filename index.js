// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function higherOrderFunction(callback) {
//   const name = "Vishwas";
//   callback(name);
// }

// higherOrderFunction(greet);

//synchronous function
let numbers = [1, 2, 4, 8, 5, 3, 7, 6];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.filter((n) => n % 2 === 0));
console.log(numbers.map((n) => n / 2));
