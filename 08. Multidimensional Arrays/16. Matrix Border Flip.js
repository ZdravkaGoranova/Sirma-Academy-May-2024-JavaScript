function solve(matrixStrings) {
  let matrix = matrixStrings.map((row) => row.split(' ').map(Number));
  let rows = matrix.length;
  let cols = matrix[0].length;

  if (rows < 2 || cols < 2) return; // Проверка за тривиален случай

  // Запазваме горната редица в временен масив
  let temp = matrix[0].slice();

  // Преместваме лявата колона в горната редица
  for (let row = 0; row < rows - 1; row++) {
    matrix[row][0] = matrix[row + 1][0];
  }

  // Преместваме долната редица в лявата колона
  for (let col = 0; col < cols - 1; col++) {
    matrix[rows - 1][col] = matrix[rows - 1][col + 1];
  }

  // Преместваме дясната колона в долната редица
  for (let row = rows - 1; row > 0; row--) {
    matrix[row][cols - 1] = matrix[row - 1][cols - 1];
  }

  // Преместваме горната редица в дясната колона
  for (let col = cols - 1; col > 0; col--) {
    matrix[0][col] = temp[col - 1];
  }

  matrix.forEach((row) => console.log(row.join(' ')));
}

solve(['1 2 3', '4 5 6', '7 8 9']);
console.log(`-------`);
solve(['0 1 0 0', '0 0 0 1', '1 0 0 0', '0 1 0 0']);
