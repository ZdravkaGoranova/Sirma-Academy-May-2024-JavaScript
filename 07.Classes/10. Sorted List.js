class List {
  array = [];
  constructor(element) {
    this.element = element;
  }
  add(element) {
    this.array.push(element);
    this.array.sort((a, b) => a - b);
  }
  remove(index) {
    if (index < this.array.length) {
      this.array.splice(index, 1);
      this.array.sort((a, b) => a - b);
    } else {
      console.log(`Error invalid index`);
      return;
    }
  }
  get(index) {
    if (index < this.array.length) {
      let value = this.array[index];
      return value;
    } else {
      console.log(`Error invalid index`);
      return;
    }
  }
  size = this.array.length;
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
