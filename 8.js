/*
Fazer um HTTP GET request a um URL (unix stream)
Colectar toda a informacao do servidor, e escreve 2 linhas na consola
1-Integer com o numero de caracteres, recebidos do servidor
2-COntem a string de caracteres enviada pelo servidor
*
There are two approaches you can take to this problem: 
*
1) Collect data across multiple "data" events and append the results together prior to printing the output. Use the "end" event to determine when the stream is finished and you can write the output.
*
2) Use a third-party package to abstract the difficulties involved in collecting an entire stream of data. Two different packages provide a useful API for solving this problem (there are likely more!): bl (Buffer List) and concat-stream; take your pick!
*/

var http = require('http') // http core module
var bl = require('bl') // Buffer List: collect buffers and access with a standard readable Buffer interface, streamable too

function callback(response){ //funcao callback
  response.setEncoding('utf8'); // conversao de HEX->UTF8
  response.pipe(bl(function(err, data){ // acumulacao de streams
    console.log(data.toString().length) // numero de caracteres enviados pelo servidor
    console.log(data.toString()) // caracteres do servidor

  }))
}

http.get(process.argv[2], callback)