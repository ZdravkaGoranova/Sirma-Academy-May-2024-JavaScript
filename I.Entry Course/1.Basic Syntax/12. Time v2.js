function timeV(minutes) {
    let hour = Math.floor(minutes / 60);
    let min = minutes - hour * 60;
    let stringH;
    let stringM;

    stringH = hour.toString();
    stringM = min.toString();

    if (stringH.length < 2) {// if (hour < 10) {

        stringH =  hour.toString().padStart(2, '0');    // stringH = "0" + hour;
    } else {
        stringH = hour;
    }
    if (stringM.length < 2) {      // if (min < 10) {
       
        stringM =  min.toString().padStart(2, '0'); // stringM = "0" + min;
    } else {
        stringM = min;
    }
    console.log(`${stringH}:${stringM}`);
}
timeV(60);
timeV(90);
timeV(325);