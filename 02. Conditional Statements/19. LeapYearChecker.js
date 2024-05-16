function yearChecker(year) {
    let text;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                text = "It‘s a leap year!";
            } else {
                text = "It‘s not a leap year.";
            }
        } else {
            text = "It‘s a leap year!";
        }
    } else {
        text = "It‘s not a leap year.";
    }
    console.log(text)
}
yearChecker(2020);
yearChecker(1900);
yearChecker(2000);
yearChecker(2023);
yearChecker(1600);