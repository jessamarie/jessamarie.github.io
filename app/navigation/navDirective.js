(function () {
    'use strict';

    angular.module('app.nav.directive', [])

            .directive('navigation', navigation)
            .directive('navDirective', navDirective);

    navDirective.$inject = [];

    function navigation() {
    return {
    templateUrl: 'navigation/navigation.html',
    restrict: 'E'
  };
} // end template directive

    navDirective.$inject = [];

    function navDirective() {
      return {
        link : function(scope, element, attr) {
            scope.$watch(attr.navDirective, function(newVal) {
                  if(newVal)
                  {
                    element.addClass('show');
                    return;
                  }
                  element.removeClass('show');
            });
        }
      };
    } // end nav directive

})();
