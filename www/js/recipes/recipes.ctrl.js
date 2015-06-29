(function() {
    'use strict';
    
    angular
        .module('ecs.recipes')
        .controller('RecipesCtrl', RecipesCtrl);
        
    function RecipesCtrl($scope, $ionicTabsDelegate, tabsService) {
        $scope.settings = {
            enableFriends: true
        };
        
        $scope.onSwipeRight = function(){
            $ionicTabsDelegate.select(tabsService.getCartTab());
        };
    }
})();