function solve(array) {
    let newArray = [];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        const command = array[i];
        switch (command) {
            case 'add':
                let currentEl = sum += 1;
                newArray.push(currentEl);
                break;

            case 'remove':
                newArray.pop()
                break
                
            default:
                break;
        }
    }
    if (newArray.length > 0) {
        console.log(newArray.join(" "))
    } else {
        console.log(`Empty`)
    }
}
solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);
