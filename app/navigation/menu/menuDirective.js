(function () {
    'use strict';

    angular.module('app.nav.menu')

            .directive('menu', menu);

    menu.$inject = [];

    function menu() {
      return {
      templateUrl: 'navigation/menu/menu.html',
      restrict: 'E'
    };
  } // end template directive

})();
