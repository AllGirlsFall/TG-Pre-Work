import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + meetsStaffReqs(element['availableStaff'], flightReqs['requiredStaff']) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element) {
   console.log(element['name'] + ' meets speed range requirements:' + meetsSpeedRangeReqs(element['maxSpeed'], element['minSpeed'], flightReqs['requiredSpeedRange']));
  });
}

displaySpeedRangeStatus();

/* We can import aliased variables by using the new variable names (aliases) in
our import statement. We can also import a variable and give it an alias as we
import it using the as keyword. Yet another way of importing aliases is to
import the entire module as an alias using the as keyword. */
