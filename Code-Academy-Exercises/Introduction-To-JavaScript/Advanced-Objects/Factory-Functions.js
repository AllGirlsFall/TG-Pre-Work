const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
    console.log('Beep Boop');
  }
  }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep();

/* Factory functions return objects and can be reused to make multiple instances
of that object.  They take parameters and then set them as the properties of the
objects in order to customize that object. The factory function can be called
using the necessary arguments and set to a new variable in order to represent
something more specific. */
