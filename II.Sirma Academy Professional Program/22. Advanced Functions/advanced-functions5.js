// 5. Closure for Data Privacy
// Create a function that returns an object with two methods: one to get a private variable
// and one to set it. Use a closure to maintain the private variable.

function createPrivateCounter() {
  let count = 0;

  let obj = {
    getCount() {
      return count;
    },
    increment() {
      count++;
    },
  };

  return obj;
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
console.log(counter.getCount());
