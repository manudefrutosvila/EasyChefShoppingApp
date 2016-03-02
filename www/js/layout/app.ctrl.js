(function() {
    'use strict';

    angular
        .module('ecs.core')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $ionicPopover, $ionicModal, $log) {
        $scope.openPopover = openPopover;
        $scope.closePopover = closePopover;
        $scope.openModal = openModal;
        $scope.closeModal = closeModal;

        activate();

        function activate() {
            $ionicPopover.fromTemplateUrl('js/layout/popover.menu.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
            });

            $ionicModal.fromTemplateUrl('js/layout/settings/modal.settings.html', {
                scope: $scope,
                animation: 'slide-in-left'
            }).then(function(modal) {
                $scope.modal = modal;
            });

            $scope.$on('$destroy', function() {
                $scope.popover.remove();
                $scope.modal.remove();
            });
        }

        function openPopover($event) {
            $scope.popover.show($event);
        }

        function closePopover() {
            $scope.popover.hide();
        }

        function openModal() {
            $scope.modal.show();
        }

        function closeModal() {
            $scope.modal.hide();
        }
    }
})();
