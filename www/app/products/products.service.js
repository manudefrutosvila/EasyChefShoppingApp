(function () {
    'use strict';

    angular
        .module('ecs.products')
        .factory('products', products);


    function products($http, $log) {
        var items = [];
        
        var service = {
            items : items,
            all : all,
            remove : remove,
            get : get
        };
        
        return service;
        
        function all() {
            return $http.get('app/products/categories.json')
                .then(allComplete)
                .catch(allFailed);
                
            function allComplete(response){ 
                service.items = response.data;
                $log.info('products.all', service.items);
                return service.items;
            }
            
            function allFailed(error) {
                var errorMsg = 'error ' + error.status;
                $log.error(errorMsg, error.data);
            }
        };
        
        function remove(item) {
            items.splice(items.indexOf(item), 1);
        };
        
        function get(itemId) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === parseInt(itemId)) {
                    return items[i];
                }
            }
            return null;
        };
    };
})();
