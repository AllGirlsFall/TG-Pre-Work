const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

/* The findIndex method returns the index of the first element in an array
that is true and doesn't check the remaining values. If it doesn't find a value
that is true (matches the condition) it returns -1. */
