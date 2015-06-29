(function () {
    'use strict';

    angular
        .module('ecs.layout')
        .factory('tabsService', tabs);


    function tabs() {
        
        var service = {
            getProductsTab : getProductsTab,
            getCartTab : getCartTab,
            getRecipesTab : getRecipesTab
        };
        
        var tabs = {
            PRODUCTS : 0,
            CART : 1,
            RECIPES : 2
        };
        
        return service;
        
        function getProductsTab() {
            return tabs.PRODUCTS;
        };
        
        function getCartTab() {
            return tabs.CART;
        };
        
        function getRecipesTab() {
            return tabs.RECIPES;
        };
  
    };
})();
