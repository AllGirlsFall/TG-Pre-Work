const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

/* Another type of loop is the while loop and it's a bit different than the for
loop: the iterator variable is declared outside of the expression and is
accessible since it's in the global scope, the while keyword is used followed by
the testing condition (stopping condition), in this case when the currentCard
is not a spade. This testing condition is checked before the loop is run and
will execute the code until it evaluates to false. Next comes the block of code
which will perform the Math methods (floor and random)and save that value to
currentCard card in order to give it a numerical value as this value references
the index array of cards. */
