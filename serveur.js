var express = require('express');
var server= express();

//pointe vers index seul
server.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
   });
//pointe vers la liste data.json
   server.get('/liste', function(request, response) {
    response.sendFile(__dirname + '/data.json');
   });


   server.get('/script.js', function(request, response) {
    response.sendFile(__dirname + '/script.js');
   });

server.listen(3666)