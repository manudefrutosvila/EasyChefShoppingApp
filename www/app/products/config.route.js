(function() {
    'use strict';

    angular
        .module('ecs.products')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('tab.products', {
                url: '/products',
                views: {
                  'tab-products': {
                    templateUrl: 'templates/tab-products.html',
                    controller: 'ProductsCtrl'
                  }
                }
            })
            .state('tab.product-detail', {
              url: '/products/:productId',
              views: {
                'tab-products': {
                  templateUrl: 'templates/product-detail.html',
                  controller: 'ProductDetailCtrl'
                }
              }
            });   
    }
})();