var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

// THIS IS NODE
// Introductions, discussing route of the course
	// Looking to be proficient enough to make my own web app with out or with minimal assistance.
	// Want to feel comfortable with the syntax of the language.
	// Understand the basis in object oriented coding, as well as it's ability as a backend language, but want to know the ins and outs.

