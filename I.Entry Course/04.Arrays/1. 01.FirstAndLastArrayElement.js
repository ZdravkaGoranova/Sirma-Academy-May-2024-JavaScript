function solve(array) {
    let sumFirstLast = 0;
    let firstEl = Number(array[0]);
    let lastEl = Number(array[array.length - 1]);
    
    sumFirstLast = firstEl + lastEl;
    console.log(sumFirstLast);
}
solve(['20', '30', '40']);
solve(['10', '17', '22', '33']);
solve(['11', '58', '69']);
