const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce ((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

/* The reduce method reduces an array to a single element while executing a
a function for each value of the array. */ 
