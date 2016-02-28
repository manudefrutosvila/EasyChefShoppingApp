(function() {
    'use strict';

    angular
        .module('ecs.layout')
        .controller('TabsCtrl', TabsCtrl);

    function TabsCtrl($scope) {
        activate();

        function activate(){
            $scope.productsInCart = 0;

            $scope.$on('cartProductAdd', function(){
                $scope.productsInCart++;
            });

            $scope.$on('cartProductDelete', function(){
                $scope.productsInCart--;
            });
        }
    }
})();
