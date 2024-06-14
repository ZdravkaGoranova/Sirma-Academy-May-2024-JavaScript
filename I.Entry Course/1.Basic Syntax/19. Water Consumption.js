function waterConsumption(water, people) {

    let dailyConsumptionPerPerson = water / (7 * people);
    console.log(dailyConsumptionPerPerson.toFixed(2));
}
waterConsumption(2450, 7);
waterConsumption(3150, 10);
waterConsumption(980, 7);