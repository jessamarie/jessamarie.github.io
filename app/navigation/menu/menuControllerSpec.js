/* global expect */

"use strict";

describe('menuController', function () {
    var scope,
    state,
    controller;

    beforeEach(module('app.nav.menu'));

    beforeEach(inject(function ($controller, $rootScope, $state) {
        state = $state;
        scope = $rootScope.$new();
        controller = $controller('menuController', {$scope: scope});
    }));

    it('should be defined', function () {
        expect(controller).toBeDefined();
    });

});
