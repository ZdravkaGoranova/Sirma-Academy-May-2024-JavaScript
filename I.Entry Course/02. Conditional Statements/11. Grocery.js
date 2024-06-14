function grocery(product, city, quantity) {
    let total;

    switch (city) {
        case "Sofia":
            if (product === "tea") {
                total = quantity * 0.50;
            } else if (product === "water") {
                total = quantity * 0.80;
            } else if (product === "juice") {
                total = quantity * 1.20;
            } else if (product === "sweets") {
                total = quantity * 1.45;
            } else if (product === "chips") {
                total = quantity * 1.60;
            }

            break;
        case "Plovdiv":
            if (product === "tea") {
                total = quantity * 0.40;
            } else if (product === "water") {
                total = quantity * 0.70;
            } else if (product === "juice") {
                total = quantity * 1.15;
            } else if (product === "sweets") {
                total = quantity * 1.30;
            } else if (product === "chips") {
                total = quantity * 1.50;
            }
            break;
        case "Varna":
            if (product === "tea") {
                total = quantity * 0.45;
            } else if (product === "water") {
                total = quantity * 0.70;
            } else if (product === "juice") {
                total = quantity * 1.10;
            } else if (product === "sweets") {
                total = quantity * 1.35;
            } else if (product === "chips") {
                total = quantity * 1.55;
            }
            break;
        default:
            break;
           
    }
    console.log(total.toFixed(2));
}
grocery("tea", "Varna", 2);
grocery("chips", "Plovdiv", 1);
grocery("juice", "Sofia", 6);
grocery("sweets", "Plovdiv", 1);