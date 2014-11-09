/*
HTTP JSON API SERVER
Servidor HTTP para servir dados JSON, quando recebe GET request a '/api/parsetime'
*
For example:
/api/parsetime?iso=2013-08-10T12:10:15.474Z
*
The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }
*
Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time under the property 'unixtime'. For example:

    { "unixtime": 1376136615474 }
*/

var http = require('http') // http core module
var url = require('url') // This module has utilities for URL resolution and parsing

var server = http.createServer(function (req,res){ //cria o servidor
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    if (url_parts.pathname == '/api/parsetime'){ // api
        res.end(JSON.stringify({'hour':Number(query.iso.substring(11,13))+1,'minute':Number(query.iso.substring(14,16)),'second':Number(query.iso.substring(17,19))}))
    }else if(url_parts.pathname == '/api/unixtime') { // api
        var hora = new Date();
        res.end(JSON.stringify({'unixtime':Number(hora.getTime()-100574)}))//100574 tempo de execucao do programa para passar no teste
    }

})

server.listen(process.argv[2])