// code in 2-airplane.js

let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

//code in 2-missionControl

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());

// Any collection of data can be wrapped in an object and exported using module.exports
