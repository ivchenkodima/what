
var myApp = angular.module('myApp', ['ui.router']);


myApp.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){

        $stateProvider
            .state('what',{
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

myApp.controller('mainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.name = $rootScope.name || '';
    $scope.film = 'Манина девушка в бикини';

    $scope.setFilm = function (newFilm) {
        $scope.fild = newFilm;
    };
   
    $scope.filmUpdate = function() {
        setTimeout(function(){
            $scope.film = 'Манина девушка в бикини 2';
        }, 0)
    };

    $scope.$watch('name', function (val) {
        $rootScope.name = val;
    })

}]);