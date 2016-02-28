(function() {
    'use strict';

    angular
        .module('ecs.recipes')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('tab.recipes', {
                url: '/recipes',
                views: {
                    'tab-recipes': {
                    templateUrl: 'js/features/recipes/tab-recipes.html',
                    controller: 'RecipesCtrl'
                    }
                }
            });
    }
})();
