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

    it("should get mountain with given id", function () {
        expect(vm.mountain).toEqual({id: "1", mountain: "Mount Everest", metres: 8850, country: "Nepal-China"});
    });

    it("should delete element from mountains\" list and redirect to mountain\"s list view", function () {
        spyOn(state, "go");
        vm.delete(stateParams.mountainId);
        expect(state.go).toHaveBeenCalledWith("root.mountains.list");
    });
});
