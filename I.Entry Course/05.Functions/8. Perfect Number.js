function positiveNumber(number) {
  let isPositive = true;
  if (!(number >= 0)) {
    isPositive = false;
  }
  return isPositive;
}

function sumOfDivisors(array) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum;
}

function properPositiveDivisors(number) {
  let divisors = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function stringArray(array) {
  console.log(array.join(' + '));
}

function perfectNumber(number) {
  let isPperfectNumber = true;
  if (!positiveNumber(number)) {
    return console.log('Please enter a positive integer.');
  }
  if (sumOfDivisors(properPositiveDivisors(number)) === number) {
    console.log(`Perfect number!`);
    stringArray(properPositiveDivisors(number));
  }else{
    console.log(`It’s not so perfect.`);
  }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
