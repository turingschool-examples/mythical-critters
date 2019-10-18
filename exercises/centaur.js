class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
  }
  shoot() {
    return 'Twang!!!';
  }
  run() {
    return 'Clop clop clop clop!!!'
  }
};

module.exports = Centaur;
