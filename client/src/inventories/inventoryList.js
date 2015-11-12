var inventoryListModule = angular.module('inventoryList', []);

inventoryListModule.controller('inventoryListController', function($scope, CommonUrlCreator) {
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
    ];

    $scope.isUrlAdded = false;
    var urlCreator;

    $scope.addParam = function() {
        console.log($scope.isUrlAdded);
        if(!$scope.isUrlAdded) {
            urlCreator = new CommonUrlCreator($scope.url);
            $scope.isUrlAdded = true;
        }

        /*$scope.*/urlCreator.addParam($scope.param, $scope.value);
        /*$scope.finalurl = $scope.param;*/
        console.log("Getting called")
        $scope.finalurl = /*$scope.*/urlCreator.getUrl();
    };

    $scope.refresh = function() {
        //urlCreator = new Common_Url_Creator();
        $scope.isUrlAdded = false;
    };

    $scope.count = 0;
    $scope.clickMe = function()
    {
        $scope.count+=2;
        $scope.finalname=$scope.name;
    };

    //$scope.refresh();
});