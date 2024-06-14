function councilOfElrondVotes(array) {
  let members = array.legth;
  let countYes = 0;
  let countNo = 0;
  let countAbstain = 0;

  for (let i = 0; i < array.length; i++) {
    const vote = array[i];
    switch (vote) {
      case 'Yes':
        countYes++;
        break;
      case 'No':
        countNo++;
        break;
      case 'Abstain':
        countAbstain++;
        break;
      default:
        console.log(`Invalid vote!`);
        break;
    }
  }
  if (countYes > countNo) {
    console.log(`Yes`);
  } else if (countYes < countNo) {
    console.log(`No`);
  } else if (countYes === countNo && countYes != 0 && countNo != 0) {
    console.log(`Tie`);
  } else if (countAbstain > 0 && countYes === 0 && countNo === 0) {
    console.log(`Abstain`);
  } else if (countYes === 0 && countNo === 0) {
    console.log(`Abstain`);
  } else {
    console.log('Abstain');
  }
}
councilOfElrondVotes(['Yes', 'No', 'Yes', 'Abstain', 'Yes']);
console.log(`------------`);
councilOfElrondVotes(['No', 'No', 'Yes']);
console.log(`------------`);
councilOfElrondVotes(['Yes', 'No']);
console.log(`------------`);
councilOfElrondVotes(['Abstain']);
console.log(`------------`);
councilOfElrondVotes(['No', 'No', 'Abstain', 'Abstain', 'Yes', 'Yes']);
console.log(`------------`);
councilOfElrondVotes(['No', 'Abstain', 'Abstain']);
