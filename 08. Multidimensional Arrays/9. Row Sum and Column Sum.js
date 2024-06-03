function solve(matrix) {
  let newMatrix = [];

  newMatrix = matrix.map((rowString) => rowString.split(' ').map(Number));
  //   for (let i = 0; i < matrix.length; i++) {
  //     const arr = matrix[i].split(' ').map(Number);
  //     newMatrix.push(arr);
  //   }

  let rowSums = newMatrix.map((row) => row.reduce((sum, num) => sum + num, 0));

  let columnSums = newMatrix[0].map((_, columnIndex) =>
    newMatrix.reduce((sum, row) => sum + row[columnIndex], 0),
  );
  //    let columnSums = [];
  //    for (let j = 0; j < matrix[0].length; j++) {
  //      let sum = 0;
  //      for (let i = 0; i < matrix.length; i++) {
  //        sum += matrix[i][j];
  //      }
  //      columnSums.push(sum);
  //    }
  console.log(`Row Sums: ${rowSums.join(', ')}`);
  console.log(`Column Sums: ${columnSums.join(', ')}`);
}
solve(['1 2', '3 4', '5 6']);
console.log(`---------------`);
solve(['1 2 3', '4 5 6', '7 8 9']);
