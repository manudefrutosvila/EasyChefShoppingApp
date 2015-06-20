(function() {
    'use strict';
    
    angular
        .module('ecs.recipes')
        .controller('RecipesCtrl', RecipesCtrl);
        
    function RecipesCtrl($scope) {
        $scope.settings = {
            enableFriends: true
        };
    }
})();