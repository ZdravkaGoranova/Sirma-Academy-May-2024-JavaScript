function solve(matrixStrings) {
  let matrix = matrixStrings.map((row) => row.split(' ').map(Number));
  let sum = 0;

  let rows = matrix.length;
  let cols = matrix[0].length;

  sum += matrix[0].reduce((sum, num) => sum + num, 0);
  sum += matrix[rows - 1].reduce((sum, num) => sum + num, 0);

  for (let i = 1; i < rows - 1; i++) {
    sum += matrix[i][0];
    sum += matrix[i][cols - 1];
  }

  console.log(sum);
}
solve(['1 2 3', '4 5 6', '7 8 9']);
solve(['1 2 3 0', '4 5 6 7', '0 8 9 1']);
