let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship['numEngines'] = 9;
delete spaceship['Secret Mission'];

/* Objects are mutable which means they can be changed after being created. A
property can be added, updated and deleted in objects using both dot and bracket
notation. */
