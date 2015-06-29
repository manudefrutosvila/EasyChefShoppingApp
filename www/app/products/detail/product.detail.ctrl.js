(function() {
    'use strict';
    
    angular
        .module('ecs.products')
        .controller('ProductDetailCtrl', ProductDetailCtrl);
        
    function ProductDetailCtrl($scope, $stateParams, products) {
        var product = products.get($stateParams.productId);
        
        $scope.title = product.name;
        $scope.product = angular.copy(product);
        
        $scope.save = function(){
              products.save(product, $scope.product);
        };
    }
})();