function calculator(age, isHaveCard) {
    let text;
    if (age < 18) {
        text = "10% discount";
    } else if (age > 18 && age < 64 && isHaveCard === "Yes") {
        text = "20% discount";
    } else if (age > 18 && age < 64 && isHaveCard === "No") {
        text = "10% discount";
    }else if (age > 65 ) {
        text = "30% discount";
    }
console.log(text);
}
calculator(20, "Yes");
calculator(15, "No");
calculator(70, "No");