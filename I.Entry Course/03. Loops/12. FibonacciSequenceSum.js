function fibonacciSum(num) {

    if (num <= 0) {
        console.log(0);
        return;
    }

    if (num === 1) {
        console.log(1);
        return;
    }
    let a = 0, b = 1, sum = 1;

    for (let i = 2; i < num; i++) {
        let next = a + b;
        sum += next;
        a = b;
        b = next;
    }
    console.log(sum + b + a);
}


fibonacciSum(3);  // Output: 4 (0 + 1 + 1 + 2)
fibonacciSum(5);  // Output: 12 (0 + 1 + 1 + 2 + 3 + 5)
fibonacciSum(1);  // Output: 1 (0 + 1)
fibonacciSum(0);  // Output: 0
fibonacciSum(10); // Output: 143 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55)
