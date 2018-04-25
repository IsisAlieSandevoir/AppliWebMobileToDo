var path = require('path');
var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var port = 8090;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,'public')));

app.post('/getData', function(req,res){
    var obj = {
        success: true,
        userSet: [
            {
                firstName: 'Maurice',
                lastName: 'Topalof'
            },
            {
                firstName: 'Steeven',
                lastName: 'Seagle'
            },
        ]
    }
    res.send(obj);
});
console.log('serveur démarré port:'+port);
app.listen(port);