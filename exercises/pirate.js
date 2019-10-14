class Pirate {
  constructor(name, job) {
    if (name === undefined) {
      this.name = "Pirate";
    } else {
      this.name = name;
    }
    if (job === undefined) {
      this.job = 'Scallywag';
    } else {
      this.job = job;
    }
    this.cursed = false;
    this.heinousActsCount = 0
    this.booty = 0;
  }
  commitHeinousAct() {
    this.heinousActsCount ++;
    if (this.heinousActsCount >= 3) {
      return this.cursed = true;
    }
  }
  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }
}


module.exports = Pirate;
