function solve(boardStrings) {
  let board = boardStrings.map((row) => row.split(' ').map(Number));

  let rows = new Set();
  let cols = new Set();
  let diagonals1 = new Set();
  let diagonals2 = new Set();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 1) {
        if (
          rows.has(row) ||
          cols.has(col) ||
          diagonals1.has(row - col) ||
          diagonals2.has(row + col)
        ) {
          return 'Yes';
        }

        rows.add(row);
        cols.add(col);
        diagonals1.add(row - col);
        diagonals2.add(row + col);
      }
    }
  }
  return 'No';
}

console.log(solve(['0 1 0 0', '0 0 0 1', '1 0 0 0', '0 0 1 0'])); // No
console.log(solve(['0 1 0 0', '0 0 0 1', '1 0 0 0', '0 1 0 0'])); // Yes
console.log(solve(['0 1 0 0', '0 0 0 0', '1 0 0 0', '0 0 0 0'])); // No
