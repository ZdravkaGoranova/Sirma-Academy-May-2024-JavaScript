function magicNumber(a, b, num) {

    let isMagicNumber = false;
    let combination = 0;

    if ((a >= 1 && a <= 999)
        && (b > a && b <= 1000)
        && (num >= 1 && num <= 10000)) {

        for (let i = a; i <= b; i++) {
            sum = 0;
            for (let j = a; j <= b; j++) {
                combination++;
                isMagicNumber = i + j === num;

                if (isMagicNumber) {
                    console.log(`Combination ${combination} - (${i} + ${j} = ${num})`);
                    break;
                }
            }
            if (isMagicNumber) {
                break;
            }

        }
        if (!isMagicNumber) {
            console.log(`${combination} combinations - neither equals ${num}`);
        }
    } else {
        console.log(`Number a   is over than range [1...999] or a > b  or num is over than range [1...10000].`)
    }
}
magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);
