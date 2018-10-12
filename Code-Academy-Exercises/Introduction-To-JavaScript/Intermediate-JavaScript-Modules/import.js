import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
});
}

displayFuelCapacity();

/* The import keyword can also be used for importing objects. We begin the statement
with import, then specify the name of the variable that we want to store the default
import in and then specify where to load the import from.*/
