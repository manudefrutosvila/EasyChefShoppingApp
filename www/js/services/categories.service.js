(function () {
    'use strict';

    angular
        .module('ecs.services')
        .factory('categories', categories);

    function categories($http, $log, sort) {
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
            return $http.get('js/services/categories.json')
                .then(allComplete)
                .catch(allFailed);

            function allComplete(response){
                service.items = response.data
                    .sort(sort.byNameAsc)
                    .map(function(item){
                        item.img = 'img/' + item.img;
                        return item;
                    });
                $log.info('categories.all', service.items);
                return service.items;
            }

            function allFailed(error) {
                var errorMsg = 'error ' + error.status;
                $log.error(errorMsg, error.data);
            }
        }

        function save(item, itemModified){
            var itemPosition = service.items.indexOf(item);
            service.items[itemPosition] = itemModified;
        }

        function remove(item) {
            service.items.splice(service.items.indexOf(item), 1);
        }

        function get(itemId) {
            if (angular.isUndefined(service.items[itemId])) {
                return null;
            }

            return service.items[itemId];
        }
    }
})();
