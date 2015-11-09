var headerModule = angular.module('header', [/*'ngRoute'*/]);
headerModule.controller('ch_LoginController', function($scope)
{
    $scope.changeLoginStatus = function()
    {
        $scope.isLoggedIn = !$scope.isLoggedIn;
    }
});