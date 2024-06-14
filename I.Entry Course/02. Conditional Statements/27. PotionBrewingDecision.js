function potion(a, b) {
    let result = "";

    if (a === "herbs" && b === "water") {
        result = "Health potion";
    } else if (a === "herbs" && b === "oil") {
        result = "Stealth potion";
    } else if (a === "herbs" && b != "oil" && b != "water") {
        result = "Minor stamina potion";
    } else if (a === "berries" && b === "sugar") {
        result = "Speed potion";

    } else if (a === "berries" && b !== "sugar") {
        result = "Minor energy potion";
    }
    else {
        result = "No potion";
    }
    console.log(result)
}
potion("herbs", "water");
potion("herbs", "oil");
potion("herbs", "banana");
potion("berries", "sugar");
potion("berries", "banana");
potion("herbs", "sugar");
potion("sugar", "salt");