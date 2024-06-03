function solve(matrixStrings) {
  let newMatrix = [];
  let matrix = matrixStrings.map((rowString) =>
    rowString.split(' ').map(Number),
  );
  let zeroRows = new Set();
  let zeroColumns = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const element = matrix[i][j];
      if (element === 0) {
        zeroRows.add(i);
        zeroColumns.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (zeroRows.has(i) || zeroColumns.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  //   for (let i = 0; i < matrix.length; i++) {
  //     console.log(matrix[i].join(' '));
  //   }
  matrix.forEach((element) => {
    console.log(element.join(' '));
  });

}
// solve(['1 2 3', '4 0 6', '7 8 9']);
console.log(`---------------`);
solve(['1 2 3 0', '4 5 6 7', '0 8 9 1']);
