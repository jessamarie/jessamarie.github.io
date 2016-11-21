(function () {
    'use strict';

    angular.module('app.nav.top', ['ngMdIcons'])

            .controller('topController', topController);

    topController.$inject = ['$scope', '$timeout', '$mdSidenav'];

    function topController($scope, $timeout, $mdSidenav) {

      $scope.toggleOuter = buildToggler('left');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        }
      }
    } // end controller

})();
