function range(number) {
    let text;
    if (0 <= number >= -100 && number != 0) {
        text = "Yes";
    } else {
        text = "No";
    }
    console.log(text)
}
range(-25);
range(0);
range(25);