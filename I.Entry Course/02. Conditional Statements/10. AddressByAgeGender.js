function adress(age, gender) {
    let greet;

    switch (gender) {
        case "f":
            if (age < 16) {
                greet = "Miss";
            } else if (age >= 16) {
                greet = "Ms";
            }
            break;
        case "m":
            if (age < 16) {
                greet = "Master";
            } else if (age >= 16) {
                greet = "Mr";
            }
            break;
        default:
            break;
    }
    console.log(greet)
}
adress(14, "f");
adress(17, "m");
adress(10, "m");
adress(32, "f");