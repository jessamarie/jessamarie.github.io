(function () {
    'use strict';

    angular.module('app.nav', ['ui.router'])

            .controller('navController', navController);

    navController.$inject = ['$state', '$scope'];

//Probably don't need state but keep it for now
    function navController($state, $scope) {

      $scope.state = false;

      var vm = this;

      vm.getClass = getClass;


      // probably related to page's path
      function getClass(path) {
          if ($state.current.name.substr(0, path.length) === path) {
              return 'active';
          } else {
              return '';
          }
      }

      function toggleState() {
        $scope.state = !$scope.state;
      }

    }

})();
