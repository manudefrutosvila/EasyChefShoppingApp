(function () {
    'use strict';

    angular
        .module('ecs.cart')
        .factory('cart', cart);


    function cart($q, $log, categories) {

        var items = [];
        var itemsBought = [];

        var service = {
            items       : items,
            itemsBought : itemsBought,
            init        : init,
            addItem     : addItem,
            deleteItem  : deleteItem
        };

        return service;

        function init(){
            if (service.items.length === 0){
                service.items = angular.copy(categories.items);
                service.items.map(function(item){
                    item.products = [];
                });
                // $log.info('cart.init', service.items);
            }
        }

        function addItem(product){
            service.items.map(function(item){
                if (item.id === product.category){
                    item.products.push(product);
                }
                return item;
            });
        }

        function deleteItem(product){
            service.items.map(function(item){
                if (item.id === product.category){
                    item.products.splice(item.products.indexOf(product), 1);
                }
                return item;
            });
        }
    }
})();
