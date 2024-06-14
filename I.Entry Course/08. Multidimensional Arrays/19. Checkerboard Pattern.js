function solve(n) {
  let matrix = [];

  let rows = n;
  let cols = n;

  matrix = Array.from({ length: cols }, () => Array(rows).fill('*'));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = (i + j) % 2; // Смяна на стойността между 0 и 1 на базата на индекса на реда и колоната
    }
  }
  console.log(matrix.map((row) => row.join(' ')).join('\n'));
}
solve(3);
console.log(`-------`);
solve(4);
