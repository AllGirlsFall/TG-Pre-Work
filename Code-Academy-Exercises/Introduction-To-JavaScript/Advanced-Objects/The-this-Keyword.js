const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

/* A method created in an oject does not have the other properties of the object
in its scope and, therefor, does not have access to them. By using the this
keyword we can access those other properties. The this keyword is referencing
he calling object, and calling on the oject itself(in the example above, robot)
which gives us access to all of its properties. */
