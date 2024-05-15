function speed(distance, hours, minutes, seconds) {
    let speed;
    let time;
    let hoursToSec = hours * 60 * 60;
    let minutesToSec = minutes * 60;
    time = hoursToSec + minutesToSec + seconds;
    speed = distance / time;

    console.log(speed.toFixed(6))
}

speed(100, 1, 20, 20);
speed(2500, 5, 56, 23);
speed(600, 7, 35, 55);