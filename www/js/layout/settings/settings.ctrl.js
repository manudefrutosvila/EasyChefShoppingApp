(function() {
    'use strict';

    angular
        .module('ecs.layout')
        .controller('SettingsCtrl', SettingsCtrl);

    function SettingsCtrl($scope, $cordovaSocialSharing, version, errorService, deviceInfo) {
        $scope.sendFeedback = sendFeedback;
        $scope.shareViaTwitter = shareViaTwitter;
        $scope.shareViaFacebook = shareViaFacebook;
        $scope.shareViaWhatsApp = shareViaWhatsApp;

        activate();

        function activate(){
            $scope.version = version;
        }

        function sendFeedback(){
            var device = deviceInfo.get();

            var subject = 'Comentarios sobre Easy Chef Shopping';
            var message = 'Puedes escribir tus comentarios en este email:\n\n\n\n';
            message = message.concat('Información del dispositivo:\n')
                .concat('Plataforma: ')
                .concat(device.platform)
                .concat('\nVersion: ')
                .concat(device.version)
                .concat('\nModelo: ')
                .concat(device.model);

            var developerEmails = ['manufvdev@gmail.com'];
            var ccEmails = null;
            var bccEmails = null;
            var files = [];
            var onSuccess = null;
            var onError = null;

            $cordovaSocialSharing.shareViaEmail(message, subject, developerEmails, ccEmails, bccEmails, files, onSuccess, onError);
        }

        var shareOptions = {
            message : 'Haz tu lista de la compra de manera fácil con Easy Chef Shopping!',
            image   : 'www/img/icon.png',
            link    : null
        };

        function shareViaTwitter(){
            shareVia('twitter', function(result) {
                $cordovaSocialSharing.shareViaTwitter(shareOptions.message, shareOptions.image, shareOptions.link);
            }, function(error) {
                errorService.show('Twitter APP not installed');
            });
        }

        function shareViaFacebook(){
            shareVia('facebook', function(result) {
                $cordovaSocialSharing.shareViaFacebook(shareOptions.message, shareOptions.image, shareOptions.link);
            }, function(error) {
                errorService.show('Facebook APP not installed');
            });
        }

        function shareViaWhatsApp(){
            shareVia('whatsapp', function(result) {
                $cordovaSocialSharing.shareViaWhatsApp(shareOptions.message, shareOptions.image, shareOptions.link);
            }, function(error) {
                errorService.show('whatsapp APP not installed');
            });
        }

        function shareVia(social, onSuccess, onError){
            $cordovaSocialSharing.canShareVia(social, shareOptions.message, shareOptions.image, shareOptions.link).then(onSuccess, onError);
        }
    }
})();
