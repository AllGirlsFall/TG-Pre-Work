// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;

  fetch(endpoint).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

/* This is a GET request using the fetch() function with a query string that
is calling to the wordsmith API. First the path to the API is defined as well as
the starting of the query string which narrows down the search to words that rhyme with
whatever word is typed into the input field. Inside the AJAX function of getSuggestions
we define a variable wordQuery and assign it the value of inputField.value. This
is used to store the value of what is typed in the input. We then add a query string
and assign it the value of a string that are concatinated parameters. The fetch
function is called after that using endpoint as its argument. We then chain
the then function to the fetch function which checks if the response is truthy with
a callback function that returns the json response if it evaluates to truthy. If
it does not, it throws a network error message. */
