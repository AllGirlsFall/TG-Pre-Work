const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

/* The Object.keys() method can grab property names of an object (keys) and put
them into a new array by assigning a new variable to the object method and using
the objects name as the argument. The Object.entries() method will also create a
new array that have both the key and values of an object. It also assigned to a
new variable which is assigned to the object method with the object name used as the
argument. The Object.assign() method goes one step further and adds more properties
to the object after retrieving the properties that are already set in the object. */
