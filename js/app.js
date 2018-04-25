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

    $stateProvider.state(homeState);
    $stateProvider.state(page1State);
    $stateProvider.state(page2State);
    $stateProvider.state(page3State);
    $stateProvider.state(pageHelloState);
});