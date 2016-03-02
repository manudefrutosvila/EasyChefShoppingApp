(function() {
    'use strict';

    angular
        .module('ecs.layout')
        .controller('SettingsCtrl', SettingsCtrl);

    function SettingsCtrl($scope, share, version, deviceInfo) {
        $scope.sendFeedback = sendFeedback;
        $scope.shareViaTwitter = shareViaTwitter;
        $scope.shareViaNativeSheet = shareViaNativeSheet;

        activate();

        function activate(){
            $scope.version = version;
        }

        function sendFeedback(){
            var device = deviceInfo.get();

            var subject = 'Comentarios sobre Easy Chef Shopping';
            var message = 'Puedes escribir tus comentarios en este email:\n\n\n\n';
            message = message.concat('Información útil para el desarrollador:\n')
                .concat('Easy Chef Shopping Version: ')
                .concat(version)
                .concat('\nPlataforma: ')
                .concat(device.platform)
                .concat('\nVersion: ')
                .concat(device.version)
                .concat('\nModelo: ')
                .concat(device.model);

            var developerEmails = ['manufvdev@gmail.com'];
            var ccEmails = null;
            var bccEmails = null;
            var files = [];

            var emailOptions = {
                message   : message,
                subject   : subject,
                toEmails  : developerEmails,
                ccEmails  : ccEmails,
                bccEmails : bccEmails,
                files     : files
            };

            share.viaEmail(emailOptions);
        }

        var shareOptions = {
            message : 'Haz tu lista de la compra de manera fácil con Easy Chef Shopping!',
            image   : 'www/img/icon.png',
            link    : null
        };

        function shareViaTwitter(){
            share.viaTwitter(shareOptions);
        }

        function shareViaNativeSheet(){
            share.nativeSheet(shareOptions);
        }
    }
})();
