(function () {
    'use strict';

    angular
        .module('ecs.products')
        .factory('products', products);


    function products($http) {
        var items = [];
        
        var service = {
            items : items,
            all : all,
            remove : remove,
            get : get
        };
        
        return service;
        
        function all() {
            return $http.get('app/products/products.json')
                .then(allComplete)
                .catch(allFailed);
                
            function allComplete(response){ 
                items = response.data;
                console.log('products.all', items);
                return items;
            }
            
            function allFailed(error) {
                var errorMsg = 'error ' + error.status;
                console.log(errorMsg, error.data);
            }
        };
        
        function remove(chat) {
            items.splice(items.indexOf(chat), 1);
        };
        
        function get(chatId) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === parseInt(chatId)) {
                    return items[i];
                }
            }
            return null;
        };
    };
})();
