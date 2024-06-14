function solve(array) {
  let matrix = array.map((row) => row.split(' ').map(Number));

  let row = matrix.length;
  let col = matrix[0].length;
  let sum = 0;
  let isMagicSquare = true;

  // matrix.forEach((element) => {
  //   console.log(element);
  // });

  for (let i = 0; i < matrix.length; i++) {
    let currentSum = matrix[i].reduce((sum, num) => sum + num, 0);

    if (i === 0) {
      sum = currentSum;
    }
    
    if (currentSum != sum && i != 0) {
      isMagicSquare = false;
      break;
    }
  }

  console.log(isMagicSquare);
}
solve(['1 2 3', '4 5 6', '7 8 9']);
solve(['1 0 0 0', '0 0 0 1', '0 1 0 0', '0 0 1 0']);
solve(['8 1 6', '3 5 7', '4 9 2']);
