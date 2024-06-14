function survival(time, environment, item) {
    let result = "";
    if (time === "day") {

        if (environment === "forest" && item === "knife") {
            result = "Hunt for food";
        } else if (environment === "forest" && item === "container") {
            result = "Collect berries";
        } else if (environment === "forest" && item != "container") {
            result = "Explore";
        }
        else if (environment === "desert" && item === "hat") {
            result = "Search for water";
        } else   if (environment === "desert" && item != "hat") {
            result = "Find shade";
        }

    } else if (time === "night") {
        if (environment === "forest" && item === "firestarter") {
            result = "Make a campfire";
        } else if (environment === "forest" && item != "firestarter") {
            result = "Climb a tree for safety";
        }
        else if (environment === "desert" && item === "blanket") {
            result = "Sleep";
        } else if(environment === "desert" && item != "blanket") {
            result = "Keep moving to stay warm";
        }

    }
    console.log(result);

}
survival("day", "forest", "knife");
survival("day", "forest", "container");
survival("night", "forest", "firestarter");
survival("day", "forest", "bag");
survival("night", "desert", "blanket");
survival("day", "desert", "hat");
survival("night", "desert", "sword");
survival("night", "forest", "hat");



