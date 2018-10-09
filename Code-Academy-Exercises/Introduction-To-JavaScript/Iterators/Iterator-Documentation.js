const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));

/* A complete list of iterator methods for arrays is available on MDN Array
Iteration methods page. Each contains a short definition, correct syntax, a
list of parameters that the method accepts, the return value of the function,
an extended and more detailed description and examples of the method's use.
This lesson has you read about the some() and every() methods. */
