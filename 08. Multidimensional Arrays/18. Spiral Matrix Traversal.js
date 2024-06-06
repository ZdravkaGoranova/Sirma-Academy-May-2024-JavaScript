function solve(array) {
  let matrix = array.map((row) => row.split(' ').map(Number));
  let spiral = [];
  let rows = matrix.length;
  let cols = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  while (top <= bottom && left <= right) {
    for (let j = left; j <= right; j++) {
      spiral.push(matrix[top][j]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      spiral.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        spiral.push(matrix[bottom][j]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiral.push(matrix[i][left]);
      }
      left++;
    }
  }

  console.log(spiral.join(' '));
}
solve(['1 2 3', '4 5 6', '7 8 9']);
console.log(`-------`);
solve(['1 2 3 4', '5 6 7 8', '9 10 11 12', '13 14 15 16']);
console.log(`-------`);
solve(['1 2', '3 4']);
