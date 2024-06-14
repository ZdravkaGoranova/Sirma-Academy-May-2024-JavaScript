function alarm(hour, minutes) {
    let h;
    let m;
    let after15 = 15;
    h = hour;

    if ((minutes >= 0 && minutes <= 59)
        && (hour >= 0 && hour <= 23)) {

        m = minutes + after15;
        if (m > 60) {
            h = hour + 1;
            if (h = 24) {
                h = 0;
            }
            m = (m - 60);
        } else {
            h = hour;
        }
    }
    console.log(`${h}:${m.toString().padStart(2, '0')}`)
}
alarm(1, 47);
alarm(0, 2);
alarm(23, 59);
alarm(11, 0o7);