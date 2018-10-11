class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

/* A new subclass can be created by extending the superclass. There are two
new keywords here: extend and super. The extend keyword makes the methods of the
superclass available to the subclass and the super keyword calls the constructor
of the parent class and passes any arguments of the subclass over to the constructor
of the superclass.The super method must always be called before you can use the
this keyword in order to avoid an error. When the superclass runs it sets those
arguments as properties for the new instance. When there are new properties that
are unique to the newinstance (ie: certifications) they are set in the subclass's
constructor.  */
