function solve(object) {
  let townKeys = Object.keys(object);

  // for (const iterator of townKeys) {
  //   console.log(`${iterator} -> ${object[iterator]}`);
  // }
  for (const key in object) {
    console.log(`${key} -> ${object[key]}`);
  }
}
solve({
  name: 'Sofia',
  population: '1234567',
  country: 'Bulgaria',
  postcode: '1000',
});
