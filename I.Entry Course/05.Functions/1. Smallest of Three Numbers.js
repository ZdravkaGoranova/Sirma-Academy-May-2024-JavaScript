function min(array) {
  let min = +Infinity;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < min) {
      min = element;
    }
  }
  return min;
}

function SmallestOfThreeNumbers(a, b, c) {
  let array = new Array();
  array.push(a, b, c);
  //   let smallestNum = Math.min(...array);
  //   console.log(smallestNum);

  let smallestNum = min(array);
  console.log(smallestNum);
}

SmallestOfThreeNumbers(2, 5, 3);
SmallestOfThreeNumbers(600, 342, 123);
SmallestOfThreeNumbers(25, 21, 4);
