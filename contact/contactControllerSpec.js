/* global expect */

"use strict";

describe("contactController", function () {
    var stateParams, state, controller, scope;

    beforeEach(module("app.contact"));

    beforeEach(inject(function ($controller, $state) {
        state = $state;
      //  stateParams = {param: "value"};
        controller = $controller("contactController", {$stateParams: stateParams, $state: state});
        scope = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

});
