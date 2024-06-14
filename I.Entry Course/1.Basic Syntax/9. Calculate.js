function calculate(numOne, numTwo) {
    let sum = numOne + numTwo;
    let difference = Math.abs(numOne - numTwo);
    let product = numOne * numTwo;
    let average = (numOne + numTwo) / 2;

    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
    console.log(`Product: ${product}`);
    console.log(`Average: ${average}`);
}
calculate(25, 5);
calculate(7, 14);
calculate(12, 1);