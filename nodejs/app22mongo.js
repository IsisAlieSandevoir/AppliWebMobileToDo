var dataTaskLayer = require('./repository/dataTaskLayer.js');

dataTaskLayer.getTaskSet(function(taskSet) {
    for(var i=0; i < taskSet.length; i++) {
        console.log(taskSet[i].name);
    }
});