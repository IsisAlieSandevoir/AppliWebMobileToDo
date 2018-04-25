//fichier qui sert a attaquer la bd por tout -> code allegé des appels dessus (update etc)

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
    taskName: String, 
    done: Boolean
});

//init model
var TaskModel = mongoose.model('tasks', TaskSchema);

//create a task
/*var taskSamp = new TaskModel({
    _id: uuidv4(),
    name: 'Promener le chien',
    done: false
});*/

module.exports = {
    getTaskSet: function(cb) {
        TaskModel.find(null, function(err, taskSet){
            cb(taskSet);
        });
    },

    addTask: function(task, cb) {
        var taskToSave = new TaskModel({
            _id: task._id,
            taskName: task.taskName,
            done: task.done
        });

        taskToSave.save(function(err){
            if(err) {
                throw err;
            }else{
                cb();
            }
        });
    },

    deleteTask: function(taskid, cb) {
        TaskModel.remove({ _id: taskid}, function(err){
            if(err) {
                throw err;
            }else{
                cb();
            }
        });
    },

    saveTask: function(taskid, taskDone, cb) {
        console.log(taskDone);
        TaskModel.findOneAndUpdate({_id: taskid}, {done: taskDone}, function(err){
            if(err) {
                throw err;
            }else{
                cb();
            }
        });
    }
};