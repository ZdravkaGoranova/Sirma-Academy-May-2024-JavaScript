function receivesTextToCh(word) {
    let ch = word.charCodeAt(0);
    return ch;
}

function asciiIChart(num1, num2) {
    let result = [];
    if (num1 > num2) {

        for (let i = num2-1; i < num1; i++) {
            result.push(i)
        }
    } else {
        for (let i = num1-1; i <= num2; i++) {
            result.push(i)
        } 
    }
    return result;
}
function receivesNumberToText(arrayNumber) {
    let result = [];

    for (let i = 0; i < arrayNumber.length; i++) {
        const element = arrayNumber[i];
        const chart = String.fromCharCode(element);
        result.push(chart);
    }
    return result;
}

function charractersRange(a, b) {

    let num1 = receivesTextToCh(a);
    let num2 = receivesTextToCh(b);
    let arrayNumber = asciiIChart(num1, num2);

    let rancheArray = receivesNumberToText(arrayNumber);
    console.log(rancheArray.join(" "));
}
charractersRange('a', 'd');
charractersRange('#', ':');
charractersRange('C', '#');



