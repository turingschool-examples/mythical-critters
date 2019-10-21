class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.heinousActsCommitted = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    this.heinousActsCommitted++;
    if (this.heinousActsCommitted === 3) this.cursed = true;
  }
  robShip() {
    this.booty += 100;
    return 'YAARRR!'
  }
}

module.exports = Pirate;
