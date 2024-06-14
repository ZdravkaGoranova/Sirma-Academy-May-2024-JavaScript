function speed(num) {
    let information;

    if (num <= 10) {
        information = "slow";
    } else if (num > 10 && num <= 60) {
        information = "average";
    } else if (num > 60 && num <= 120) {
        information = "fast";
    } else if (num > 120 && num <= 160) {
        information = "super-fast";
    } else {
        information = "turbo-fast";
    }

console.log(information)
}
speed(10);
speed(59);
speed(120);
speed(121);
speed(183);
speed(59.99);
speed(60.001);