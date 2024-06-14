function bmi(weight, height) {

    let bmi = weight / (height * height);
    console.log(bmi.toFixed(2));
}
bmi(70, 1.73);
bmi(60, 1.75);
bmi(85, 1.80);