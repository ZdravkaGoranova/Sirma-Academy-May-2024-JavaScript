function electricityBill(unitsConsumed, ratePerUnit) {
    let totalBill = (unitsConsumed * ratePerUnit) + 10;
    console.log(totalBill.toFixed(2))
}
electricityBill(100, 1.0);
electricityBill(200, 1.0);
electricityBill(150, 1.1);