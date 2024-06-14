function solve(array, numRotation) {
    let rotation = numRotation % array.length;

    for (let i = 0; i < rotation; i++) {
            let el = array.pop();
            array.unshift(el);
    }
    console.log(array.join(" "))
}
solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
