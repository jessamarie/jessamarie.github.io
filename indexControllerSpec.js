"use strict";

describe("indexController", function () {
    var log, locations, controller, httpBackend, vm;

    beforeEach(module("app.index"));

    beforeEach(inject(function ($scope, $controller, $httpBackend, $log, $location) {

        location = $location;
        log = $log;

        httpBackend = $httpBackend;
        controller = $controller("indexController", {});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });
});
