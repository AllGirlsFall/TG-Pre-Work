// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

/* The boilerplate for a GET request is used in order to use the Datamuse
API. Below the url is a const set for the query parameters and it narrows
the search for words that rhyme. We also set a wordQuery const and have its
value equal inputField.value which grabs what's in the inputField and assigns
it to that variable. The endpoint variable stores the value of the entire URL and
query string. We then continue with defining the responseType to 'JSON', assigning
the anonymous function with arrow syntax function to the event handler (onreadystatechange)
and calling the open and send methods on the object. /*
