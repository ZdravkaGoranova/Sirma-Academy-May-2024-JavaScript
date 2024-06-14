function solve(arr) {
    let maxLength = 0;
    let currentLength = 1;
    let maxElement = arr[0];
    let currentElement = arr[0];
    let lastIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentLength++;
        } else {
            currentLength = 1;
            currentElement = arr[i];
        }

        if (currentLength > maxLength || (currentLength === maxLength && i >= lastIndex)) {
            maxLength = currentLength;
            maxElement = currentElement;
            lastIndex = i;
        }
    }

    const result = new Array(maxLength).fill(maxElement);
    console.log(result.join(' '));
}
solve([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
solve([1, 1, 2, 3, 4, 5, 6, 2, 2]);
solve([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);