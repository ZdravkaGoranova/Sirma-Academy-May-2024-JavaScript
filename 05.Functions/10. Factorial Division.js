function factorialDivision(a, b) {
  let aactorial = factorial(a);
  let bactorial = factorial(b);

  let result = Math.abs(aactorial / bactorial);
  console.log(result.toFixed(2));
}

function factorial(number) {
  let array = [];
  let totamfactorial = number;
  let result;

  for (let i = number - 1; i >= 1; i--) {
    let el = number - i;
    array.unshift(el);
  }
  result;
  for (const num of array) {
    result = num;
    totamfactorial *= result;
  }
  return totamfactorial;
}

factorialDivision(5, 2);
factorialDivision(6, 2);
