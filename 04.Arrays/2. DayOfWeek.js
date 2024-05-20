function solve(number) {
    let week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thurstday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    if (week[number]) {
        console.log(week[number]);
    } else {
        console.log(`Invalid day!`);
    }

}
solve(3);
solve(6);
solve(11);
