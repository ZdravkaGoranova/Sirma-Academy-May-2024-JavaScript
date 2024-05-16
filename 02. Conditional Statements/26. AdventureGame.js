function adventureGame(right, left) {
    let result = "";

    if (right === "sword" && left === "shield") {
        result = "Path to the castle";

    } else if (right === "sword" && left != "shield") {
        result = "Path to the forest";
    }

    else if(right === "map" && left === "coins") {
        result = "Go to the town";

    } else if (right === "map" && left !== "coins") {
        result = "Camp";
    }
    if (right !== "sword" && right !== "map" && left != "coins" && left != "shield") {
        result = "Wander aimlessly";
    }
    console.log(result)
}
adventureGame("sword", "shield");
adventureGame("map", "coins");
adventureGame("torch", "flower");
adventureGame("sword", "pouch");
adventureGame("map", "compass");