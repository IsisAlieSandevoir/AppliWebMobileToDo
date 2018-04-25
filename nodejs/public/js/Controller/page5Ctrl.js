myApp.controller('page5Ctrl',
    ['$scope', '$http', function ($scope,
        $http) {
        $scope.loadCounter = function () {
            $http.post('/getCounter')
                .then(function (dt) {
                    console.log(dt);
                    $scope.counter = dt.data.counter;
                });
        };

        $scope.addCounter = function () {
            $http.post('/addCounter')
                .then(function (data) {
                    console.log(data);
                    $scope.counter = data.data.counter;
                });

    };

    }]);