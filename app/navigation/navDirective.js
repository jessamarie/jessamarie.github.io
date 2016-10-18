(function () {
    'use strict';

    angular.module('app.nav', [])

            .directive('navDirective', navDirective);

    navDirective.$inject = [];

    function navDirective() {
      return {
        link : function(scope, element, attr) {

          scope.$watch(attr.sidebarDirective, function(newVal) {
            if(newVal) {
              element.addClass('show');
              return;
            }
            element.removeClass('show');
          });
        }
      };
    } // end nav directive

})();
