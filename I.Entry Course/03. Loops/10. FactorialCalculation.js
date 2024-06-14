function factorial(n) {
    let calc = 1;

    for (let i = 0; i < n; i++) {
        calc += calc * i;
    }
    console.log(calc);
}
factorial(5);
factorial(3);
factorial(0);
factorial(1);
factorial(10);