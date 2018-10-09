var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';

var callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' +
    stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

/* Global scope means the variables are accessible to any part of the program
including in a block of code. These variables are created outside blocks of code
and are called global variables. */
