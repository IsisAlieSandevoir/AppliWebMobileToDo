var path = require('path');
var express = require('express');

var uuidv4 = require('uuid/v4');

//needed for search method
//used to parse the request in param to get the param
var bodyParser = require('body-parser');
var dataTaskLayer = require('./public/repository/dataTaskLayer.js');
var app = express();
var port = 8095;

//init param with express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//authorize access to publicdirectory to server html css js
app.use(express.static(path.join(__dirname, 'public')));

//todo part
app.post('/getTaskSet', function(req, res){
    dataTaskLayer.getTaskSet(function (taskSet){
        var obj = {
            success: true,
            taskSet: taskSet
        };
        res.send(obj);
    });
});

app.post('/addTask', function(req, res){
    //check if taskName not empty
    if(!req.body.taskName){
        res.send(
            {success: false, errorSet: ['TASKNAME_EMPTY']}
        );
    }else{
        //create object
        var task = {
            _id: uuidv4(),
            taskName: req.body.taskName,
            done: false
        };
        dataTaskLayer.addTask(task, function(){
            res.send({success: true});
        });
    }
});

app.post('/deleteTask', function(req, res){
    if(!req.body._id){
        res.send(
            {success: false, errorSet: ['TASKNAME_EMPTY']}
        );
    }else{
        dataTaskLayer.deleteTask(req.body._id, function(){
            res.send({success : true});
        });
    }
});

app.post('/saveTask', function(req, res){
    if(!req.body._id){
        res.send(
            {success: false, errorSet: ['TASKNAME_EMPTY']}
        );
    }else{
        dataTaskLayer.saveTask(req.body._id, req.body.done, function(){
            res.send({success : true});
        });
    }
});

//counter part
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

//Page5 part
app.post('/getData', function(req, res){
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
            }
        ]
    }
    res.send(obj);
});

console.log('serveur demarre port : ' + port);
app.listen(port);

