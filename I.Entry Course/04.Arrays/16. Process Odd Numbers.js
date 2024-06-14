function solve(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (i % 2 != 0) {
            let el = element * 2;
            result.unshift(el);
        }
    }
    console.log(result.join(" "));
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
