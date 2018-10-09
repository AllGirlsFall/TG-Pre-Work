let wordCount = 3;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

/* Non-boolean data types like strings and numbers evaluate using truthy
and falsy when checked inside a condition. You can check if a variable simply
exists and if it has been assigned a value using. In the example above the variable
wordCount has a value of 3 and would evaluate to truthy because wordCount has been
assigned a value. In the second example above the variable favoritePhrase has
an empty string and would evaluate to falsy. A list of values that return
falsy are: 0, empty strings (" ", ' '), null, undefined and NaN (not a number)*/
