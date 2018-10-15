const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

xhr.open('GET', url);
xhr.send();

/* This is a reconstruction of an XHR GET request. A new object is created using
the new keyword and name xhr, which is standard naming for a new GET request.
then a url is specified of the API we wish to call and saved as a string
to a const variable. The xhr responseType type is set to 'JSON' which stands for
JavaScript Object Notation. This is how the response will be formatted. Next we
create the onreadystatechange and set it equal to an anoymoous arrow syntax
function. We then write a conditional statement which checks to see if the
request has finished and return the json response if it evaluates to true. We then
call an open method on the xhr object and pass GET and url as the arugemnts.
After that, the send method is called on the xhr object.
