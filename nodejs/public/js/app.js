var myApp = angular.module('routeApp', ['ui.router']);

myApp.config(function ($stateProvider) {
    var homeState = {
        name: 'home',
        url: '/home',
        template: '<h3>Page d\'accueil</h3>'
    };

    var page1State = {
        name: 'page1',
        url: '/page1',
        templateUrl: 'page1.html',
        controller: 'page1Ctrl'
    };

    var page2State = {
        name: 'page2',
        url: '/page2',
        template: '<h3> Le contenu de la page 2</h3>'
    };

    var page3State = {
        name: 'page3',
        url: '/page3',
        templateUrl: 'page3.html',
        controller: 'page3Ctrl'
    };
    
    var pageHelloState = {
        name: 'pageHello',
        url: '/pageHello',
        component: 'hello'
    }

    var page4State = {
        name: 'page4',
        url: '/page4',
        templateUrl: 'page4.html',
        controller: 'page4Ctrl'
    };

    var page5State = {
        name: 'page5',
        url: '/page5',
        templateUrl: 'page5.html',
        controller: 'page5Ctrl'
    };

    var ToDoState = {
        name: 'ToDo',
        url: '/ToDo',
        templateUrl: 'ToDo.html',
        controller: 'ToDoCtrl'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(page1State);
    $stateProvider.state(page2State);
    $stateProvider.state(page3State);
    $stateProvider.state(page4State);
    $stateProvider.state(page5State);
    $stateProvider.state(pageHelloState);
    $stateProvider.state(ToDoState);
});