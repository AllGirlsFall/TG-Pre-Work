fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse);
})

/* Reconstruction of boilerplate code for a POST request using fetch function.
When calling the fetch function we're providing an endpoint with the URL in a
string and an object for its two arguments. The remainder of the code follows
the GET request with a fetch function. */
