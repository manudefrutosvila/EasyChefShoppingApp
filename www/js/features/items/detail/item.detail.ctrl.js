(function() {
    'use strict';

    angular
        .module('ecs.items')
        .controller('ItemDetailCtrl', ItemDetailCtrl);

    function ItemDetailCtrl($scope, $stateParams, products) {
        var product;
        
        $scope.save = save;

        activate();

        function activate(){
            product = products.get($stateParams.productId);
            $scope.title = product.name;
            $scope.product = angular.copy(product);
        }

        function save(){
              products.save(product, $scope.product);
        }
    }
})();
