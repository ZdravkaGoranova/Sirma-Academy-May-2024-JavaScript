function calculator(num) {
    let text;
    if (num >= 90 && num <= 100) {
        text = "A";
    } else if (num >= 80 && num <= 89) {
        text = "B";
    } else if (num >= 70 && num <= 79) {
        text = "C";
    } else if (num >= 60 && num <= 69) {
        text = "D";
    } else if (num >= 0 && num <= 59) {
        text = "F";
    }
    console.log(text)
}
calculator(95);
calculator(82);
calculator(76);
calculator(65);
calculator(45);