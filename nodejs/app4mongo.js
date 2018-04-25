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

//Update one task by filter
TaskModel.update({_id: 'f8a86f91-29ad-45d0-9886-8ac6ca2c4b59'},
function(err) {
    if(err) {throw err;}
    console.log('modifié');
});