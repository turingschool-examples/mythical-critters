class Dragon {
  constructor(name, rider, color, hungry) {
    this.name = name;
    this.rider = rider;
    this.color = color;
  if (hungry === undefined) {
    this.hungry = true;
  } else {
    this.hungry = hungry;
  }
  this.eatCount = 0;
  }
  eat() {
    this.eatCount ++;
    if (this.eatCount >= 3) {
      return this.hungry = false;
    }

    }
  }




module.exports = Dragon;
