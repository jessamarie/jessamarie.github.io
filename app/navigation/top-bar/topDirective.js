(function () {
    'use strict';

    angular.module('app.nav.top')

            .directive('top', top);

    top.$inject = [];

    function top() {

      return {
      templateUrl: 'navigation/top-bar/top.html',
      restrict: 'E'
    };

  } // end template directive

})();
