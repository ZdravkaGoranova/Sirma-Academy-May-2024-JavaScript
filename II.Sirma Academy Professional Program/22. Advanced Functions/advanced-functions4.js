// Function Composition.
// Create two functions, one that doubles a number and one that squares a number. Create
// a third function that composes these two functions to first double and then square a
// number.

const double = (number) => {
  return number * 2;
};

const square = (number) => {
  return number * number;
};
const composes = (double, square) => (number) => square(double(number));

const doubleThenSquare = composes(double, square);
console.log(doubleThenSquare(3)); // Output: 36
