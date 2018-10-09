const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars); // logs 'Sirius'

/* Scope Pollution is what happens when too many global variables are declared or
when variables are reused across different scopes. When a variable is declared
globally it is placed in the global namespace and remains there until the program
finishes running. This can cause global variables to build up which causes scope
pollution. It is better to declare local variables inside the block scope in order
to prevent this cluttering in the program. */
