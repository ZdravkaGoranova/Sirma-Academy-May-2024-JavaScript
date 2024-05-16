function market(vegetable, day, quantity) {
    let isWorkingDays;
    let total;

    if (day === "Monday" ||
        day === "Tuesday" ||
        day === "Wednesday" ||
        day === "Thursday" ||
        day === "Friday") {
        isWorkingDays = true;
    } else if (day === "Saturday" ||
        day === "Sunday)") {
        isWorkingDays = false;
    }
    switch (vegetable) {
        case "tomato":
            if (isWorkingDays) {
                total = quantity * 2.5;
            } else {
                total = quantity * 2.8;
            }
            break;
        case "onion":
            if (isWorkingDays) {
                total = quantity * 1.2;
            } else {
                total = quantity * 1.3;
            }
            break;
        case "lettuce":
            if (isWorkingDays) {
                total = quantity * 0.85;
            } else {
                total = quantity * 0.85;
            }
            break;
        case "cucumber":
            if (isWorkingDays) {
                total = quantity * 1.45;
            } else {
                total = quantity * 1.75;
            }
            break;
        case "pepper":
            if (isWorkingDays) {
                total = quantity * 5.50;
            } else {
                total = quantity * 3.50;
            }
            break;
        default:
            console.log("error")
            break;
    }
    console.log(total.toFixed(2))
}
market("tomato", "Tuesday", 2);
market("onion", "Sunday", 3);
market("pepper", "Monday", 10);
market("banana", "Friday", 3);