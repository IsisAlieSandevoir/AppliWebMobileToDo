var path = require('path');
var express = require('express');

//needed forsearch method
//used to parse the request in param to get the param
var bodyParser = require('body-parser');

var app = express();
var port = 8090;

var counter = 0;
//init parser with express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//authorize acces to public directory to server, html, css et js
app.use(express.static(path.join(__dirname,'public')));

app.post('/getCounter', function(req,res){
    var obj = {
        success: true,
        counter : counter
    };
    res.send(obj);
});

app.post('/addCounter',function(req,res)
{
    counter++;
    var obj = {
        success: true,
        counter : counter
    };
    res.send(obj);
});
console.log('serveur démarré port:'+port);
app.listen(port);