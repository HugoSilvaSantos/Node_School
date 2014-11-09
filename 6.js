/*
Fazer o print de uma lista de ficheiros numa directoria, filtrando por extensao
Criar um modulo 
Inputs: path to dir, extensao do ficheiro
1 ficheiro por linha. Utilizar asynchronous I/O
*
O modulo exporta uma unica funcao, que recebe 3 argumentos: the directory name, the filename extension string and a callback function
Assinatura da callback node(err, data)
err=null, data sera lista de ficheiros filtrada, como array
*
If you receive an error, e.g. from your call to  fs.readdir(), the callback must be called with the error, and only the error, as the first argument.
*/

var filter = require('./filter6.js')

filter(process.argv[2], process.argv[3], function (err, data){
	if (err) { //verifica erro
	return console.error(err)
	}

	for(x in data){
		console.log(data[x]) //passou o elemento do array
	}
})

