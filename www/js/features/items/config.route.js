(function() {
    'use strict';

    angular
        .module('ecs.items')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('tab.items', {
                url: '/items',
                views: {
                  'tab-items': {
                    templateUrl: 'js/features/items/tab-items.html',
                    controller: 'ItemsCtrl'
                  }
                }
            })
            .state('tab.item-detail', {
              url: '/items/:itemId',
              views: {
                'tab-items': {
                  templateUrl: 'js/features/items/detail/item-detail.html',
                  controller: 'ItemDetailCtrl'
                }
              }
            });
            // .state('tab.category-detail', {
            //   url: '/items/edit/category/:itemId',
            //   views: {
            //     'tab-items': {
            //       templateUrl: 'js/items/detail/category-detail.html',
            //       controller: 'ProductDetailCtrl'
            //     }
            //   }
            // })
            // .state('tab.item-detail', {
            //   url: '/items/edit/item/:itemId',
            //   views: {
            //     'tab-items': {
            //       templateUrl: 'js/items/detail/item-detail.html',
            //       controller: 'ProductDetailCtrl'
            //     }
            //   }
            // });
    }
})();
