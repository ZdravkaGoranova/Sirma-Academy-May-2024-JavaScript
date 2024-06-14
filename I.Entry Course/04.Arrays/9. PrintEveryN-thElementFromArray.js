function solve(array, step) {
    let newArray = [];
    for (let i = 0; i < array.length; i += step) {
        const element = array[i];
        newArray.push(element);
    }
    console.log(newArray.join(" "))
}
solve(['5', '15', '31', '14', '20'], 2);
solve(['dsa', 'asd', 'demo', 'test'], 2);
solve(['1', '2', '3', '4', '5'], 6);
