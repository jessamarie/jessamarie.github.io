(function () {
    'use strict';

    angular.module('app.about', ['ui.router'])

            .controller('aboutController', aboutController);

    aboutController.$inject = ['$stateParams', '$state', '$scope'];

    function aboutController($stateParams, $state, $scope) {
        var scope = this;

       $scope.message = 'This is my about page';

        // add needed variables here!

        function doSomething() {
          // here as a reminder of how to do this!
        }
    }
})();
