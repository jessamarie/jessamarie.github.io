/* global expect */

"use strict";

describe("projectsController", function () {
    var stateParams, state, controller, scope;

    beforeEach(module("app.projects"));

    beforeEach(inject(function ($controller, $state) {
        state = $state;
      //  stateParams = {param: "value"};
        controller = $controller("projectsController", {$stateParams: stateParams, $state: state});
        scope = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

});
