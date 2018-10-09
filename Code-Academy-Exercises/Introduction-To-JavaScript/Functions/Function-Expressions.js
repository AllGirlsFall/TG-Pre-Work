const plantNeedsWater = function(day) {
  if(day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}

plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

/* Function expressions are another way to define a function. A variable is used
to store the function and reference it andthe function name is omitted. Function
expressions are not hoisted and, therefor, are not available prior to being
declared. You can call a function expression by calling the variable name that
it's stored in along with parenthesis and any arguments that are passed into it. */
