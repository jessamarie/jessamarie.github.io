(function () {
    'use strict';

    angular.module('app')

          .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/home");
      $stateProvider
        // route for the home page
        .state('home', {
          url: "/",
          template: 'home/home.html',
          controller: 'mainController',
          controllerAs: 'main',
          data:{}
         })
         // route for the about page
        .state('about', {
          url: "/about",
           template: 'about/about.html',
           controller: 'aboutController',
           controllerAs: 'about',
           data:{}
         })
        // route for the projects page
        .state('projects', {
          url: "/projects",
           template: 'projects/projects.html',
           controller: 'projectsController',
           controllerAs: 'projects',
           data:{}
         })
         // route for the contact page
         .state('contact', {
           url: "/contact",
            template: 'contact/contact.html',
            controller: 'contactController',
            controllerAs: 'contact',
            data:{}
          });

        }
})();
