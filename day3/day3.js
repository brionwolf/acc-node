// ----------------------------------------------------------------------
// Day 3 - Jumping into Node.js.
// ----------------------------------------------------------------------

'use strict';

const finalhandler = require('finalhandler'), 
	http = require('http'),
	serveStatic = require('serve-static'),
	serve = serveStatic('public/', {'index': ['index.html']});

var server = http.createServer(function(request,response){
	let done = finalhandler(request,response) // Defines file types to be served to the browser without having to individually define them.
	serve(request,response,done) // Serves the file type defined in finalhandler.
});

server.listen(1337);
console.log('server running on port %s',1337);


// ----------------------------------------------------------------------
// To create the package.json file, which handles any extra node modules.
// ----------------------------------------------------------------------

/*

Maxs-MBPr-as-of-2015-8:day3 brionwolf$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.x

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (day3) 
version: (1.0.0) 
description: 
entry point: (day3.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/brionwolf/Dropbox/CCNY/acc-node/day3/package.json:

{
  "name": "day3",
  "version": "1.0.0",
  "description": "",
  "main": "day3.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) yes
Maxs-MBPr-as-of-2015-8:day3 brionwolf$ 

*/

// ----------------------------------------------------------------------
// how to install nodejs packages locally.
// ----------------------------------------------------------------------

/*

npm install --save [package-name] [package-name]
Make sure the package name is exactly as it appears on npmjs.org.

*/

// ----------------------------------------------------------------------
// How to edit the json file, to run a number of commands on one commend.
// ----------------------------------------------------------------------

// with this json file, to setup the server, less, and babel updates, I only have to run: npm run build, while cd in the root of the application.

/*

{
  "name": "day3",
  "version": "1.0.0",
  "description": "Server Application",
  "main": "day3.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start-server": "node day3.js", // Start the node.js app
    "babel": "babel public/src/es6/main.js -w -o public/build/js/main.js", // -w = watch, -o = output.
    "less": "less-watch-compiler", // Start less watch compiler.
    "build": "npm run start-server & npm run babel & npm run less" 
  },
  "author": "Max escher",
  "license": "ISC",
  "dependencies": {
    "babel-preset-es2015": "^6.0.15",
    "finalhandler": "^0.4.0",
    "serve-static": "^1.10.0"
  }
}

*/