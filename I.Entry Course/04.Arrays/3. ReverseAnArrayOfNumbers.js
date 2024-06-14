function solve(number, array) {
    let newArray = [];

    for (let i = number - 1; i >= 0; i--) {
        let elemement = array[i];
        // newArray[number - i] = elemement;
        newArray.push(elemement);
    }
    console.log(newArray.join(" "));
}
solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
