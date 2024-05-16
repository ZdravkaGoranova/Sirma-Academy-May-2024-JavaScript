function sea(days, typeRoom, assessment) {
    let nights;
    nights = days - 1;
    let prices;
    let total;
    let discount;


    switch (typeRoom) {
        case "single room":
            if (days < 10) {
                discount = 0;
            } else if (days > 10 && days < 15) {
                discount = 0;
            } else if (days > 15) {
                discount = 0;
            }
            prices = 25 * nights;
            total = prices - (prices * discount);
            break;
        case "apartment":
            if (days < 10) {
                discount = 0.3;
            } else if (days > 10 && days < 15) {
                discount = 0.35;
            } else if (days > 15) {
                discount = 0.5;
            }
            prices = 50 * nights;
            total = prices - (prices * discount);
            break;

        case "presidential":
            if (days < 10) {
                discount = 1;
            } else if (days > 10 && days < 15) {
                discount = 0.15;
            } else if (days > 15) {
                discount = 0.2;
            }
            prices = 100 * nights;
            total = prices - (prices * discount);
            break;
    }

    if (assessment === "positive") {
        total = total * 1.25;
    } else if (assessment === "negative") {
        total = total * 1.10;

    }
    console.log(total)
}
sea(11, "apartment", "positive");
sea(30, "presidential", "negative");
sea(12, "single room", "positive");
sea(2, "apartment", "positive");