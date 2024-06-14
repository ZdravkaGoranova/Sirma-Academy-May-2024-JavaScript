function solve(matrixA, matrixB) {
  let newMatrix = [];

  for (let i = 0; i < matrixA.length; i++) {
    newMatrix[i] = [];

    for (let j = 0; j < matrixA[i].length; j++) {
      const element1 = matrixA[i][j];
      const element2 = matrixB[i][j];
      let newEl = element1 + element2;
      newMatrix[i][j] = newEl;
    }
  }
  //   console.log(newMatrix);
  for (const line of newMatrix) {
    console.log(line.join(' '));
  }
}
solve(
  [
    [1, 2],
    [3, 4],
  ],
  [
    [2, 2],
    [2, 2],
  ],
);
solve(
  [
    [1, 2, 3],
    [4, 3, 1],
  ],
  [
    [1, 2, 3],
    [4, 2, 2],
  ],
);
