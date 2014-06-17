'use strict';
 
var MainApp = angular.module('MainApp', []);
MainApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});
 
MainApp.factory('TestFactory', function($http){
    return $http.get('/api/v1/test_data/').then(
        //Success
        function(response){
            return response;
        },
        //Error
        function(response){
           return response; 
        }
    ); 
});
 
MainApp.controller('MainCtrl', function($scope, TestFactory) {
    $scope.text = 'Hello World!';
});
