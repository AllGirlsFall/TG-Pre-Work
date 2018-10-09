function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors); // output is 20

/* In order to pass back information for the function call, a return
statement is used by using the return keyword followed by the value that you
want to be returned. When return is used in a function body, code below it will
not execute as the function stops running once it reaches the return keyword. */
