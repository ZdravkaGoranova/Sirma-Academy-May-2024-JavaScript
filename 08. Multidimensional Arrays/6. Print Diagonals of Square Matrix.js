function solve(matrix) {
  let arr = [];
  let firstDiagonal = [];
  let lastDiagonal = [];

  //   for (const line of matrix) {
  //     let row = line.split(' ');
  //     arr.push(row);
  //   }

  //   for (let i = 0; i < arr.length; i++) {
  //     firstDiagonal.push(arr[i][i]);
  //     lastDiagonal.push(arr[arr.length - 1 - i]);
  //   }

  for (let i = 0; i < matrix.length; i++) {
    let el = matrix[i].split(' ');
    let currentEl = el[i];
    firstDiagonal.push(currentEl);

    let element = matrix[matrix.length - 1 - i].split(' ');
    let currentElement = element[i];
    lastDiagonal.push(currentElement);
  }

  console.log(firstDiagonal.join(' '));
  console.log(lastDiagonal.join(' '));
}
solve(['1 2 3', '1 2 3', '1 2 3']);
console.log(`----------`);
solve(['1 2 3 2', '1 1 2 4', '1 2 1 4', '2 2 3 1']);
