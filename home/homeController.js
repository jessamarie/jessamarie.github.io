(function () {
    'use strict';

    angular.module('app.home', ['ui.router'])

            .controller('homeController', homeController);

    homeController.$inject = ['$stateParams', '$state', '$scope'];

    function homeController($stateParams, $state, $scope) {
        var scope = this;

       $scope.message = 'This is my home page';

        // add needed variables here!

        function doSomething() {
          // here as a reminder of how to do this!
        }
    }
})();
