myApp.controller('page3Ctrl', ['$scope', 'ComputerService', function ($scope, ComputerService) {
    $scope.comp = function() {
        $scope.resPage3 = ComputerService.addNumber($scope.val.paramA, $scope.val.paramB);
    };
}]);