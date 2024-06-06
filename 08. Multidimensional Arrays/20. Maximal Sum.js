function solve(input) {
  let matrix = input.map((row) => row.split(' ').map(Number));

  let maxSum = Number.MIN_SAFE_INTEGER;
  let maxSubMatrix = [];

  // Обхождаме всички възможни 3x3 подматрици
  for (let i = 0; i < matrix.length - 2; i++) {
    for (let j = 0; j < matrix[i].length - 2; j++) {
      // Изчисляваме сумата на текущата 3x3 подматрица
      let currentSum = 0;
      let currentSubMatrix = [];
      for (let k = 0; k < 3; k++) {
        let row = [];
        for (let l = 0; l < 3; l++) {
          currentSum += matrix[i + k][j + l];
          row.push(matrix[i + k][j + l]);
        }
        currentSubMatrix.push(row);
      }

      // Съхраняваме текущата 3x3 подматрица, ако нейната сума е по-голяма от максималната намерена до момента
      if (currentSum > maxSum) {
        maxSum = currentSum;
        maxSubMatrix = currentSubMatrix;
      }
    }
  }

  console.log(`Sum = ${maxSum}`);
  for (let row of maxSubMatrix) {
    console.log(row.join(' '));
  }
}

solve(['1 5 5 2 4', '2 1 4 14 3', '3 7 11 2 8', '4 8 12 16 4']);

console.log('-------');

solve([
  '1 0 4 3 1 1',
  '1 3 1 3 0 4',
  '6 4 1 2 5 6',
  '2 2 1 5 4 1',
  '3 3 3 6 0 5',
]);
