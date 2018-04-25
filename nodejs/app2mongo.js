//declaration
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//for generate guid
var uuidv4 = require('uuid/v4');

//create connection
mongoose.connect('mongodb://localhost/todo', function(err) {
    if(err) {throw err;} else {
        console.log('mongo connected');
    }
});

//declare schema TASK
var TaskSchema = Schema({
    _id: String,
    name: String, 
    done: Boolean
});

//init model
var TaskModel = mongoose.model('tasks', TaskSchema);

//Get all tasks
TaskModel.find(null, function(err, tasks){
    if(err) {throw err;}
    //comms est un tabelau de hash
    console.log(tasks);
});