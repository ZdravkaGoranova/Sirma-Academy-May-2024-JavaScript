function solve(array) {
    let result = [];
    let currentMax = -Infinity;

    for (let i = 0; i < array.length; i++) {
        const currentEl = array[i];

        if (currentEl >= currentMax) {
            result.push(array[i]);
            currentMax = currentEl;
        }
    }
    console.log(result.join(" "));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
