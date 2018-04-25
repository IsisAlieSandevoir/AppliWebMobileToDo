/**
 * Controller de la toDo list 
 * il permet de gérer le contenu dynamique 
 * de la partie html de la todo
 * pour quelques aspects on peut faire appel 
 * a un service dans le but de réutiliser
 */
//var todoApp = angular.module('todoApp', []);

myApp.controller('ToDoCtrl', ['$scope', '$http', 'todoService', function($scope, $http, todoService) {
    $scope.taskSet = [];

    $scope.addTask = function() {
        if($scope.taskName) {
            todoService.addTask($scope.taskName, function(resp) {
                if(resp) {
                    $scope.refreshTaskSet();
                }
            });
            $scope.taskName = '';
        }
    };

    $scope.refreshTaskSet = function() {
        todoService.getTaskSet(function(taskSet) {
            $scope.taskSet = taskSet;
        });
    };

    $scope.delTask = function(task){
        if(task._id){
            todoService.delTask(task._id, function(resp){
                if(resp) {
                    $scope.refreshTaskSet();
                }
            });
            $scope.refreshTaskSet();
        }
    };

    $scope.saveTask = function(task) {
        
        if(task._id) {
            todoService.saveTask(task._id, task.done, function(resp){
                if(resp) {
                    $scope.refreshTaskSet();
                }
            });
            $scope.refreshTaskSet();
        }
    }
    $scope.refreshTaskSet();
}])