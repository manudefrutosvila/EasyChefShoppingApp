(function() {
    'use strict';

    angular
        .module('ecs.core')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $ionicPopover, $log) {
        $scope.openPopover = openPopover;
        $scope.closePopover = closePopover;

        activate();

        function activate() {
            $ionicPopover.fromTemplateUrl('js/layout/popover.menu.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
            });

            $scope.$on('$destroy', function() {
                $scope.popover.remove();
            });
        }

        function openPopover($event) {
            $scope.popover.show($event);
        }

        function closePopover() {
            $scope.popover.hide();
        };
    }
})();
