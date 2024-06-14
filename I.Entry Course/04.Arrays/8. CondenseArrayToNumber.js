function solve(array) {
    while (array.length > 1) {
        let condenseArray = [];
        for (let i = 0; i < array.length - 1; i++) {
            const newElement = array[i] + array[i + 1];
            condenseArray.push(newElement);
        }
        array = condenseArray;
    }
    console.log(array[0])
}
solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
solve([1]);
