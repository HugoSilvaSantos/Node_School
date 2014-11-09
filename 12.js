/*
Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.
Your server should listen on the port provided by the first argument to your program.
There are a number of different packages in npm that you can use to "transform" stream data as it's passing through. For this exercise the through2-map package offers the simplest API.
*
Para testar:
1-node 12.js 8000
*
2-curl http://127.0.0.1:8000 -d "hello world"
*/

var http = require('http') // http core module
var fs = require('fs') // filesystem operations
var map = require('through2-map') // create an Array.prototype.map analog for streams

var server = http.createServer(function (req, res) { // criar o servidor TCP
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase() // transforma tudo em maiusculas
})).pipe(res) // response
})

server.listen(process.argv[2])