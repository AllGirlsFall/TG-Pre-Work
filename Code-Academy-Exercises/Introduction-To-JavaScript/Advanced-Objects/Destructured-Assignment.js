const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot;
functionality.beep();

/* Destructured assignment is used to extract key value pairs of an object. A
new variable is declared as the name of the property (key) whose value you want
to extract and then assigned the object name. Nested properties can also be
extracted using the dot operator. */
