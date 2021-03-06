
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
    $scope.$watch('name', function (val) {
        $rootScope.name = val;
    });
    
    $scope.film = 'Манина девушка в бикини';
    $scope.filmUpdate = function() {

        // ajax
        $scope.film = 'Манина девушка в бикини 2';

        setTimeout(function(){
            var film = angular.element(document.querySelector('.film'));
            film.removeClass('animate-text');
            var btns = angular.element(document.querySelector('.btn__container'));
            btns.removeClass('animate-text');

        }, 0)
    };


}]);