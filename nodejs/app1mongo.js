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

//create a task
var taskSamp = new TaskModel({
    _id: uuidv4(),
    name: 'Promener le chien',
    done: false
});

//save task
taskSamp.save(function(err){
    if(err) {throw err;}
    console.log('task ajoutée');
});