function* fibonacci() {
  let first = 1;
  let second = 1;

  yield first;
  yield second;

  while (true) {
    let currentValue = first + second;
    first = second;
    second = currentValue;
    yield currentValue;
  }
}
const fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
