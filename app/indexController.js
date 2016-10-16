(function () {
    'use strict';

    angular.module('app.index', [])

            .controller('indexController', indexController);

    indexController.$inject = ['$log', '$scope'];

    function indexController($log, $scope) {
        var vm = this;

        $scope.message = 'Hello, World. This is Jessica. This site is currently in the design stage, so check back in a month, or two! Peace :) ';
      }
})();
