console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

/* JavaScript is an asynchronous language and has non-blocking properties. In order
to improve runtime JavaScript uses an event loop to handle asynchronous
function calls which makes for a smoother browser experience because users don't
have to wait for a large file to load while using the functionality of the rest
of the site. */
