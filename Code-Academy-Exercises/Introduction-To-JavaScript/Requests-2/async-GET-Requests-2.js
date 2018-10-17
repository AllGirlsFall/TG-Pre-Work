const getData = async () => {
  try {const response = await fetch('https://api-to-call.com/endpoint')
  if (response.ok) {
   const jsonResponse = await response.json();
    return jsonResponse;
  } throw new Error ('Request failed!');

  } catch (error) {console.log(error);}
};

/* Reconstruction of boilerplate code to creat a GET request using the async
and await keywords. An arrow syntax function is created using the async keyword
and saved to a const variable called getData. Inside the block of code a try
statement is created. Inside this block we have the fetch function as well as the
await keyword which allows a program to run while waiting for the promise to
resolve. The await keyword can only be run within an async function. The code in
the try statement will send a request and handle the response using a conditional
statement to check if the ok property of the response is truthy. After the try
statement a catch statement is made to catch the error if the promise resolves to
an error. */
