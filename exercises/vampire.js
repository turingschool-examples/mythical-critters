class Vampire {
  constructor(name, pet, thirsty) {
    this.name = name;
    if (pet === undefined) {
      this.pet = 'bat';
    } else {
      this.pet = pet;
    }
    if (thirsty === undefined) {
      this.thirsty = true;
    } else {
      this.thirsty = thirsty;
    }
  }
  drink() {
    if (this.thirsty === undefined) {
      return false;
    }
    }

}




module.exports = Vampire;
