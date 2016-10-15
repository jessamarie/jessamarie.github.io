(function () {
    'use strict';

    angular.module('app.about', ['ui.router'])

            .controller('aboutController', aboutController);

    aboutController.$inject = ['$stateParams', '$state'];

    function aboutController($stateParams, $state) {
        var scope = this;

        // add needed variables here!

        function doSomething() {
          // here as a reminder of how to do this!
        }
    }
})();
