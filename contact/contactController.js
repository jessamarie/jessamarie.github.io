(function () {
    'use strict';

    angular.module('app.contact', ['ui.router'])

            .controller('contactController', contactController);

    contactController.$inject = ['$stateParams', '$state'];

    function contactController($stateParams, $state, $scope) {
        var scope = this;

        // add needed variables here!
        $scope.message = 'This is my contact page';

        function doSomething() {
          // here as a reminder of how to do this!
        }
    }
})();
