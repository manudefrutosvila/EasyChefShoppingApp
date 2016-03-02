(function() {
    'use strict';

    angular
        .module('ecs.cart')
        .controller('CartCtrl', CartCtrl);

    function CartCtrl($scope, $log, $ionicTabsDelegate, $timeout, categoriesProducts, cart, tabs) {
        $scope.isCategoryActive = isCategoryActive;
        $scope.isCategoryShown = isCategoryShown;
        $scope.isProductShown = isProductShown;
        $scope.cartProductsUpdate = cartProductsUpdate;
        $scope.onSwipeRight = onSwipeRight;
        // $scope.onSwipeLeft = onSwipeLeft;

        activate();

        function activate(){
            return getCart().then(function(){
                $log.info('Activated Cart View');
            });
        }

        function getCart(){
            return categoriesProducts.init().then(function(data){
                $scope.cart = cart.items;
                return $scope.cart;
            });
        }

        function isCategoryActive(category){
            return $scope.shownCategory === category;
        }

        function isCategoryShown(category) {
            return category.products.length > 0;
        }

        function isProductShown(category, product) {
            return isCategoryShown(category) && product.isInCart;
        }

        function cartProductsUpdate(product){
            $timeout(function(){
                cart.deleteItem(product);
                $scope.$emit('cartProductDelete');
            },100);
        }

        function onSwipeRight(){
            $ionicTabsDelegate.select(tabs.PRODUCTS);
        }

        // function onSwipeLeft(){
        //     $ionicTabsDelegate.select(tabs.RECIPES);
        // }

    }
})();
