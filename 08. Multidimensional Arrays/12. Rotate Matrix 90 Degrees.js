function rotateMatrix(matrixStr) {
  let matrix = matrixStr.map((row) => row.split(' ').map(Number));
  let rows = matrix.length;
  let cols = matrix[0].length;

  let rotatedMatrix = Array.from({ length: cols }, () => Array(rows).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      rotatedMatrix[col][rows - 1 - row] = matrix[row][col];
    }
  }

  rotatedMatrix.forEach((row) => console.log(row.join(' ')));
}
rotateMatrix(['1 2 3', '4 5 6', '7 8 9']);
console.log(`-------`);

rotateMatrix(['0 1 2 3', '4 5 6 7', '8 9 10 11', '12 13 14 15']);
