/* global expect */

"use strict";

describe("navController", function () {
    var scope,
    state,
    controller;

    beforeEach(module("app.nav"));

    beforeEach(inject(function ($controller, $rootScope, $state) {
        state = $state;
        scope = $rootScope.$new();
        controller = $controller("navController", {$scope: scope});
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

});
