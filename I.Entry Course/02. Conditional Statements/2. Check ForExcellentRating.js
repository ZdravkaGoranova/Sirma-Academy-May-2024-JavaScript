function isExcellent(rating) {
    let result;
    if (rating >= 5.50) {
        result = "Excellent";
    } else {
        result = "no output";
    }
    console.log(result)
}
isExcellent(6);
isExcellent(5);
isExcellent(5.51);
isExcellent(5.501);