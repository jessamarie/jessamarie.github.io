(function () {
    'use strict';

    angular.module('app.nav.side', ['ngMaterial', 'ngMdIcons'])

            .controller('navController', navController);

    navController.$inject = ['$scope', '$timeout', '$mdSidenav'];

    function navController($scope, $timeout, $mdSidenav) {

      $scope.toggleInner = buildToggler('left');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        }
      }

    } // end controller

})();
