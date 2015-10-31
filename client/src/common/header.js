var headerModule = angular.module('header', [/*'ngRoute'*/]);
headerModule.controller('ch_LoginController', function($scope)
{
    $scope.changeLogin = function()
    {
        $scope.login = !$scope.login;
        $scope.logout = !$scope.logout;
    }
});