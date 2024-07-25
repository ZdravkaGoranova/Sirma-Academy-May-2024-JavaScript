// 7. Partial Application with Closures
// Create a function that takes four arguments and returns their sum. Create a partially
// applied version of this function that always adds 5 to the sum of three other numbers.

function sum(a, b, c, d) {
  return a + b + c + d;
}

partialSum = (a) => {
  return function (b, c, d) {
    return sum(a, b, c, d);
  };
};

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11
