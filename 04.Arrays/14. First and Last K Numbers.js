function solve(k, array) {
    let firstKArray = [];
    let lastKArray = [];
    // let firstKArray = array.slice(0, k);
    // let lastKArray = array.slice(array.length - k);

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i < k) {
            firstKArray.push(element);
        }
    }
    for (let i = array.length - 1; i > 0; i--) {
        const element = array[i];
        if (i < k) {
            lastKArray.unshift(element);
        }
    }
    console.log(firstKArray.join(" "));
    console.log(lastKArray.join(" "));
}
solve(2, [7, 8, 9]);
solve(3, [6, 7, 8, 9]);
