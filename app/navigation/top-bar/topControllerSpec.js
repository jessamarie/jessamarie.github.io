/* global expect */

"use strict";

describe("topController", function () {
    var scope,
    state,
    controller;

    beforeEach(module("app.nav.top"));

    beforeEach(inject(function ($controller, $rootScope, $state) {
        state = $state;
        scope = $rootScope.$new();
        controller = $controller("topController", {$scope: scope});
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

});
