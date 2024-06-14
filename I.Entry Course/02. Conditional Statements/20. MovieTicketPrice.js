function movieTicket(year) {
    let price;
    if (year > 0 && year <= 12) {
        price = "$5";
    } else if (year >= 13 && year <= 19) {
        price = "$8";
    } else if (year > 20) {
        price = "$10";
    }
    console.log(price);
}
movieTicket(10);
movieTicket(16);
movieTicket(25);
movieTicket(13);