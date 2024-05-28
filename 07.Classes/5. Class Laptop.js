class Laptop {
  isOn = false;

  constructor(info, quality) {
    this.info = info;
    this.quality = quality;

    this.producer = this.info.producer;
    this.age = this.info.age;
    this.brand = this.info.brand;
  }
  turnOn() {
    if (!this.isOn) {
      this.isOn = true;
      this.quality--;
    }
  }
  turnOff() {
    if (this.isOn) {
      this.isOn = false;
      this.quality--;
    }
  }
  showInfo() {
    let result = JSON.stringify(this.info);
    return result;
  }

  get price() {
    let result = 800 - this.age * 2 + this.quality * 0.5;
    return result;
  }
}
let info = { producer: 'Asus', age: 2, brand: 'Zenbook' };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);
console.log(`-----------------`);
let info1 = { producer: 'Lenovo', age: 1, brand: 'Legion' };
let laptop1 = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
laptop.turnOn();
laptop.turnOff();
console.log(laptop.isOn);
