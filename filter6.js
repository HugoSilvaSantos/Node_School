/*
Modulo para o 6.js
These four things is the contract that your module must follow.

  * Export a single function that takes exactly the arguments described.
  * Call the callback exactly once with an error or some data as described.
  * Don't change anything else, like global variables or stdout.
  * Handle all the errors that may occur and pass them to the callback.

Este modulo faz a filtragem toda
*/
module.exports = function(dir, ext, callback){ //para exportar; argumentos a passar quando chamamos a funcao no 6.js

var fs = require('fs')
var path = require('path')
var result = []

function handler(err, list){

	if (err) { //verificacao de erro
		return callback(err)
	}

	for (var i in list) {

		if (path.extname(list[i])==("."+ext)) { //a funcao extname retorna com o ponto
			result.push (list[i]) // acumula no 'result' os elementos com a mm extensao
		}		
	}

	callback(null, result) // passagem para a callback
}

fs.readdir(dir, handler)

}
