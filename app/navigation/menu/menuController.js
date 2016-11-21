(function () {
    'use strict';

    angular.module('app.nav.menu', ['ngMaterial'])

            .controller('menuController', menuController);

    menuController.$inject = ['$scope'];

    function menuController($scope) {

      $scope.menu = [
        {
          link : '',
          title: 'Home',
          icon: 'home' // change these
        },
        {
          link : '',
          title: 'Projects',
          icon: 'dashboard'
        },
        {
          link : '',
          title: 'About',
          icon: 'message'
        },
        {
          link : '',
          title: 'Contact',
          icon: 'comment'
        }
      ];


    } // end controller

})();
