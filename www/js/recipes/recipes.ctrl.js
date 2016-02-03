(function() {
    'use strict';

    angular
        .module('ecs.recipes')
        .controller('RecipesCtrl', RecipesCtrl);

    function RecipesCtrl($scope, $ionicTabsDelegate, tabsService) {
        $scope.settings = {
            enableFriends: true
        };

        $scope.onSwipeRight = onSwipeRight;

        function onSwipeRight(){
            $ionicTabsDelegate.select(tabsService.getCartTab());
        }
    }
})();
