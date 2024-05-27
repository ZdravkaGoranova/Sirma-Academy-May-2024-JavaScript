function sum(number) {
  let sum = 0;
  return (sum += number);
}

function oddEvenSum(number) {
  let arrayNumber = number.toString().split('').map(Number);
  let sumOdd = 0;
  let sumEven = 0;

  for (let i = 0; i < arrayNumber.length; i++) {
    const currentDigit = arrayNumber[i];

    if (currentDigit % 2 === 0) {
      sumEven += sum(currentDigit);
    } else {
      sumOdd += sum(currentDigit);
    }
  }

  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddEvenSum(1000435);
oddEvenSum(3495892137259234);
