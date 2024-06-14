function solve(arrayStrings) {
  let register = {};

  arrayStrings.forEach((element) => {
    let currentEl = element.split(' | ');
    let [carBrand, carModel, producedCars] = currentEl;

    producedCars = Number(producedCars);

    if (!register[carBrand]) {
      register[carBrand] = {};
    }

    if (register[carBrand][carModel]) {
      register[carBrand][carModel] += producedCars;
    } else {
      register[carBrand][carModel] = producedCars;
    }
  });

  for (let brand in register) {
    console.log(brand);
    for (let model in register[brand]) {
      console.log(`###${model} -> ${register[brand][model]}`);
    }
  }
}

solve([
  'Audi | Q7 | 1000',
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);
