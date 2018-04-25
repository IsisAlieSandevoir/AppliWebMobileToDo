var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoCtrl', ['$scope', function($scope){
    //storage
    var getStorageTask = localStorage.getItem("taskSet");
    //init array of task
    $scope.taskSet = [
        {
            taskName:'Faire le ménage',
            done: false
        },
        {
            taskName:'Ranger le courrier',
            done: true
        }
    ];
    //method to add task
    $scope.addTask = function() {
        if($scope.taskName !== ''){
            //add task to array
            $scope.taskSet.push({
                taskName:$scope.taskName,
                done: false
            });
            //clear taskname value
            $scope.taskName= '';
        }
    }
}]);