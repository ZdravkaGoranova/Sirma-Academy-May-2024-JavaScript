function month(month) {
    let result;
    if (month < 1 || month > 12) {
        console.log("Invalid month number. Please enter a number between 1 and 12.");
    }
    switch (month) {
        case 1:
            result = 31;
            break;
        case 2:
            result = 28;
            break;
        case 3:
            result = 31;
            break;
        case 4:
            result = 30;
            break;
        case 5:
            result = 31;
            break;
        case 6:
            result = 30;
            break;
        case 7:
            result = 31;
            break;
        case 8:
            result = 30;
            break;
        case 9:
            result = 31;
            break;
        case 10:
            result = 30;
            break;
        case 11:
            result = 31;
            break;
        case 12:
            result = 30;
            break;
        default:
            console.log("Invalid month number. Please enter a number between 1 and 12.");
            break;
    }
console.log(result);
}
month(1);
month(2);
month(4);
month(7);