function solve(array, range) {
  let [start, end] = range.split(':');
  let [startCol, startRow] = start.split('');
  let [endCol, endRow] = end.split('');
  //   let startCol = columnToIndex(start[0]);
  //   let startRow = parseInt(start[1]) - 1;
  //   let endCol = columnToIndex(end[0]);
  //   let endRow = parseInt(end[1]) - 1;
  startRow = parseInt(startRow) - 1;
  endRow = parseInt(endRow) - 1;

  startCol = columnToIndex(startCol);
  endCol = columnToIndex(endCol);

  let row = array.length;
  let col = array[0].length;
  let sum = 0;

  function columnToIndex(col) {
    return col.charCodeAt(0) - 'A'.charCodeAt(0);
  }

  for (let i = startRow; i <= endRow; i++) {
    for (let j = startCol; j <= endCol; j++) {
      const element = array[i][j];
      sum += element;
    }
  }
  console.log(sum);
}
solve(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  'A1:C2',
);
solve(
  [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
  ],
  'A1:B4',
);
solve(
  [
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  'A1:C4',
);
