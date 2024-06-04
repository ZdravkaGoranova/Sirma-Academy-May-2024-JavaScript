class StringContainer {
  constructor(string, length) {
    this.string = string;
    this.length = length;

    this.innerString = string;
    this.innerLength = length;
  }
  increase(length) {
    this.innerLength += length;
  }
  decrease(length) {
    this.innerLength -= length;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }

    this.innerString;
  }
  toString() {
    if (this.innerString.length > this.innerLength) {
      return this.innerString.slice(0, this.innerLength) + '...';
    }

    return this.innerString;
  }
}

let test = new StringContainer('Test', 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
