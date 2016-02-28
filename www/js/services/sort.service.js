(function () {
    'use strict';

    angular
        .module('ecs.services')
        .factory('sort', sort);

    function sort() {

        var service = {
            byNameAsc   : byNameAsc,
            byNameDesc  : byNameDesc
        };

        return service;

        function byNameAsc(a, b){
            if (a.name < b.name){
                return -1;
            }
            if (a.name > b.name){
                return 1;
            }
            return 0;
        }

        function byNameDesc(a, b){
            if (b.name < a.name){
                return -1;
            }
            if (b.name > a.name){
                return 1;
            }
            return 0;
        }
    }
})();
