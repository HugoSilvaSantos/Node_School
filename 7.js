/*
Cliente HTTP
*
Fazer um HTTP GET request a um URL (unix stream)
A 'data' recebe o contudo html da pagina
The response object is a Node Stream object
You can treat Node Streams as objects that emit events, the three events that are of most interest are: "data", "error" and "end"
*/

var http = require('http') // http core module

function callback(response){ //assinatura da callback
	response.setEncoding('utf8'); // conversao de HEX->UTF8
	response.on("data", function handler(data){ //response.on escuta um evento, data e emitido quando os dados estao disponiveis
		console.log(data)
	})  
}
http.get(process.argv[2], callback)