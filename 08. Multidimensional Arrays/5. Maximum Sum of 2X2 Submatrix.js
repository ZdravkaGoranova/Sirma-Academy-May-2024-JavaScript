function solve(matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    const array = element.split(' ').map(Number);
    newMatrix.push(array);
  }

  let maxSum = Number.MIN_SAFE_INTEGER;
  let startRow = 0;
  let startCol = 0;

  for (let i = 0; i < newMatrix.length - 1; i++) {
    for (let j = 0; j < newMatrix[i].length - 1; j++) {
      let currentSum =
        newMatrix[i][j] +
        newMatrix[i][j + 1] +
        newMatrix[i + 1][j] +
        newMatrix[i + 1][j + 1];

      if (currentSum > maxSum) {
        maxSum = currentSum;
        startRow = i;
        startCol = j;
      }
    }
  }
  console.log(maxSum);
  console.log(newMatrix[startRow][startCol], newMatrix[startRow][startCol + 1]);
  console.log(
    newMatrix[startRow + 1][startCol],
    newMatrix[startRow + 1][startCol + 1],
  );
  //   let firstMatrix = getSubMatrix(newMatrix, startRow, startCol, 2);
  //   for (const line of firstMatrix) {
  //     console.log(line.join(' '));
  //   }
}

// function getSubMatrix(matrix, startRow, startCol, length) {
//   return matrix
//     .slice(startRow, startRow + length)
//     .map((row) => row.slice(startCol, startCol + length));
// }

solve(['7 1 3 3 2 1', '1 3 9 8 5 6', '4 6 7 9 1 0']);
console.log(`-------------`);
solve(['10 11 12 13', '14 15 16 17']);
