function solve(array) {
    
    // array.sort((a, b) => a - b);
    // let smallestNumbers = array.slice(0, 2);
    // console.log(smallestNumbers.join(" "));
    
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element < smallest) {
            secondSmallest = smallest;
            smallest = element;
        } else if (element < secondSmallest) {
            secondSmallest = element;
        }
    }

    console.log(smallest, secondSmallest);
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);
