(function() {
    'use strict';

    angular
        .module('ecs.products')
        .controller('ProductsCtrl', ProductsCtrl);

    function ProductsCtrl($scope, $http, $log, $ionicTabsDelegate, $state, products, cart, tabs) {

        $scope.categories = [];

        $scope.toggleCategory = toggleCategory;
        $scope.isCategoryShown = isCategoryShown;
        $scope.cartProductsUpdate = cartProductsUpdate;
        $scope.onHold = onHold;
        $scope.onSwipeLeft = onSwipeLeft;

        activate();


        function activate(){
            return getProducts().then(function(){
                $log.info('Activated Products View');
            });
        }

        function getProducts(){
            return products.all().then(function(data) {
                $scope.categories = data;
                return $scope.categories;
            });
        }

        function toggleCategory(category) {
            if ($scope.isCategoryShown(category)) {
                $scope.shownCategory = null;
            } else {
                $scope.shownCategory = category;
            }
        }

        function isCategoryShown(category) {
            return $scope.shownCategory === category;
        }

        function cartProductsUpdate(product){
            if (product.isInCart){
                $scope.$emit('cartProductAdd');
                return;
            }
            $scope.$emit('cartProductDelete');
        }

        function onHold(category, product) {
            // if (product){
            //     $log.info('onHold', category.name, product.name);
            //     return;
            // }
            // $log.info('onHold', category.name);
            // $state.go('tab.product-detail',{productId: category.id});
        }

        function onSwipeLeft(){
            $ionicTabsDelegate.select(tabs.CART);
        }
    }
})();
