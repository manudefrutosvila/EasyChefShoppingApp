(function () {
    'use strict';

    angular
        .module('ecs.layout')
        .factory('tabs', tabs);


    function tabs() {

        var service = {
            PRODUCTS    : 0,
            CART        : 1
            // RECIPES     : 2
        };

        return service;
    }
})();
