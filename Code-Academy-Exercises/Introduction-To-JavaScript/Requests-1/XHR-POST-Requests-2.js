const xhr = new XMLHttpRequest;
const url = "https://api-to-call.com/endpoint";

const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';

xhr.onreadystatechange = () => {
if(xhr.readyState === XMLHttpRequest.DONE){
return xhr.response;
}
}

xhr.open('POST', url);
xhr.send(data);

/* Recreated boilerplate for a POST request.  A new XMLHttpRequest object is
created which is used to interact with servers. The URL that the request
is being sent to is specified. We then convert the JSON data to a string and
save it to the data variable. By converting the data to a string it can then be
sent to the server. Like a GET request, the response type is set to JSON. We
then set the event handler to an anonymous arrow syntax function which contains
a conditional statement that checks if readystate is done. If the condition
evaluates to true the xhr response is returned. Below that code the open
and send methods are called on the xhr object. The open method creates a new
request and passes the type of request being made along with the URL (where the
request is being made to) as arguments and the send method sends that request. */
