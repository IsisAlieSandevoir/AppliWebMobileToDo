myApp.factory('ComputerService', function () {
    var serv = {};
    serv.addNumber = function(a, b) {
        return parseInt(a) + parseInt(b);
    }
    return serv;
});