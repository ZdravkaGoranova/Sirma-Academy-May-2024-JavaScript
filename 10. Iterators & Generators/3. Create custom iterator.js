class OddIterator {
  constructor(arr) {
    this.arr = arr;
  }
  [Symbol.iterator]() {
    let oddValues = this.arr.filter((number) => number % 2 !== 0);
    let currentIndex = 0;

    return {
      next() {
        return {
          value: oddValues[currentIndex++],
          done: oddValues.length < currentIndex,
        };
      },
    };
  }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddValues = new OddIterator(arr);
for (const value of oddValues) {
  console.log(value);
}
