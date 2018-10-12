// ES6 version

var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat},
and a sauce made with ${sauce}.`;

// new ES5 version

"use strict";

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", "
+ meat + ", and a sauce made with " + sauce + ".";

/* 'npm run build' is typed from the command line in order to transpile the code.
The new ES5 code is written in a main.js file that's found in lib folder. */
