var frugalBinModule = angular.module('frugalBin',
    ['header',
        'inventoryList',
        'ngRoute',
        'frugalBin1',
        'frugalBin2',
        'frugalBin3']);

frugalBinModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/inventoryList', {
            templateUrl: 'inventories/inventoryList.html',
            controller: 'inventoryListController'
        });
}])
.run(function ($rootScope, otherConstants) {
    $rootScope.endPoint = otherConstants.tempUrl;
    $rootScope.dataType = otherConstants.dummyData;
});
