function time(minutes) {
    let hour = Math.floor(minutes / 60);
    let min = minutes - hour * 60;
    console.log(`${hour}:${min}`);
}
time(60);
time(90);
time(325);