/* global expect */

"use strict";

describe("homeController", function () {
    var stateParams, state, controller, scope;

    beforeEach(module("app.home"));

    beforeEach(inject(function ($controller, $state) {
        state = $state;
      //  stateParams = {param: "value"};
        controller = $controller("homeController", {$stateParams: stateParams, $state: state});
        scope = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

});
