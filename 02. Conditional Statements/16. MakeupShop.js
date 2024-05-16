function makeupShop(
    renovation,
    powders,
    lipsticks,
    spirals,
    shadows,
    correctors
) {
    let rentShop;

    let productsCount = powders +
        lipsticks +
        spirals +
        shadows +
        correctors;

    let totalPrice = powders * 2.6 +
        lipsticks * 3 +
        spirals * 4.1 +
        shadows * 8.2 +
        correctors * 2;

    if (productsCount >= 50) {
        totalPrice = totalPrice - (totalPrice * 0.25);
    }
    rentShop = totalPrice * 0.1;
    totalPrice -= rentShop;
    if (totalPrice > renovation) {
        totalPrice -= renovation;
        console.log(`Yes! ${totalPrice.toFixed(2)} BGN left.`);
    } else if (totalPrice < renovation) {
        let result = Math.abs(totalPrice - renovation);
        console.log(`Not enough money! ${result.toFixed(2)} BGN needed.`);
    }
}
makeupShop(40.8, 20, 25, 30, 50, 10);
makeupShop(320, 8, 2, 5, 5, 1);