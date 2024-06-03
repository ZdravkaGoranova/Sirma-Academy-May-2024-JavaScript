function aPatern(size) {
  let matrix = [];
  let count = 1;
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      if (!matrix[i]) {
        matrix[i] = [];
      }
      matrix[i][j] = count++;
    }
  }
  return matrix;
}

function bPatern(size) {
  let matrix = [];
  let count = 1;
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      if (!matrix[i]) {
        matrix[i] = [];
      }
      let row = i;
      if (j % 2 !== 0) {
        row = size - 1 - i;
      }
      matrix[row][j] = count++;
    }
  }
  return matrix;
}

function solve(size, pattern) {
  let matrix;

  if (pattern === 'A') {
    matrix = aPatern(size);
  } else {
    matrix = bPatern(size);
  }

  for (const row of matrix) {
    console.log(row.join(' '));
  }
}
solve(3, 'A');
console.log(`---------------`);
solve(3, 'B');
