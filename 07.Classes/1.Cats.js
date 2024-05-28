class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  meow() {
    console.log(`${this.name}, age ${this.age} says meow`);
  }
}

function helloCat(array) {
  let cats = [];
  for (const arr of array) {
    let arrayCat = arr.split(' ');
    let [name, ageText] = arrayCat;
    let age = Number(ageText);
    let newCat = new Cat(name, age);
    cats.push(newCat);
    // newCat.meow();
  }
  for (const cat of cats) {
    cat.meow();
  }
}
helloCat(['Mellon 2', 'Tom 3']);
helloCat(['Branch 1', 'Poppy 3', 'Goldy 2']);
