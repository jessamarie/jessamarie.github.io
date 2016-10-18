(function () {
    'use strict';

    angular.module('app')

          .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('root', {
          abstract: true,
          url: '/',
          data: {
            title: 'Home'
          },
          views: {
            'navigation': {
              templateUrl: 'navigation/navigation.html',
              controller: 'navController',
              controllerAs: 'nav'
            }
          }
        })
        // route for the home page
        .state('home', {
          url: "/",
          template: 'home/home.html',
          controller: 'indexController',
          controllerAs: 'index',
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
