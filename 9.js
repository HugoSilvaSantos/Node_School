/*
JUGGLING ASYNC
Fazer um HTTP GET request a um URL (unix stream)
Colectar toda a informacao do servidor, e escreve 2 linhas na consola
1-Integer com o numero de caracteres, recebidos do servidor
2-COntem a string de caracteres enviada pelo servidor
*
Para 3 URLS
*
E necessario fazer queue dos resultados, para ver quantos URLs retornaram os seus conteudos
Counting callbacks is one of the fundamental ways of managing async in Node. 
Rather than doing it yourself, you may find it more convenient to rely on a third-party library such as [async](http://npm.im/async) or [after](http://npm.im/after). But for this exercise, try and do it without any external helper library.
*/

var http = require('http') // http core module
var bl = require('bl') // Buffer List: collect buffers and access with a standard readable Buffer interface, streamable too

var array_response = []
var counter = 0;

function geturl(url, index){ //funcao para descarregar o conteudo

	http.get(url, function (response) { callback(response, index); })
}

function callback(response,index){ 

	response.setEncoding('utf8'); //funcao callback
	response.pipe(bl(function(err, data){ // conversao de HEX->UTF8
	
		array_response[index] = data.toString();
	}))

	response.on("end", function(){
		counter ++;

		if (counter == 3) {
			for (var i=0; i<array_response.length; i++ ) {
				console.log(array_response[i])
			}
		}
	})
}

geturl(process.argv[2], 0); 
geturl(process.argv[3], 1); 
geturl(process.argv[4], 2);