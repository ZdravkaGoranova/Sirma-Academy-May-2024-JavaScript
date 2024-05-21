function solve(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            newArray.unshift(element);

        } else if (element >= 0) {
            newArray.push(element);
        }
    }
    for (const el of newArray) {
        console.log(el)
    }
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
