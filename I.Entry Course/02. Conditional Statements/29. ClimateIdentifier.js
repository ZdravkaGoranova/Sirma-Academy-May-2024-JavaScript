function climateZone(value, text) {
    let zone = "";
    if (value >= -90 && value <= 90) {

        if (value === 0) {
            zone = "Equator";
        } else if ((value > 0 && value < 23.5) && (text === "N" || text === "S")) {
            zone = "Tropic Zone";
        } else if ((value > 23.5 && value < 66.5) && (text === "N" || text === "S")) {
            zone = "Temperate Zone";
        } if (value > 66.5 && (text === "N" || text === "S")) {
            zone = "Arctic Zone";
        }

        console.log(zone)

    } else {
        console.log("Error")
    }
}
climateZone(70, "N");
climateZone(45, "S");
climateZone(10, "N");
climateZone(0, "N");
climateZone(85, "S");