'use strict';
 
describe('MainCtrl', function(){
    var scope;
    beforeEach(angular.mock.module('MainApp'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('MainCtrl', {$scope: scope});
    }));
    it('should have variable text = "Hello World!"', function(){
        expect(scope.text).toBe('Hello World!');
    });
});
