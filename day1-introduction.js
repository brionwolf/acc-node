// --------------------------------------------------------------------------------------
// Day 1 - Introduction - This is Node.js
// --------------------------------------------------------------------------------------

	// Introductions, discussing route of the course
	// Looking to be proficient enough to make my own web app with out or with minimal assistance.
	// Want to feel comfortable with the syntax of the language.
	// Understand the basis in object oriented coding, as well as it's ability as a backend language, but want to know the ins and outs.

// --------------------------------------------------------------------------------------
// LETS MAKE A SERVER!
// --------------------------------------------------------------------------------------

var http = require('http'); // Require is a function in node.js. the second 'http' is a parameter, this is all set to a javaScript variable, http.

http.createServer(function (request, response) {
	console.log('request');
	response.writeHead(200, {'Content-Type': 'text/plain'}); // response.writeHead(statusCode[, statusMessage][, headers]) - writeHead is a function that Sends a response header to the request, 200 is http code for OK. 
	response.write('Hello World'); // writes given text when when requesting the specific server.
	response.end(' ... End of line'); // the 'end' function MUST be added to the end of ant createServer.
}).listen(8124); // Sets the port number used for the server.

console.log('Server running at http://127.0.0.1:8124/');  // Confirmation displayed in the command line after running the server.

// --------------------------------------------------------------------------------------
// 
// --------------------------------------------------------------------------------------