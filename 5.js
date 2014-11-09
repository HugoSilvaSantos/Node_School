/*
Fazer o print de uma lista de ficheiros numa directoria, filtrando por extensao
Inputs: path to dir, extensao do ficheiro
1 ficheiro por linha. Utilizar asynchronous I/O
*
The fs.readdir() method takes a pathname as its first argument and a callback as its second
*
Assinatura da callback:
function callback (err, list) { ... }
list: array de strings com nomes de ficheiros
*
Utilizar modulo path
*/


var fs = require('fs') // filesystem operations
var path = require('path') // handling and transforming file paths

function handler(err, list){ // callback; list: array de strings com nomes de ficheiros

	for (var i in list) {

		if (path.extname(list[i])==("."+process.argv[3])) {
			/*
			path.extname; devolve a extensao do nome do ficheiro, ou seja ate ao '.' da path da extensao
			a funcao extname retorna com o ponto
			se a extensao passada na linha de comandos (com ponto) for igual ha guardada no array list; e mostrada 
			*/
			console.log(list[i])			
		}
		
	}

}

fs.readdir(process.argv[2], handler) // para ler uma directoria