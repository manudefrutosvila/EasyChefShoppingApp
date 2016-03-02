(function () {
    'use strict';

    angular
        .module('ecs.services')
        .factory('share', share);

    function share($cordovaSocialSharing, errorService) {

        var service = {
            viaEmail    : viaEmail,
            viaTwitter  : viaTwitter,
            viaFacebook : viaFacebook,
            viaWhatsApp : viaWhatsApp,
            nativeSheet : nativeSheet
        };

        return service;

        function nativeSheet(options){
            options.subject = options.subject || null;
            options.image = options.image || null;
            options.link = options.link || null;

            $cordovaSocialSharing.share(options.message, options.subject, options.image, options.link);
        }

        function viaEmail(options){
            var onSuccess = null;
            var onError = null;

            $cordovaSocialSharing.shareViaEmail(options.message, options.subject, options.developerEmails, options.ccEmails, options.bccEmails, options.files, onSuccess, onError);
        }

        function viaTwitter(options){
            shareVia('twitter', options, function(result) {
                $cordovaSocialSharing.shareViaTwitter(options.message, options.image, options.link);
            }, onTwitterError);
        }

        function viaFacebook(options){
            shareVia('facebook', options, function(result) {
                $cordovaSocialSharing.shareViaFacebook(options.message, options.image, options.link);
            }, onFacebookError);
        }

        function viaWhatsApp(options){
            shareVia('whatsapp', options, function(result) {
                $cordovaSocialSharing.shareViaWhatsApp(options.message, options.image, options.link);
            }, onWhatsAppError);
        }

        function shareVia(socialType, options, onSuccess, onError){
            $cordovaSocialSharing
                .canShareVia(socialType, options.message, options.image, options.link)
                .then(onSuccess, onError);
        }

        function onTwitterError(error) {
            errorService.show('Twitter APP not installed');
        }

        function onFacebookError(error) {
            errorService.show('Facebook APP not installed');
        }

        function onWhatsAppError(error) {
            errorService.show('WhatsApp APP not installed');
        }
    }
})();
