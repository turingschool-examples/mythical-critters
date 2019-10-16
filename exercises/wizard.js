class Wizard {
  constructor(wizard) {
    this.name = wizard.name;
    this.isRested = true;
    this.spellsCast = 0;
    if (wizard.bearded === false) {
      this.bearded = false;
    } else {
    this.bearded = true;
  }
}
  incantation(spell) {
    // switch(spell) {
    //   case 'chown lumos':
    //   return 'CHOWN LUMOS';
    //   break;
    return spell.toUpperCase();

  }

  cast() {
    this.spellsCast++; // every time cast() is run, this.spellsCast increments
    if (this.spellsCast >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    } else {
    return 'MAGIC MISSILE';
  }
}
}


module.exports = Wizard;



//
// var wizardName = {
//   name: "Jhun",
// }
