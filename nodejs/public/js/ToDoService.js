myApp.factory('todoService', ['$http', function($http){
    var serv = {};

    serv.addTask = function(name, cb){
        var req = {
            taskName: name
        };

        $http.post('/addTask', req).then(function(resp) {
            //console.log(resp);
            cb(resp.data.success);
            //$scope.counter = dt.data.counter;
        });
    };

    serv.getTaskSet = function(cb) {
        $http.post('/getTaskSet').then(function(resp){
            console.log(resp);
            cb(resp.data.taskSet);
        });
    };

    serv.delTask = function(id,cb) {
        var req = {
            _id: id
        };

        $http.post('/deleteTask', req).then(function(resp) {
            //console.log(resp);
            cb(resp.data.success);
            //$scope.counter = dt.data.counter;
        });
    };

    serv.saveTask = function(_i, don, cb) {
        var req = {
            _id:_i,
            done: don
        };
        $http.post('/saveTask', req).then(function(resp){
            cb(resp.data.success);
        });
    }
    return serv;
}]);