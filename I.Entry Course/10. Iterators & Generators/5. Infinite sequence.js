class SequenceGenerator {
  constructor() {
    this.current = 1;
  }

  *generateSequence() {
    while (true) {
      yield this.current++;
    }
  }

  [Symbol.iterator]() {
    return this.generateSequence();
  }
}

let seqGen = new SequenceGenerator();
let iterator = seqGen[Symbol.iterator](); 

console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 
