function solve(n, k) {
    let array = [1,];
    // array.length = n;

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = i - k; j < i; j++) {
            if (j >= 0) {
                sum += array[j];
            }
        }
        array.push(sum);
    }
    console.log(array.join(" "));
}
solve(6, 3);
solve(8, 2);
