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
                    templateUrl: 'js/products/tab-products.html',
                    controller: 'ProductsCtrl'
                  }
                }
            })
            .state('tab.product-detail', {
              url: '/products/:productId',
              views: {
                'tab-products': {
                  templateUrl: 'js/products/detail/product-detail.html',
                  controller: 'ProductDetailCtrl'
                }
              }
            });
            // .state('tab.category-detail', {
            //   url: '/products/edit/category/:productId',
            //   views: {
            //     'tab-products': {
            //       templateUrl: 'js/products/detail/category-detail.html',
            //       controller: 'ProductDetailCtrl'
            //     }
            //   }
            // })
            // .state('tab.product-detail', {
            //   url: '/products/edit/product/:productId',
            //   views: {
            //     'tab-products': {
            //       templateUrl: 'js/products/detail/product-detail.html',
            //       controller: 'ProductDetailCtrl'
            //     }
            //   }
            // });
    }
})();