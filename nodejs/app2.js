var express = require('express');

var app = express();
var port = 8090;

app.get('/',function(req,res){
    console.log(req);
    res.setHeader('Content-Type','text/plain');
    res.send('Hello World Express ! ');
});

app.post('/getData',function(req,res){
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