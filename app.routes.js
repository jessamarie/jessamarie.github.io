(function () {
    'use strict';

    angular.module('app')

            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$routeProvider'];

    function config($stateProvider, $urlRouterProvider, $routeProvider) {
         $routeProvider

             // route for the home page
             .when('/', {
                 templateUrl : 'home/home.html',
                 controller  : 'indexController'
             })

             // route for the about page
             .when('/about', {
                 templateUrl : 'about/about.html',
                 controller  : 'aboutController'
             })

             // route for the projects page
             .when('/projects', {
                 templateUrl : 'projects/projects.html',
                 controller  : 'projectsController'
             })

             // route for the contact page
             .when('/contact', {
                 templateUrl : 'contact/contact.html',
                 controller  : 'contactController'
             });
           }
})();
