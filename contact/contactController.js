(function () {
    'use strict';

    angular.module('app.about', ['ui.router'])

            .controller('contractController', contractController);

    contractController.$inject = ['$stateParams', '$state'];

    function ContractController($stateParams, $state) {
        var scope = this;

        // add needed variables here!

        function doSomething() {
          // here as a reminder of how to do this!
        }
    }
})();
