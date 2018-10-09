let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

/* You can use short-hand to evaluate truthy and falsy with logical operators like
the or (||) which checks the condition from left to right. The variable for tool
is evaluated to truthy and therefor 'marker' has been assigned as the value for
the variable writingUtensil. If the variable tool had been left as an
empty string, then writingUtensil would have been assigned the value of 'pen'. */ 
