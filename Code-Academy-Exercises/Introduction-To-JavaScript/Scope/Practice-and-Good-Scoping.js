const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

/* Variables should be tightly scoped and, when possible, declared inside blocks
of code. There are several advantages to this : code is easier to read and
understand because it is organized into those blocks, it is easier to maintain
your code because it is modular, it will save memory because it will be wiped from
memory once the function is finished running. */
