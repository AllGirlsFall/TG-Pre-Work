const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
function printFruits(element) {
  console.log('I want to eat a ' + element);
}

fruits.forEach(printFruits);

/* The forEach method executes the same code fore every element of an array.
The ways to use this method are as arrow function syntax and
defining a function beforehand to be used as a callback function. */
