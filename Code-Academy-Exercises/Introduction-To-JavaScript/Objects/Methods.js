let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
    console.log('We no longer wish to conquer your planet. It is full of dogs, which we do not care for.')
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

alienShip.retreat();
alienShip.takeOff();

/* Data stored in an object as a funciton is called a method. They are created in
object literal with regular key value pairs separated by commas. The key is the
method's name and the value is an anoymous expression. In ES6 the colon and
function keyword can be omitted. Methods are invoked by appending the objectss
name with a dot operator and then the method name followed by parenthesis. */
