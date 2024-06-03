let arr = ['a', 'b', 'c'];

arr[Symbol.iterator] = function* () {
  for (let i = this.length - 1; i >= 0; i--) {
    yield this[i];
  }
};
for (const character of arr) {
  console.log(character);
}
