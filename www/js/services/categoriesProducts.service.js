(function () {
    'use strict';

    angular
        .module('ecs.services')
        .factory('categoriesProducts', categoriesProducts);

    function categoriesProducts($q, $log, categories, products, cart) {
        var items = [];

        var service = {
            items : items,
            init  : init
        };

        return service;

        function init(){
            if (service.items.length > 0){
                var deferred = $q.defer();
                deferred.resolve(service.items);
                return deferred.promise;
            }
            return $q.all([categories.all(), products.all()]).then(function(data){
                var categoriesData = angular.copy(data[0]);
                var productsData = angular.copy(data[1]);

                service.items = categoriesData.map(function(category){
                    category.products = [];
                    productsData.map(function(product, index){
                        if(product.category === category.id){
                            category.products.push(product);
                            delete products[index];
                        }
                    });
                    return category;
                });
                // $log.info('categoriesProducts', service.items);
                cart.init();
                return service.items;
            });
        }
    }
})();
