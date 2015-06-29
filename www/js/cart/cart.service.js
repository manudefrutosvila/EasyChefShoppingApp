(function () {
    'use strict';

    angular
        .module('ecs.cart')
        .factory('cart', cart);


    function cart($q, products) {

        var service = {
            all : all
        };

        return service;

        function all() {
            var deferred = $q.defer();

            if (products.items.length === 0){
                products.all()
                    .then(function(data) {
                        deferred.resolve(data);
                    });
            }
            else {
                deferred.resolve(products.items);
            }
            return deferred.promise;
        }

    }
})();
