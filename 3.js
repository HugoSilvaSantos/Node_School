/*
Neste programa sera, lido um ficheiro de forma sincrona (synchronous filesystem operation)
Print do numero de newlines (comando similar: cat file | wc -l)
*
process.argv[2] = full path para o ficheiro a ser lido
*/

var fs = require('fs') // filesystem operations

var buf=fs.readFileSync(process.argv[2]) // All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'
									// ficheiro e carregado para o buffer

var str = buf.toString() //conversao do objecto buffer (formato bin) para string

var divide = str.split('\n') //divide string em arrays, terminados em '\n'

console.log(divide.length-1) //efectua a contagem dos arrays, subtrai-se o caracter '\0'