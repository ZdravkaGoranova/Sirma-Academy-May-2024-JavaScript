function creteArray(num, dividNum) {
  let array = [];
  for (let i = 0; i < dividNum; i++) {
    array.push('%');
  }
  for (let i = dividNum; i < 10; i++) {
    array.push('.');
  }
  return array;
}

function progressBar(num) {
  let dividNum = num / 10;
  let array = creteArray(num, dividNum);
  //  let array = new Array(10).fill('%', 0, dividNum).fill('.', percentCount);

  if (num < 100) {
    console.log(`${num}% [${array.join('')}]`);
    console.log('Loading...');
  } else {
    console.log(`[${array.join('')}]`);
    console.log('Complete!');
  }
}
progressBar(30);
progressBar(50);
progressBar(100);
