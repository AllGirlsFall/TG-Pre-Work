function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

/* Default parameters are predetermined values that are used in case an
argument is not passed when calling the function or if the argument is 'undefined'
when called. When an argument is passed it overrrides the default parameter and
is used instead. */
