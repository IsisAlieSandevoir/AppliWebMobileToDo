/**
 * on passe par un service pour l'addition de 2 nombres pour pouvoir 
 * l'utiliser partout (et réutiliser)
 * et pour découper un maximum pour cibler les erreurs
 */

myApp.factory('ComputerService', function () {
    var serv = {};
    serv.addNumber = function(a, b) {
        return parseInt(a) + parseInt(b);
    }
    return serv;
});