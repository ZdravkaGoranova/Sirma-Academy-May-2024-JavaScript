function solve(arr1, arr2) {
    let sum = 0;
    let isIndetical = true;
    let index = null;

    for (let i = 0; i < arr1.length; i++) {
        const element1 = arr1[i];
        const element2 = arr2[i];

        if (element1 === element2) {
            sum += Number(element1);
        } else {
            isIndetical = false;
            index = i;
            break;
        }
    }
    if (isIndetical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index.`);
    }
}
solve(['10', '20', '30'], ['10', '20', '30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
solve(['1'], ['10']);