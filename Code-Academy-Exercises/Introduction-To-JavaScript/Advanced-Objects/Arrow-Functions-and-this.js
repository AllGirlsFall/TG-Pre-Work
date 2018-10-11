const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

/* Using arrow function syntax for a method inside an object will return
'undefined' if you try to use the this keyword in the method. Arrow syntax ties
the method to an already defined this keyword that is not the calling object
but the global object. Using the function arrow syntax with the this keyword
should be avoided. */
