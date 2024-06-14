function classification(age) {
    let text;
    if (age < 13) {
        text = "Only U-rated movies";
    } else if (age >= 13 && age < 17 ) {
        text = "U and PG-13 rated movies";
    } else if (age >=18 ) {
        text = "All movies";
    }
console.log(text);
}
classification(10);
classification(16);
classification(21);