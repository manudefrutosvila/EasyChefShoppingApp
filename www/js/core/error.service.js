(function () {
    'use strict';

    angular
        .module('ecs.core')
        .factory('errorService', errorService);

    function errorService($ionicPopup, $log) {
        var service = {
            show : show
        };

        return service;

        function show(errorMessage){
            var alertPopup = $ionicPopup.alert({
                title: 'Error',
                template: errorMessage,
                buttons : [{
                    text : 'OK',
                    type : 'button-dark',
                    onTap : function(e){
                        alertPopup.close();
                    }
                }]
            });

            alertPopup.then(function(res) {
                $log.info(errorMessage);
            });
        }
    }
})();
