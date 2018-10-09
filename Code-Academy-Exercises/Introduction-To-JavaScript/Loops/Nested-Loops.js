let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

/* It can be useful to compare to elements of arrays to each other by writing a
nested loop. This is basically a loop running inside of a loop and for each time the outer loop
runs so does the inner loop. In the example above, the outer loop runs through the
length of bobsFollowers while the inner loop runs through tinasFollowers. Through
the if statement following the loops they are comparing names of followers and
when a match is found it is pushed to a new, empty array called mutualFollowers. */
