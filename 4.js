/*
Leitura de ficheiro de forma assincrona (fs.readFile())
Print do numero de newlines (comando similar: cat file | wc -l)
*
process.argv[2] = full path para o ficheiro a ser lido
*
Em vez de utilizar o valor de returno, necessita de colectar 
o valor de uma funcao callback, que e passada como segundo argumento
*
Assinatura da callback:
function callback (err, data) { ...  }
o err permite verificar se existe um erro (null ou string)
podemos dar 'utf8' como segundo argumento, e colocar a callback como 3 argumento
para obter String em vez de buffer
*/

var fs = require('fs') // filesystem operations

function handler(err, buf){ //funcao de callback, err-string ou null, pode levar um if de verificacao

	var str = buf.toString() //conversao  de objectos do buffer para string
	
	var linhas = str.split('\n') //divide string em arrays com varios elementos
	
	var size = linhas.length-1  //efectua a contagem dos arrays
	
	console.log(size)
}

fs.readFile(process.argv[2], handler) //operacao assinctrona, chama o callback
									 //a funcao callback correm quand acabar o readfile
									//deve-se ler a documentacao, de parametros recebidos da readfile