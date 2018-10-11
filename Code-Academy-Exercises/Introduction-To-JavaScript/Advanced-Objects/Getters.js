const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}.`
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);

/* A getter method is a type of method that can perform an action on the data
while getting a property. It makes the functioniality of code easier for others
to understand. When naming getter methods, it's important not to have the same
name as another property as it could create am infinite stack error when the
method is called. */
