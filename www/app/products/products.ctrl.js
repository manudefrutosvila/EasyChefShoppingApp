(function() {
    'use strict';
    
    angular
        .module('ecs.products')
        .controller('ProductsCtrl', ProductsCtrl);
        
    function ProductsCtrl($scope, $http, products) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});
  
        //$scope.products = products.all();
        products.getResource().then(function(response){
            products.init(response.data);
            $scope.products = products.all(); 
            // For JSON responses, resp.data contains the result   
        }, function(error) {
            console.log('error', error);
            // error.status will contain the status code
        });   
        
        $scope.remove = function(product) {
            products.remove(product);
        };
    }
})();