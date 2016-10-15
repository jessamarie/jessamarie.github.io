(function () {
    'use strict';

    angular.module('app')

            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/about/');
        $urlRouterProvider.when('/', '/about/');
        $urlRouterProvider.when('/about', '/about');
        $urlRouterProvider.when('/about/', '/about');
        $urlRouterProvider.when('/home', '/home');
        $urlRouterProvider.when('/home/', '/home');
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('root', {
                    abstract: true,
                    url: '/',
                    data: {
                        title: 'Home',
                        breadcrumb: 'Home'
                    },
                    views: {
                        'menu': {
                            templateUrl: 'navigation/navigation.html',
                            controller: 'navController',
                            controllerAs: 'nav'
                        },
                        'content': {
                            template: 'Choose option from menu...'
                        },
                    }
                })
                .state('root.about', {
                    abstract: true,
                    url: 'about',
                    data: {
                        title: 'about',
                        breadcrumb: 'about'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'about/about.html',
                            controller: 'aboutController',
                            controllerAs: 'about'
                        }
                    }
                })
                .state('root.home', {
                    abstract: true,
                    url: 'home',
                    data: {
                        title: 'Home',
                        breadcrumb: 'Home'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/mountains/listView.html',
                            controller: 'MountainsListController',
                            controllerAs: 'MLC'
                        }
                    }
                });
    }
})();
