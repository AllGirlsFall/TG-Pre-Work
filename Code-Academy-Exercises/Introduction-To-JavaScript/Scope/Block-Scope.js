var logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves(); // output is 'Moonlight'
console.log(lightWaves); // logs reference error

/* Block scope is when the variable is declared inside a block of code and so it
is only accessible to that function and nowhere else in the program. These variables
are known as local variables. */
