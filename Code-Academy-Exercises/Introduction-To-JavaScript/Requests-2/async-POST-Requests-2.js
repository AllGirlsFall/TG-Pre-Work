const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    })
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}


/* An arrow syntax function is declared with the async keyword and saved to
the getData variable. This will ensure that the function returns a promise. In
the code block a try statement is added as well as a catch statement in case
something goes wrong. The catch statement has error as its only argument. An
error is console logged in the catch statement block. In the try statement
a fetch function is declared with the await keyword and saved to a variable
named response. It has 2 arguments: a URL and an object with two properties which are
method and body. The method property has a value of POST and the body property
has a value which turns the json object to a json string. After the arguments
are defined, a conditional statement checks the ok property of the reponse
object. If that evaluates to truthy, we await the resolution of calling the
json method on reponse. The returned response is saved to a variable and the
jsonResponse is returned. Then a new error message is thrown if the condition
checked does not return truthy. */
