var http = require('http');
var port = 8090;
var serveur = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('Hello World');
});
serveur.listen(port);
console.log('server started port : ' + port);