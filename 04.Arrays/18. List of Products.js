function solve(array) {

    let newArr = array.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(`${i + 1}.${element}`)
    }
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
