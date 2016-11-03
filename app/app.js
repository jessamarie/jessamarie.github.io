(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.main',
        'app.nav',
        'app.nav.directive',
        'app.home',
        'app.projects',
        'app.about',
        'app.contact'      
    ]);
})();
