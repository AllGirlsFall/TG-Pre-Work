// Information to reach API
const apiKey = '0ae3a953b0314846900dfe095e5c8b50';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {method:'POST',
              headers:{
  'Content-type': 'application/json',
  'apikey': apiKey },
              body: data
})
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

/* GET request using fetch function with the rebrandly API. Rebrandly API key is
the value of const apiKey. In AJAX function const urlToShorten is given a value
of inputField.value to keep the value of whatever is typed in the input field.
The information to send needs to be prepared by making the JSON data into a
string with JSON.stringify function. It has an argument of an object. Next, the
fetch function is called with the endpoint (url) as an argument along with an
object containing properties such as method, headers and body.*/
