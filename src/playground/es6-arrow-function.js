// function square(x) {
//   return x * x;
// }

// console.log(square(3));

// // const squareArrow = x => {
// //   return x * x;
// // };

// const squareArrow = x => x * x;

// console.log(squareArrow(8));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand i.e. expression syntax

// const getFirstName = fullName => {
//   return fullName.split(" ")[0];
// };

const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName("Paul Smith"));
