(function() {
    'use strict';
    
    angular
        .module('ecs.products')
        .controller('ProductsCtrl', ProductsCtrl);
        
    function ProductsCtrl($scope, $http, $log, $ionicTabsDelegate, $state, products, cart, tabsService) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});
  
        $scope.categories = [];
        
        products.all()
            .then(function(data) {
                $scope.categories = data;
            });
        
        $scope.toggleCategory = function(category) {
            if ($scope.isCategoryShown(category)) {
                $scope.shownCategory = null;
            } else {
                $scope.shownCategory = category;
            }
        };
        
        $scope.isCategoryShown = function (category) {
            return $scope.shownCategory === category;
        };
        
        $scope.cartProductsUpdate = function(product){
            if (product.isInCart){
                $scope.$emit('cartProductAdd');
                return;
            }
            $scope.$emit('cartProductDelete');
        };
        
        $scope.onHold = function(category, product) {
            if (product){
                $log.info('onHold', category.name, product.name);
                return;    
            }
            $log.info('onHold', category.name);
            $state.go('tab.product-detail',{productId: category.id});
        };
        
        $scope.onSwipeLeft = function(){
            $ionicTabsDelegate.select(tabsService.getCartTab());
        };
    }
})();