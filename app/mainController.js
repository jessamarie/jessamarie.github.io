(function () {
    'use strict';

    angular.module('app.main', [])

            .controller('mainController', mainController);

    mainController.$inject = ['$log', '$scope'];

    function mainController($log, $scope) {

        $scope.message = 'Hello, World. This is Jessica. This site is currently in the design stage. This means that anything you currently see may look quite ridiculous. So please check back in a month, or two, to watch it grow! Peace :) ';
      }
})();
