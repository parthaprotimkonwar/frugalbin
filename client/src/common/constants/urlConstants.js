var frugalBinModule = angular.module('frugalBin', ['ngRoute','header', 'inventoryList']);

frugalBinModule.constant('common_urls', {

    loginModule: '/login',
    paymentModule: '/payment'

});