function solve(array) {
  let attackedPlanets = [];
  let destroyedPlanets = [];

  for (let message of array) {
    let regex = /[STARstar]/g;
    let matches = message.match(regex);
    let count = matches ? matches.length : 0;

    let decryptedMessage = message
      .split('')
      .map((char) => String.fromCharCode(char.charCodeAt(0) - count))
      .join('');

    let planetNameMatch = decryptedMessage.match(/@([A-Za-z]+)/);
    let planetPopulationMatch = decryptedMessage.match(/:(\d+)/);
    let attackTypeMatch = decryptedMessage.match(/!([AD])!/);
    let soldierCountMatch = decryptedMessage.match(/->(\d+)/);

    if (
      planetNameMatch &&
      planetPopulationMatch &&
      attackTypeMatch &&
      soldierCountMatch
    ) {
      let planetName = planetNameMatch[1];
      let planetPopulation = planetPopulationMatch[1];
      let attackType = attackTypeMatch[1];
      let soldierCount = soldierCountMatch[1];

      if (attackType === 'A') {
        attackedPlanets.push(planetName);
      } else if (attackType === 'D') {
        destroyedPlanets.push(planetName);
      }
    }
  }

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  attackedPlanets.forEach((planet) => console.log(`-> ${planet}`));

  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  destroyedPlanets.forEach((planet) => console.log(`-> ${planet}`));
}

solve(['STCDoghudd4=53333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
console.log(`-------`);
solve([
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  'GQhrr|A977777(H(TTTT',
  'EHfsytsnhf?8555&I&2C9555SR',
]);

// function solve(array) {
//   let onehalves = array.join(',');
//   //   let regex = /[STAR]/gim;
//   let regex = /[STAR]/gim;
//   let count;
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     let message = array[i];
//     const found = message.match(regex);
//     count = found ? found.length : 0;

//     if (found) {
//       message = message.replace(regex, '');
//     }

//     let newAsciiValues = message
//       .split('')
//       .map((char) => char.charCodeAt(0) - count);

//     let newStr = newAsciiValues
//       .map((ascii) => String.fromCharCode(ascii))
//       .join('');
//     result.push(newStr);
//     console.log(newStr);

//     let pNameRegex = /@[A-Z]+/gim;
//     let plPopulationRegex = /:[\d]+/gim;
//     let attackRegex = /\b![AD]!/gm;
//     let sCountRegex = /->\d+/gm;

//     const planetName = newStr.match(pNameRegex);
//     const planetPopulation = newStr.match(plPopulationRegex);
//     const attack = newStr.match(attackRegex);
//     const soldierCount = newStr.match(sCountRegex);

//     if (!planetName && !planetPopulation && !attack && !soldierCount) {
//       console.log('The essages are not  valid');
//       return;
//     }

//     if (attack.join('').substring(1, 2) === 'D') {
//       console.log(`
// Destroyed planets: ${planetPopulation}
// -> ${planetName.join('').substring(1)}
// `);
//     } else if (attack.join('').substring(1, 2) === 'A') {
//       console.log(`Attacked planets: ${planetPopulation}
// -> ${planetName.join('').substring(1)}

// `);
//     }
//   }
// }
// solve(['STCDoghudd4=53333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
// console.log(`-------`);
// solve([
//   "tt(''DGsvywgerx>6444444444%H%1B9444",
//   'GQhrr|A977777(H(TTTT',
//   'EHfsytsnhf?8555&I&2C9555SR',
// ]);
