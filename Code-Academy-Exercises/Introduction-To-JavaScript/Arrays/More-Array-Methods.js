const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();



groceryList.unshift('popcorn');


console.log(groceryList.slice(1, 4));


const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

/* There are many methods that can be used on arrays. Both pop and push are
examples of methods that change the array (mutative methods), however, there are
also methods which don't change the original array called non-mutating array
methods. Some of these methods are: slice(), unshift(), shift(), concat(), join().
You can reference the MDN site to see the entire list of methods available for
arrays. */
