function office(n) {

    let cabinet1 = n;
    let cabinet2 = 0.8 * cabinet1;
    let cabinet3 = 1.15 * (cabinet1 + cabinet2);
    let total = cabinet1 + cabinet2 + cabinet3;
    console.log(total.toFixed(3));

}

office(380);
office(720.50);
office(455.30);
