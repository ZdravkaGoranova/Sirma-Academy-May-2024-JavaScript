function solve(array) {
    let newArray = [];

    newArray = array[0].split(' ').map(Number);
    array.shift();

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element.includes('Add')) {
            const parts = element.split(' ');
            const num = Number(parts[parts.length - 1]);
            newArray.push(num);

        } else if (element.includes('Remove ')) {
            const parts = element.split(' ');
            const num = Number(parts[parts.length - 1]);
            const indexOfNum = newArray.indexOf(num);
            newArray.splice(indexOfNum, 1)

        } else if (element.includes('RemoveAt ')) {
            const parts = element.split(' ');
            const num = Number(parts[parts.length - 1]);
            newArray.splice(num, 1)

        } else if (element.includes('Insert ')) {
            const parts = element.split(' ');
            const num = Number(parts[1]);
            const index = Number(parts[parts.length - 1]);
            newArray.splice(index, 0,num)
        }
    }
    console.log(newArray.join(" "))
}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
