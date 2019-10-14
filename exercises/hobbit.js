class Hobbit {
  constructor(name, disposition, age) {
    this.name = name;
    this.age = 0;
    if (disposition === undefined) {
      this.disposition = 'homebody';
    } else {
      this.disposition = disposition;
    }
}
  celebrateBirthday() {
    var birthday = this.age ++;
    if (birthday <= 32) {
      this.adult = false;
    } else {
      this.adult = true;
    }
  }
}

module.exports = Hobbit;
