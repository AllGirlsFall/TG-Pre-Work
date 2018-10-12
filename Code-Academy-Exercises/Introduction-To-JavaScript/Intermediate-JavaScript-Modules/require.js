const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

/* In order to import the module that we created we must use the require()
function. A new variable is set with const and has the require() function as its
value. The filepath to the exported module is used as its parameter. Another
function is declared which uses the module's properties.  */
