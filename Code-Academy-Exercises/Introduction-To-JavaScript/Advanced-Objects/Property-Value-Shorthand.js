const robotFactory = (model, mobile) =>{
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

/* There is shorthand that can be used (created in ES6) to assign the value
of the properties without having to write out each key value pair. This is called
property value shorthand and is useful if we have many properties in an object.*/
