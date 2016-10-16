/* global expect */

"use strict";

describe("navController", function () {
    var scope, state, controller, vm;

    beforeEach(module("app.nav"));

    beforeEach(inject(function ($controller, $rootScope, $state) {
        state = $state;
        scope = $rootScope.$new();
        controller = $controller("navController", {$scope: scope, $state: state});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });
    
});
