fetch('https://api-to-call.com/endpoint').then(response => {if(response.ok){
  return response.json()
}
  throw new Error('Request failed!');                                                         }, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
})

/* Reconstruction of boilerplate for a fetch GET request. The fetch function is
called and the path to the API is set as an argument. We then append the fetch
function with a .then function which returns a promise which has two arguments:
a callback function for the success and a callback function for the failure of
the request. The then function will only run after the fetch function has
resolved. */
