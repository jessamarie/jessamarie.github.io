(function () {
    'use strict';

    angular.module('app.nav', [])

            .controller('navController', navController);

    navController.$inject = ['$scope'];

    function navController($scope) {

      $scope.state = false;
      //$scope.isCollapsed = true;

      $scope.toggleState = function() {
          $scope.state = !$scope.state;
      };

    }

})();
