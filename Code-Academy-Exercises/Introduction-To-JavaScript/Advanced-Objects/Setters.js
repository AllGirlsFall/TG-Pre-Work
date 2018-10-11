const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  } e
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);

/* Another method that performs actions on a property on an object is the setter 
method . This method reassigns existing values of a property in an object. We do
not have to use a parenthesis when calling a setter method. */
