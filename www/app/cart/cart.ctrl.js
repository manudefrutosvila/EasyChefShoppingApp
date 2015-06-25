(function() {
    'use strict';
    
    angular
        .module('ecs.products')
        .controller('CartCtrl', CartCtrl);
        
    function CartCtrl($scope, $log, cart) {
        
        $scope.$on('$ionicView.enter', function(e) {
            $log.info('cart view enter');
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
                    return result = true;
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
        
    }
})();