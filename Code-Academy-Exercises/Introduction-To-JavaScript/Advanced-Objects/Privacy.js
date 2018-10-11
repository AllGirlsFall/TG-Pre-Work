const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();

/* Privacy is the idea that only certain properties in an object should be
mutable or able to be updated/changed. Naming conventions are followed to
tell other developers that the property's value should not be changed. One such
convention is using and underscore before the property name. You can cause
unwanted side effects by changing these properties. */
