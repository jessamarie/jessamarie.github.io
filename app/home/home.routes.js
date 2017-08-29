(function () {
  'use strict'

  angular.module('app.home')
  .config(Router)

  Router.$inject = ['$stateProvider']

  function Router ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'app/home/home.html'
    })
  }
})()
