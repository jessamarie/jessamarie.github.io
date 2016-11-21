(function () {
    'use strict';

    angular.module('app.nav.side')

            .directive('navbar', navBar);

    navBar.$inject = [];

    function navBar() {
      return {
      templateUrl: 'navigation/side-bar/navigation.html',
      restrict: 'E'
    };
  } // end template directive

})();
