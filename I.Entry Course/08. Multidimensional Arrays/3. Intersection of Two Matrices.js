function solve(fistrInput, secondInput) {
  let matrixA = [];
  let matrixB = [];
  let newMatrix = [];

  for (let i = 0; i < fistrInput.length; i++) {
    matrixA.push(fistrInput[i].split(' '));
    matrixB.push(secondInput[i].split(' '));
  }

  for (let i = 0; i < matrixA.length; i++) {
    newMatrix[i] = [];

    for (let j = 0; j < matrixA[i].length; j++) {
      if (matrixA[i][j] === matrixB[i][j]) {
        newMatrix[i][j] = matrixA[i][j];
      } else {
        newMatrix[i][j] = '*';
      }
    }
  }

  for (const row of newMatrix) {
    console.log(row.join(' '));
  }
//   console.log(newMatrix);
}
solve(['a b c d', 'a b c d', 'a b c d'], ['k b c k', 'a b g d', 'a k c d']);
solve(['1 2', '3 4', '5 6', '7 8', '9 1'], ['0 2', '3 1', '1 6', '7 4', '1 1']);
