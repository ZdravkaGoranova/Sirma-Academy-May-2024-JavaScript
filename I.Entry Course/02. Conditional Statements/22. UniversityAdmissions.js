function university(score, activities) {
    let text;
    if (score >= 90) {
        text = "Admitted";

    } else if ((score >= 80 && score <= 89) && activities >= 2) {
        text = "Admitted";

    } else if ((score >= 80 && score <= 89) && activities < 2) {
        text = "Not admitted";

    } else if (score < 80) {
        text = "Not admitted";

    }
    console.log(text);
}
university(85, 3);
university(88, 1);
university(91, 0);
university(75, 12);