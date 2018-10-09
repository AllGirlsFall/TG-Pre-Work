let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];

utensils[3] = 'Spoon';
console.log(utensils);


/* Elements  in an array declared with the const keyword are mutable which means
that the contents of the array can be changed but you cannot reassign a new array
 or a different value. However, with an array that is declared with the let
 keyword you can reassign elements and an entirely new array. So the let and const
 keywords operate similar for variables as they do for arrays. */
