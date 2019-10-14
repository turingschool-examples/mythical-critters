class Hobbit {
  constructor(name, disposition, age) {
    this.name = name;
    this.age = 0;
    this.isShort = true;
    this.old = false;
    if (name === 'Frodo') {
      this.hasRing = true;
    } else {
      this.hasRing = false;
    }
    if (disposition === undefined) {
      this.disposition = 'homebody';
    } else {
      this.disposition = disposition;
    }
}
  celebrateBirthday() {
    var birthday = this.age ++;
    if (birthday != 32) {
      this.adult = false;
    } else {
      this.adult = true;
    }
    if (birthday === 100) {
      this.old = true;
    } else {
      this.old = false;
    }
    }
  }

module.exports = Hobbit;
