function airline(weight, dimensions) {
    let overweightFee = 0;
    let oversizeFee = 0;
    let handlingFee = 0;
    let totalFee = 0;
    let text="";
    if (weight > 50) {
        overweightFee = 100;
    }
    if (dimensions > 158) {
        result =  dimensions - 158;

        if (result >= 1 && result <= 20) {
            oversizeFee = 50;
        } else if (result >= 21 && result <= 50) {
            oversizeFee = 100;
        } else if (result > 50) {
            oversizeFee = 200;
        }

    }
    if (oversizeFee > 0 && overweightFee > 0) {
        handlingFee = 50;
    }

    totalFee = oversizeFee + overweightFee + handlingFee;
    if (oversizeFee > 0) {
        text += " Oversize";
    } if (overweightFee > 0) {
        text += " Overweight";
    }
    if (handlingFee > 0) {
        text += " Handling";
    } 
    console.log(`$${totalFee} (${text})`);
}
airline(52, 160);
airline(48, 180);
airline(55, 190);