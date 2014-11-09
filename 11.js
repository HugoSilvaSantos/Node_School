/*
HTTP FILE SERVER
Servidor para servir um ficheiro
*
1-Deve de escutar a porta definida num argumento da linha de comandos
*
2-Localizacao do ficheiro a servidor.
You must use the fs.createReadStream() method to stream the file contents to the response.
*
*No browser:
127.0.0.1:porta
*/

var http = require('http') // http core module
var fs = require('fs') // filesystem operations

var filepath =process.argv[3]

var server = http.createServer(function (req, res) { // criacao do servidor TCP, req e res sao node streams
	var FS = fs.createReadStream(filepath)
	FS.pipe(res)
})

server.listen(process.argv[2])