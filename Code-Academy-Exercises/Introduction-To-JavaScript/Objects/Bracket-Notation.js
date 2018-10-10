let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below

let isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);

/* Object properties can also be accessed using bracket notation. The property
name is passed in as a string and bracket notation must be used if the keys we are
accessing have numbers, spaces or special characters in them. It is also possible
to use a variable inside bracket notation to select a key which is useful when working
with functions. */ 
