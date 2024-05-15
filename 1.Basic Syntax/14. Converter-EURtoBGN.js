function convertEUToBG(num) {
    let eur = num;
    let bg = eur * 1.95583;
    console.log(bg.toFixed(2))
};

convertEUToBG(1);
convertEUToBG(15);
convertEUToBG(123);
convertEUToBG(0.5);
convertEUToBG(0.51);