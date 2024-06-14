function solve(matrix) {
  let countRow = 0;
  let countcolumns = 0;
  let sumAllMatrixElement = 0;

  for (let i = 0; i < matrix.length; i++) {
    countRow = matrix.length;

    for (let j = 0; j < matrix[i].length; j++) {
      countcolumns = matrix[i].length;
      const el1 = matrix[i][j];
      sumAllMatrixElement += el1;
    }
  }
  console.log(countRow);
  console.log(countcolumns);
  console.log(sumAllMatrixElement);
}
solve([
  [7, 1, 3, 3, 2, 1],
  [1, 3, 9, 8, 5, 6],
  [4, 6, 7, 9, 1, 0],
]);
console.log(`-------------`);
solve([
  [10, 11, 12, 13],
  [14, 15, 16, 17],
]);
