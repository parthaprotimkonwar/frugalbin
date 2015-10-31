var inventoryListModule = angular.module('inventoryList', []);

inventoryListModule.controller('inventoryListController', function($scope) {
    $scope.inventories =
    [
        {
            name: 'Travel',
            categories: [
                'Flight',
                'Bus'
            ]
        },
        {
            name: 'Food',
            categories: [
                'Hotel Food',
                'Packaged Food'
            ]
        }
    ]

});