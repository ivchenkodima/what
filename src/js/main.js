
var myApp = angular.module('myApp', ['ui.router']);


myApp.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){

        $stateProvider.state('what',{
            url:'/what',
            templateUrl: 'template/what.html'
        })
        .state('what2',{
            url:'/what2',
            templateUrl: 'template/what2.html'
        })
        .state('who',{
            url:'/who',
            templateUrl: 'template/who.html'
        })
        .state('error',{
            url:'/error',
            templateUrl: 'template/error.html'
        });


        $urlRouterProvider.otherwise("/what");

    }]);