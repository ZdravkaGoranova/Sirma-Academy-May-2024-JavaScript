function numberCheck(number) {
    let numToString = number.toString();
    let lengthNum = numToString.length;
    let sum = 0;

    for (let i = 0; i < lengthNum; i++) {
        const element = numToString[i];
        sum += Math.pow(Number(element), lengthNum)

    }
    let isArmstrongNum = sum = number;

    if (isArmstrongNum) {
        console.log('Armstron')
    } else {
        console.log('Not Armstron')
    }
}
numberCheck(153);
numberCheck(370);
numberCheck(123);
numberCheck(407);
numberCheck(1634);