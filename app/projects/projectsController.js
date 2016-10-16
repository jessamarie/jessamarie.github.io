(function () {
    'use strict';

    angular.module('app.projects', ['ui.router'])

            .controller('projectsController', projectsController);

    navController.$inject = ['$stateParams', '$state', '$scope'];

    function projectsController($stateParams, $state, $scope) {
        var scope = this;

       $scope.message = 'This is my projects page';

        // add needed variables here!

        function doSomething() {
          // here as a reminder of how to do this!
        }
    }
})();
