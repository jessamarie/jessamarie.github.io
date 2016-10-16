/* global expect */

"use strict";

describe("aboutController", function () {
    var stateParams, state, controller, scope;

    beforeEach(module("app.about"));

    beforeEach(inject(function ($controller, $state) {
        state = $state;
      //  stateParams = {param: "value"};
        controller = $controller("aboutController", {$stateParams: stateParams, $state: state});
        scope = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

});
