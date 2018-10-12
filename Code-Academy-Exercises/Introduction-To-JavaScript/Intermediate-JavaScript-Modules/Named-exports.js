

let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants']
 }
];

let flightRequirements = {
  requiredStaff: 4

};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if(availableStaff.length >= requiredStaff){
    return true;
  } else {
    return false;
  }
}

export {availableAirplanes, flightRequirements, meetsStaffRequirements};

/* By using the named exports we can export data by using variables. This was
also introduced in ES6 as another way to export. */
