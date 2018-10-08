const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos'; /* this throws an error called TypeError: Assignment to 
                  constant variable */

/* The other new keyword to creat a variable is 'const' which is short for
constant. It follows the same syntax of the var and let variable declarations,
however, you must declare a value with this. It can not go undefined. Const can
also not be changed so when declaring variables and dedciding whether to use
let or const, it's good practice to think about if the variable's value will need
to be changed later in the program. If it does, you must use let or var. */
