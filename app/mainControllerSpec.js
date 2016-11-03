"use strict";

describe("mainController", function () {
    var log, locations, controller, httpBackend, vm;

    beforeEach(module("app.main"));

    beforeEach(inject(function ($scope, $controller, $httpBackend, $log, $location) {

        location = $location;
        log = $log;

        httpBackend = $httpBackend;
        controller = $controller("mainController", {});

    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });
});
