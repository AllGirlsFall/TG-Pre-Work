class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

/* An instance is an object that contains property names and methods of a class
but has unique property values. The new keyword is used to create a new instance
along with the class name and the arguments to be used as the property values.
It is saved as the value of a new variable. */
