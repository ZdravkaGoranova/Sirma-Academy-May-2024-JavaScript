function faceFigures(figure, a, b) {
    let face;

    switch (figure) {
        case "square":
            face = Math.pow(a, 2);
            break;
        case "rectangle":
            face = a * b;
            break;
        case "circle":
            face = 3.14159 * (Math.pow(a, 2));
            break;
        case "triangle":
            face = 0.5*(a * b);
            break;
        default:
            break;
    }
    console.log(face.toFixed(2));
}
faceFigures("square", 5);
faceFigures("rectangle", 10, 3.5);
faceFigures("triangle", 4.5, 20);
faceFigures("circle", 10);