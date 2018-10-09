let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
  	break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

/* Switch statements provide alternative syntax that is easier to read than
an else if statement with many conditions to check. The switch keyword initiates
the statement and then is followed by the value which is being checked. The
case keyword checks if the expression matches the specified value that comes after
it. Following that is the code that is executed if the expression matches the value.
The break keyword tells the computer to exit the block and not execute more code.
Without the break keyword at the end of each case, the program would execute the
code for all matching cases and the default code as well. The default statement
executes if none of the cases evaluate to true. */
