myApp.component('hello', {
    template: '<h3 ng-bind = "$root.counter" ng-init = "$root.counter = 0"></h3>' + '<button ng-click="$ctrl.addToCounter()">Compteur</button>',
    //root permet de garder la valeur != de scope qui perd l'info (rootscope = global)
    //$root. -> on y accede n'impote ou grace à ca
    controller : function($rootScope) {
        this.addToCounter = function () {
            if(!$rootScope.counter) {
                $rootScope.counter = 0; }
            $rootScope.counter++;
        }
    }
});