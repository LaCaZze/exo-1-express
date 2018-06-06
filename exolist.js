var express = require('express');
var server= express();

//pointe vers index seul
server.get('/', function(request, response) {
    response.sendfile('index.html');
   });
//pointe vers la liste data.json
   server.get('/liste', function(request, response) {
    response.sendfile('data.json');
   });


server.listen(3666)