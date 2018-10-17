// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint);
    if(response.ok){
      const jsonResponse = await response.json()
      renderResponse(jsonResponse);
    }
  } catch(error) {console.log(error)}
};
// Code goes here


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

/* An arrow function called getSuggestions is created using the async keyword. The
input value is saved to the word query variable in order to save the words that are
put into the input field. The endpoint variable is defined after that with a
concatinated string and is the url where the service can be accessed by the
client application plus the queryParams and wordQuery. Then the try/catch statement
is made which contains both the fetch function that checks the response and
catches the error if the response does not evaluate to truthy. The json response
is rendered if truthy otherwise the error response is given. */
