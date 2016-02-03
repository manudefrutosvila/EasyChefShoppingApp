(function() {
    'use strict';

    angular
        .module('ecs.cart')
        .controller('CartCtrl', CartCtrl);

    function CartCtrl($scope, $log, $ionicTabsDelegate, cart, tabsService) {

        $scope.$on('$ionicView.enter', function(e) {
            cart.all().
                then(function(data){
                    $scope.categories = data;
                });
        });

        $scope.isCategoryActive = function(category){
            return $scope.shownCategory === category;
        };

        $scope.isCategoryShown = function (category) {
            var result = false;
            angular.forEach(category.products, function(item){
                if(item.isInCart){
                    result = true;
                    return;
                }
            });
            return result;
        };

        $scope.isProductShown = function (category, product) {
            return $scope.isCategoryShown(category) && product.isInCart;
        };

        $scope.toggleCategory = function(category) {
            if ($scope.isCategoryActive(category)) {
                $scope.shownCategory = null;
            } else {
                $scope.shownCategory = category;
            }
        };

        $scope.cartProductsUpdate = function(product){
            $scope.$emit('cartProductDelete');
        };

        $scope.onSwipeRight = function(){
            $ionicTabsDelegate.select(tabsService.getProductsTab());
        };

        $scope.onSwipeLeft = function(){
            $ionicTabsDelegate.select(tabsService.getRecipesTab());
        };

    }
})();