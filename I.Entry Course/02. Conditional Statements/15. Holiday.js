function holiday(budget, season) {
    let holiday;
    let amountSpent;
    let destination;

    switch (season) {
        case "summer":
            holiday = "Camp";
            break;
        case "winter":
            holiday = "Hotel";
            break;

        default:
            break;
    }

    if (budget <= 100 && season == "summer") {
        destination = "Bulgaria";
        amountSpent = 0.3 * budget;
    } else if (budget <= 100 && season == "winter") {
        destination = "Bulgaria";
        amountSpent = 0.7 * budget;
    }
    else if (budget <= 1000 && (season == "summer")) {
        destination = "Europe";
        amountSpent = 0.4 * budget;
    }
    else if ( budget <= 1000 && (season == "winter")) {
        destination = "Europe";
        amountSpent = 0.8 * budget;
    } else if ( budget > 1000 && (season == "winter"||season == "summer")) {
        destination = "Asia";
        amountSpent = 0.9 * budget;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${holiday} - ${amountSpent.toFixed(2)}`);
}
holiday(50, "summer");
holiday(75, "winter");
holiday(321, "summer");
holiday(678.53, "winter");
holiday(1500, "summer");