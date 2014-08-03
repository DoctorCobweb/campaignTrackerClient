'use strict';

describe('Directive: totalAllActivitiesGraph', function () {

  // load the directive's module
  beforeEach(module('campaignTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<total-all-activities-graph></total-all-activities-graph>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the totalAllActivitiesGraph directive');
  }));
});