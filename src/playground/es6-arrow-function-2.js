// arguments object - no longer bound with arrow functions

// const add2 = function(a, b) {
//   console.log(arguments);
//   return a + b;
// };

// console.log(add2(22, 122, 2222));

// const add = (a, b) => {
//   // console.log(arguments);
//   return a + b;
// };
// console.log(add(55, 1, 1001));

// this keyword - no longer bound

// const user = {
//   name: "Andrew",
//   cities: ["Philadelphia", "New York", "Dublin"],
//   printPlacesLived() {
//     return this.cities.map(city => this.name + " has live in " + city);
//   }
// };
// console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [2, 5, 8, 20],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
