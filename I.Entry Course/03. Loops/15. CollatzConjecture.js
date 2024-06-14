function solve(number) {
    let result = number;
    let text = number.toString() + " ";
    while (result != 1) {
        if (result % 2 === 0) {
            result = result / 2;
            text += result + " ";
        } else {
            result = (result * 3 + 1) + " ";
            text += result;
        }
    }
    console.log(text);
}
solve(6);
solve(12);
solve(9);
solve(200);
solve(15);