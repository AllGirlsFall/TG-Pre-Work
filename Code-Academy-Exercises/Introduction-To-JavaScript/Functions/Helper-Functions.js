function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows,columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5,4);

console.log(totalCost);

/* Helper functions are functions that are called within another function; their
return values are used by that function and make it easier to debug and read as
each function is performing its own task. Helper functions break down large tasks
into smaller bits of logic and tasks. */
