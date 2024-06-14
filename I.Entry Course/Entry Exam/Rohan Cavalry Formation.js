function rohanCavalryFormation(riders, listOfCommands) {
  for (let i = 0; i < listOfCommands.length; i++) {
    const element = listOfCommands[i];

    if (element.includes('destroy')) {
      let [command, index] = element.split(' ');

      index = Number(index);

      if (index >= 0 && index < riders.length) {
        riders.splice(index, 1);
        console.log(riders.join(' '));
      }
    }

    if (element.includes('swap')) {
      let [command, index1, index2] = element.split(' ');

      index1 = Number(index1);
      index2 = Number(index2);

      if (
        index1 >= 0 &&
        index1 < riders.length &&
        index2 >= 0 &&
        index2 < riders.length
      ) {
        [riders[index1], riders[index2]] = [riders[index2], riders[index1]];
        console.log(riders.join(' '));
      }
    }

    if (element.includes('add')) {
      let [command, newRider] = element.split(' ');
      newRider = Number(newRider);
      riders.push(newRider);
      console.log(riders.join(' '));
    }

    if (element.includes('insert')) {
      let [command, newRider, index] = element.split(' ');
      index = Number(index);
      newRider = Number(newRider);
      if (index >= 0 && index <= riders.length) {
        riders.splice(index, 0, newRider);
        console.log(riders.join(' '));
      }
    }

    if (element.includes('center')) {
      let numberRiders = riders.length;
      let centerIndex = Math.floor(riders.length / 2);
      if (numberRiders % 2 === 0) {
        console.log(` ${riders[centerIndex - 1]} ${riders[centerIndex]}`);
      } else {
        console.log(` ${riders[centerIndex]}`);
      }
    }
  }
}
rohanCavalryFormation(
  [1, 2, 3, 4, 5],
  ['destroy 3', 'swap 0 1', 'add 6', 'center'],
);
console.log(`------------`);
rohanCavalryFormation(
  [1, 2, 3, 4, 5],
  [
    'add 6',
    'swap 0 5',
    'swap 1 4',
    'swap 2 3',
    'swap 2 100',
    'swap 2 2',
    'center',
  ],
);
console.log(`------------`);
rohanCavalryFormation(
  [1, 2],
  ['insert 3 2', 'center', 'destroy 1', 'destroy 2', 'center'],
);
