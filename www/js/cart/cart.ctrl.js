(function() {
    'use strict';

    angular
        .module('ecs.cart')
        .controller('CartCtrl', CartCtrl);

    function CartCtrl($scope, $log, $ionicTabsDelegate, cart, tabs) {
        $scope.$on('$ionicView.enter', function(e) {
            activate();
        });

        $scope.isCategoryActive = isCategoryActive;
        $scope.isCategoryShown = isCategoryShown;
        $scope.isProductShown = isProductShown;
        $scope.toggleCategory = toggleCategory;
        $scope.cartProductsUpdate = cartProductsUpdate;
        $scope.onSwipeRight = onSwipeRight;
        // $scope.onSwipeLeft = onSwipeLeft;


        function activate(){
            return getCart().then(function(){
                $log.info('Activated Cart View');
            });
        }

        function getCart(){
            return cart.all().then(function(data){
                $scope.categories = data;
                return $scope.categories;
            });
        }

        function isCategoryActive(category){
            return $scope.shownCategory === category;
        }

        function isCategoryShown(category) {
            var result = false;
            angular.forEach(category.products, function(item){
                if(item.isInCart){
                    result = true;
                    return;
                }
            });
            return result;
        }

        function isProductShown(category, product) {
            return isCategoryShown(category) && product.isInCart;
        }

        function toggleCategory(category) {
            if ($scope.isCategoryActive(category)) {
                $scope.shownCategory = null;
            } else {
                $scope.shownCategory = category;
            }
        }

        function cartProductsUpdate(product){
            $scope.$emit('cartProductDelete');
        }

        function onSwipeRight(){
            $ionicTabsDelegate.select(tabs.PRODUCTS);
        }

        // function onSwipeLeft(){
        //     $ionicTabsDelegate.select(tabs.RECIPES);
        // }

    }
})();
