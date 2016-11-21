(function () {
    'use strict';

    angular.module('app', [
        'app.main',
        'app.nav.menu',
        'app.nav.side',
        'app.nav.top',
        'app.home',
        'app.projects',
        'app.about',
        'app.contact',
        'ui.router',
        'ngMaterial'
    ]);
})();
