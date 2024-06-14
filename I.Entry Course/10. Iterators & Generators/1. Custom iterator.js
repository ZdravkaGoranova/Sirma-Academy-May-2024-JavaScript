const obj = {
  a: 'apple',
  b: 'banana',
  c: 'cherry',

  [Symbol.iterator]() {
    let values = Object.values(this);
    let currentIndex = 0;
    return {
      next() {
        return {
          value: values[currentIndex++],
          done: currentIndex > values.length,
        };
      },
    };
  },
};

for (const value of obj) {
  console.log(value);
}

const obj2 = {
  a: 'apple',
  b: 'banana',
  c: 'cherry',
  [Symbol.iterator]: function* () {
    let values = Object.values(this);
    for (const value of values) {
      yield value;
    }
  },
};

for (const value of obj2) {
  console.log(value);
}
