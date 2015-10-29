// --------------------------------------------------------------------------------------
// Day 2 - Lets get down to business
// --------------------------------------------------------------------------------------

// Review from Yesturday.

/*

var http = require('http');

http.createServer(function (req,res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('<h1>Hello World.</h1> ');
	res.end('<h2>End of line.</h2>');
}).listen(1337);

console.log("Server Created and running at http://127.0.0.1:1337");

*/

// --------------------------------------------------------------------------------------
// How does node access external files.
// --------------------------------------------------------------------------------------


/*

var http = require('http');
	fs = require('fs'); // fs stands for file system allows access to files and folders within a website/app, see documentation at nodejs.org.

http.createServer(function(req,res){
	fs.readFile('day2-index.html', function(err,html){ 
		if(err) throw err; // If there is an error, tell me about it. (usually every node module has an error parameter, as a catchall in case something goes wrong).
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(html); // Change to reference getting any available HTML file.
	});
}).listen(1337);

console.log("Server Created and running at http://127.0.0.1:1337");

*/

// --------------------------------------------------------------------------------------
// How does node access parts of the url.
// --------------------------------------------------------------------------------------


/*

var http = require('http'); // requiring the http node.js module.
	url = require('url'); // requiring the url node.js module.

http.createServer(function(request,response){
	var params = url.parse(request.url, true).query; //parse is a function in url. function parse has a number of parameters. '.query;' 
	for(var param in params) { // for( _____ in _______) param is a local variable, 
		if(params.hasOwnProperty(param)){
			console.log(params[param]);
		}
	}
	response.end();
}).listen(1337);

console.log("Server Created and running at http://127.0.0.1:1337");

*/

// --------------------------------------------------------------------------------------
// Rename a file in a node.js directory
// --------------------------------------------------------------------------------------

/*

var fs = require('fs');
	path = 'day2-require.txt'
	
fs.stat(path, function(error, stats){
	console.log(stats);
	if (error) throw error;

	fs.rename('day2-require.txt', 'day2-require-renamed.txt', function(error){
		if (error) throw error;
		console.log('file renamed');
	})
});

*/

// --------------------------------------------------------------------------------------
// Create/replace a file in a node.js directory
// --------------------------------------------------------------------------------------

/* 
var fs = require('fs');

fs.writeFile('day2-data.txt', 'Hello World, End of line.', function(error){ // Creates a file and writes data to it, replacing the file if it already exists. data can be a string or a buffer.
	if(error) throw error;
	console.log('File Created');
});
*/

// --------------------------------------------------------------------------------------
// Accessing external website URLs.
// --------------------------------------------------------------------------------------

/*

var dns = require('dns');

dns.lookup('www.maxescher.com', function(error, address, family){
	if (error) throw error // IF there is an error, STOP!!!.
	console.log('address %s', address); // %s adds what ever is after it (after comma) to the end of the string.
	console.log('family %s', family);
});

*/

// --------------------------------------------------------------------------------------
// npm
// --------------------------------------------------------------------------------------


