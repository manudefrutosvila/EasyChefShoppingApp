(function () {
    'use strict';

    angular
        .module('ecs.products')
        .factory('products', products);


    function products($http) {
        var products = [];
        
        var service = {
            getResource : getResource,
            init : init,
            all : all,
            remove : remove,
            get : get
        };
        
        return service;
        
        function getResource() {
            return $http.get('app/products/products.json');;
        }
        
        function init(data) {
            products = data;
        }
        
        function all() {
            /*$http.get('app/products/products.json').then(function(response){
                products = response.data; 
                return products;
                // For JSON responses, resp.data contains the result   
            }, function(error) {
                console.log('error', error);
                // error.status will contain the status code
            });
            */
            return products;
        };
        
        function remove(chat) {
            products.splice(products.indexOf(chat), 1);
        };
        
        function get(chatId) {
            for (var i = 0; i < products.length; i++) {
                if (products[i].id === parseInt(chatId)) {
                    return products[i];
                }
            }
            return null;
        };
    };
})();
