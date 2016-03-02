(function () {
    'use strict';

    angular
        .module('ecs.services')
        .factory('deviceInfo', deviceInfo);

    function deviceInfo($ionicPlatform) {
        var info = {};

        var service = {
            init : init,
            get  : get,
            set  : set
        };

        return service;

        function init(){
            $ionicPlatform.ready(function() {
                if (window.cordova) {
                    var ionicDeviceInfo = ionic.Platform.device();
                    info = ionicDeviceInfo;
                }
            });
        }

        function get(){
            return info;
        }

        function set(info){
            info = info;
        }
    }
})();
