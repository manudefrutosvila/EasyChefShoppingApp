(function() {
    'use strict';

    angular
        .module('ecs.cart')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('tab.cart', {
                url: '/cart',
                views: {
                    'tab-cart': {
                      templateUrl: 'app/cart/tab-cart.html',
                      controller: 'CartCtrl'
                    }
                }
            });
    }
})();