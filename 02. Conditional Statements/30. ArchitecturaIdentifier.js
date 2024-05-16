function era(year, material) {
    let architectural = "";
    if (material === "wood" || material === "stone" || material === "steel") {


        if (year < 500 && material === "stone") {
            architectural = "Ancient";
        } else if (500 < year && year <= 1500 && material === "stone") {
            architectural = "Medieval";
        } else if (1500 <= year && year < 1800 && material === "wood") {
            architectural = "Colonial";
        } else if (1800 < year && year < 1900 && material === "steel") {
            architectural = "Industrial";
        } else if (1900 < year && material === "steel") {
            architectural = "Modern";
        }else{
            architectural = "Uncertain"; 
        }

        console.log(architectural)
    } else {
        console.log("Error")
    }


}
era(300, "stone");
era(1500, "wood");
era(1500, "stone");
era(2000, "steel");
era(1100, "wood");