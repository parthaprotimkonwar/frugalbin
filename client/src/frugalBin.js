var frugalBinModule = angular.module('frugalBin', ['ngRoute','header', 'inventoryList']);

frugalBinModule.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/inventoryList', {
            templateUrl:'inventories/inventoryList.html'
        });
}])
    .run(function ($rootScope){
        $rootScope.endPoint = 'http://localhost:8080'
    });