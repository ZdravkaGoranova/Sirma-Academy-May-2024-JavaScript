// 9. Fibonacci
// Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1.
// Use a closure to keep the current number.

function getFibonacci() {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  
  return function () {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    return n1;
  };
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21
