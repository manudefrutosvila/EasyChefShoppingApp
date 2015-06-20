(function() {
    'use strict';
    
    angular
        .module('ecs.products')
        .controller('ProductDetailCtrl', ProductDetailCtrl);
        
    function ProductDetailCtrl($scope, $stateParams, products) {
        $scope.product = products.get($stateParams.productId);
    }
})();