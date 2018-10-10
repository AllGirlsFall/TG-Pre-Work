let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship)

/* When a variable that's assigned to an object is passed as an argument in a
function that parameter intrepreted as pointing to the space in memory holding
the onject. This means that the object property is mutated  by the function
even when assigned to a const variable. This is called passing by reference. */
