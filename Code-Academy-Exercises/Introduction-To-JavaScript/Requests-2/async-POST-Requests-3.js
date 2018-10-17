// information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
			method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);




/* The rebrandly API key is set to the value of the the apiKey variable. An
arrow syntax function is created and saved to the variable shortenURL. It uses
the async keyword to return a promise. Inside the code block two const variables
are created : urlToShorten and data. The urlToShorten variable has a value of
inputField.value which saves the value entered into the data field. The data
variable value for data is json.stringify function with an object passed as a
its argument. Next a try statement is made with a variable named response. Its
value is awaiting (using await keyword) to call the fetch function. It has two
arguments of url and an object which has three properties: method with a value of
'POST', body with a value of data and headers with another object as its value.
Next a conditional statement is made to check if the ok property of the response
evaluates to truthy. Inside the conditional's code block a variable with the
value of await response.json() is defined. After that, a the renderRawResponse
function is called with the jsonResponse passed as its argument. renderRawResponse
is then replaced with renderResponse with jsonResponse as its argument in
order to see the string value of the response and not the raw json data. */
