function matrixDiagonalSum(array) {
  let matrix = [];
  let firstDiagonal = [];
  let lastDiagonal = [];
  let sumFirstDiagonal = 0;
  let sumLastDiagonal = 0;

  for (const line of array) {
    let row = line.split(' ');
    matrix.push(row);
  }

  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i][i];
    firstDiagonal.push(Number(element));

    const el = matrix[matrix.length - 1 - i][i];
    lastDiagonal.push(Number(el));
  }

  sumFirstDiagonal = firstDiagonal.reduce((a, b) => a + b, 0);
  sumLastDiagonal = lastDiagonal.reduce((a, b) => a + b, 0);

  let sum = sumFirstDiagonal + sumLastDiagonal;
  console.log(sum);
}
matrixDiagonalSum(['1 2 3', '4 5 6', '7 8 9']);
console.log(`----------`);
matrixDiagonalSum(['10 11', '14 15']);
