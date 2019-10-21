class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.i = 0;
  }
  eat() {
    this.i++;
    if (this.i === 3) this.hungry = false;
  }
}

module.exports = Dragon;
