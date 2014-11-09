/*
 TCP Time Server
 O servidor deve escutar coneccoes TCP na porta fornecida como 1 argumento do programa
 Formato:
 YYYY-MM-DD hh:mm"
 *
 1-node 10.js 8000
 *
 2- Com o netcat solicitar a hora
 nc 127.0.0.1 8000
 Testar com o net cat
*/

var net = require('net') // asynchronous network wrapper. It contains methods for creating both servers and clients (called streams)
var dateformat = require('dateformat') // modulo para trabalhar com data e hora

var server = net.createServer(function(socket) { //creacao de um servidor

	var D = new Date();
	socket.end(dateformat(D,"yyyy-mm-dd HH:MM")+'\n')

})

server.listen(process.argv[2])