function solve(array) {
    let reveseArray = [];

    for (let i = (array.length - 1); i >= 0; i--) {
        const element = array[i];
        reveseArray.push(element);
    }

    // for (let i = 0; i < array.length / 2; i++) {
    //     const currentElement = array[i];
    //     array[i] = array[array.length - 1 - i];
    //     array[array.length - 1 - i] = currentElement;
    // }
    console.log(reveseArray.join(" "));
    // console.log(array.join(" "));
}
solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm',
    'nop']);
solve(['33', '123', '0', 'dd']);
