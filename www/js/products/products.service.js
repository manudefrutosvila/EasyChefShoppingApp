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
            get : get,
            save : save,
            remove : remove
        };
        
        return service;
        
        function all() {
            return $http.get('js/products/categories.json')
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
        
        function save(item, itemModified){
            var itemPosition = service.items.indexOf(item); 
            service.items[itemPosition] = itemModified;
        };
        
        function remove(item) {
            service.items.splice(service.items.indexOf(item), 1);
        };
        
        function get(itemId) {
            if (angular.isUndefined(service.items[itemId])) {
                return null;
            };
            
            return service.items[itemId];
        };
    };
})();
